var express = require('express');
var router = express.Router();
let contactListController = require('../controllers/contactList.controller');

/* GET users listing. */
router.get('/list', contactListController.contactListView);


// Routers for edit
router.get('/edit/:id', contactListController.displayEditPage);
router.post('/edit/:id', contactListController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', contactListController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', contactListController.processAddPage);


// Route for Delete
router.get('/delete/:id', contactListController.performDelete);

module.exports = router;