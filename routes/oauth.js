const express = require('express');
const generateGoogleAuthUrl = require('../controllers/google/googleAuthUrl');

const router = express.Router();

router.post('/google/url', generateGoogleAuthUrl);

module.exports = router;
