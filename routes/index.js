var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('sub-folder/login');
});

router.get('/birds/create', function(req, res, next) {
  res.render('birdList');
});

router.post('/birds/create', function(req, res, next) {
  const bird = {
    species: req.body.species,
    nickname: req.body.nickname,
    status: req.body.status
  };

  console.log('Bird object:', bird);

  // Pass the entire bird object to the confirmation page
  res.render('sub-folder/birds-created', bird);
});


module.exports = router;
