var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render(
    'index', 
    { 
      title:'Home', 
      name: 'Alireza'
    }
  );
});

router.get('/about', function(req, res, next) {
  res.render(
    'about', 
    { 
      title:'About', 
      name: 'Alireza'
    }
  );
});
router.get('/project', function(req, res, next) {
  res.render(
    'project', 
    { 
      title:'project', 
      name: 'Alireza'
    }
  );
});
router.get('/services', function(req, res, next) {
  res.render(
    'services', 
    { 
      title:'services', 
      name: 'Alireza'
    }
  );
});

module.exports = router;
