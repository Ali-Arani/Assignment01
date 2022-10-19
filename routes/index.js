var express = require('express');
var router = express.Router();
let indexController=require('../controllers/index.controller');

/* GET home page. */

router.get('/', indexController.home);

router.get('/about', function(req, res, next) {
  res.render(
    'about', 
    { 
      title:'About', 
      name: 'Alireza'
    }
  );
});
router.get('/project',indexController.projects );
router.get('/services', indexController.services);
router.get('/contact',indexController.contact );

module.exports = router;
