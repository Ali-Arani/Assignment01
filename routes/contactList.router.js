var express = require('express');
var router = express.Router();
let contactListController = require('../controllers/contactList.controller');


// helper function for guard purposes
function requireAuth(req, res, next)
{
    // check if the user is logged in
    if(!req.isAuthenticated())
    {
        req.session.url = req.originalUrl;
        return res.redirect('/users/signin');
    }
    next();
}

/* GET users listing. */
router.get('/list', contactListController.contactListView);


// Routers for edit
router.get('/edit/:id', requireAuth, contactListController.displayEditPage);
router.post('/edit/:id', requireAuth, contactListController.processEditPage);


/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', requireAuth, contactListController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', requireAuth, contactListController.processAddPage);


// Route for Delete
router.get('/delete/:id', requireAuth, contactListController.performDelete);

module.exports = router;