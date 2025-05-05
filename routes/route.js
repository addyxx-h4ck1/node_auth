const express = require('express');
const handleRootRequest = require('../controllers/rootContoller');
const handleNewUser = require('../controllers/createUser');
const handleLogin = require('../controllers/login');

const router = express.Router();

router.get('/', handleRootRequest);
router.post('/new', handleNewUser);
router.post('/login', handleLogin);

module.exports = router;
