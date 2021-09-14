const firewalls = require('./mockedPayloads/google_compute_firewall');
const networks = require('./mockedPayloads/google_compute_network');
const iamRoles = require('./mockedPayloads/google_iam_roles');
const iamBindings = require('./mockedPayloads/google_project_iam_binding');
const projects = require('./mockedPayloads/projects');
const roleBindings = require('./mockedPayloads/roleBindings');

const projectsService = {
  getList: function (projectID = null, path, authorization, role = null, search = null, type = null) {
    //Since just mocking paginated data at moment setting this to always be page 1 for non-paginated requests
    let limit = 10;
    let page = 1;
    if (projectID === null) {
      switch (path) {
        case '/happy_path':
          return projects(path, authorization, limit, page, search, type);
        case '/sad_path':
          return { status: 500, err: true, message: `Appropriate error message for ${path}` };
        case `/${projectID}/iam_binding/${role}`:
          return roleBindings(projectID, role);
        default:
          return { status: 400, err: true, response: { data: { error: `Appropriate bad request message for ${path}` } } };
      }
    } else {
      switch (path) {
        case `${projectID}/google_compute_firewall`:
          return firewalls(projectID, path, authorization, limit, page, search, type);
        case `${projectID}/google_compute_network`:
          return networks();
        case '/sad_path':
          return { status: 500, err: true, message: `Appropriate error message for ${path}` };
        default:
          return { status: 400, err: true, response: { data: { error: `Appropriate bad request message for ${path}` } } };
      }
    }
  },
  getPaginatedList: function (projectID = null, path, authorization, limit, page, search = null, type = null) {
    if (projectID === null) {
      switch (path) {
        case '/happy_path':
          return projects(path, authorization, limit, page, search, type);
        case '/sad_path':
          return { status: 500, err: true, message: `Appropriate error message for ${path}` };
        default:
          return { status: 400, err: true, response: { data: { error: `Appropriate bad request message for ${path}` } } };
      }
    } else {
      switch (path) {
        case `${projectID}/google_compute_firewall`:
          return firewalls(projectID, path, limit, page, search, type);
        case `${projectID}/google_iam_roles`:
          return iamRoles(projectID);
        case `${projectID}/iam_bindings`:
          return iamBindings(projectID, path, limit, page);
        case '/sad_path':
          return { status: 500, err: true, message: `Appropriate error message for ${path}` };
        default:
          return { status: 400, err: true, response: { data: { error: `Appropriate bad request message for ${path}` } } };
      }
    }
  },
};

module.exports = projectsService;
