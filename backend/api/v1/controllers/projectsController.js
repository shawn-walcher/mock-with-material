const projectsModel = require('../models/projectsModel');

function handleError(apiRes, next) {
  if (apiRes.staus === 400) {
    const err = new Error(`Bad request: ${apiRes.response.data.error}`);
  } else {
    const err = new Error(`Error: ${apiRes.message}`);
  }
  err.status = apiRes.status;
  return next(err);
}

function paginatedIndex(req, res, next) {
  const { projectID, role } = req.params;
  const authorization = req.header('Authorization');
  const path = req.path.replace(/\/$/, '');
  const { limit, page, search, type } = req.query;
  const apiRes =
    limit && page
      ? projectsModel.getPaginatedList(projectID, path, authorization, limit, page, search, type)
      : projectsModel.getList(projectID, path, authorization, role, search, type);
  if (apiRes.err) return handleError(apiRes, next);
  const { status, data } = apiRes;
  res.status(status).json(data);
}

function authorizationValidate(req, res, next) {
  const auth = req.header('Authorization') || '';
  if (auth.length === 0) {
    return next({ message: 'missing authorization header', status: 401 });
  }
  next();
}

module.exports = { paginatedIndex, authorizationValidate };
