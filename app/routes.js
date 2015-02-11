var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/:something', function(req, res, next) {
  var something = req.params.something;

  var file = something.length ? something.concat('.html') : 'index.html',
      path = something.length ? './public/html/' : './public/';

  res.sendfile(path.concat(file));

});

module.exports = router;
