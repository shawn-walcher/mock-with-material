const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

//CREATE

//READ
router.get('/', projectsController.authorizationValidate, projectsController.paginatedIndex);
router.get('/happy_path', projectsController.authorizationValidate, projectsController.paginatedIndex);
router.get('/:projectID', projectsController.authorizationValidate, projectsController.paginatedIndex);
router.get('/:projectID/google_computer_firewall', projectsController.authorizationValidate, projectsController.paginatedIndex);
router.get('/:projectID/google_compute_network', projectsController.authorizationValidate, projectsController.paginatedIndex);
router.get('/:projectID/google_iam_roles', projectsController.authorizationValidate, projectsController.paginatedIndex);
router.get('/:projectID/google_project_iam_binding', projectsController.authorizationValidate, projectsController.paginatedIndex);
router.get('/:projectID/google_project_iam_binding/:role', projectsController.authorizationValidate, projectsController.paginatedIndex);
router.get('/:projectID/google_service_account', projectsController.authorizationValidate, projectsController.paginatedIndex);
router.get('/:projectID/requests', projectsController.authorizationValidate, projectsController.paginatedIndex);

//UPDATE

//DELETE

module.exports = router;
