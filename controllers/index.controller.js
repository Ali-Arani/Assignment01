exports.home=function(req, res, next) {
    res.render(
      'index', 
      { 
        title:'Home', 
        name: 'Alireza'
      }
    );
  };
  exports.projects=function(req, res, next) {
    res.render(
      'project', 
      { 
        title:'project', 
        name: 'Alireza'
      }
    );
  };
  exports.services=function(req, res, next) {
    res.render(
      'services', 
      { 
        title:'services', 
        name: 'Alireza'
      }
    );
  };
  exports.contact=function(req, res, next) {
    res.render(
      'contact', 
      { 
        title:'contact', 
        name: 'Alireza'
      }
    );
  };