const router = express.Router();
import express from 'express';
import { login } from '../controllers/login.controller';

router.get('/', [], login);

module.exports = router;