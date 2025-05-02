const express = require('express');
const handleRootRequest = require('../controllers/rootContoller');
const handleNewUser = require('../controllers/createUser');

const router = express.Router();

router.get('/', handleRootRequest);
router.post('/new', handleNewUser);

module.exports = router;
