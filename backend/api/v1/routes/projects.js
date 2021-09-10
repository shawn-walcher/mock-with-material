const express = require('express');
const router = express.Router();
const projectsController = require('../controllers/projectsController');

//CREATE

//READ
router.get('/', projectsController.authorizationValidate, projectsController.paginatedIndex);
router.get('/happy_path', projectsController.authorizationValidate, projectsController.paginatedIndex);
router.get('/:project_id/google_computer_firewall', projectsController.authorizationValidate, projectsController.paginatedIndex);

//UPDATE

//DELETE

module.exports = router;
