exports.home=function(req, res, next) {
    res.render(
      'index', 
      { 
        title:'Home', 
        userName: req.user ? req.user.username : ''
      }
    );
  };
  exports.projects=function(req, res, next) {
    res.render(
      'project', 
      { 
        title:'project', 
        userName: req.user ? req.user.username : ''
      }
    );
  };
  exports.services=function(req, res, next) {
    res.render(
      'services', 
      { 
        title:'services', 
        userName: req.user ? req.user.username : ''
      }
    );
  };
  exports.contact=function(req, res, next) {
    res.render(
      'contact', 
      { 
        title:'contact', 
        userName: req.user ? req.user.username : ''
      }
    );
  };
  exports.about=function(req, res, next) {
    res.render(
      'about', 
      { 
        title:'About', 
        userName: req.user ? req.user.username : ''
      }
    );
  };