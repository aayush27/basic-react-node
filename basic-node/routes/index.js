import express from 'express';
import auth from './auth.route';
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({ message: 'Hello world!' });
});

router.use('/login', auth);

module.exports = router;
