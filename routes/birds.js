var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
  let birdData = [
    {
        species: 'Cardinal',
        habitat: 'Woodland',
        food: 'Seed, fruit, insects',
    },
    {
        species: 'Robin',
        habitat: 'Woodland',
        food: 'Worms, insects, ',
    }
  ]
  res.send(birdData);
});

module.exports = router;
