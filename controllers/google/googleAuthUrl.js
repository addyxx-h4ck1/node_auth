const { config } = require('dotenv');
const { google } = require('googleapis');
config();

const generateGoogleAuthUrl = async (req, res) => {
  try {
    const oauth2Client = new google.auth.OAuth2({
      client_id: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_CLIENT_SECRET,
      redirectUri: process.env.GOOGLE_OAUTH_REDIRECT_URI,
    });

    const authUrl = await oauth2Client.generateAuthUrl({
      scope: ['https://www.googleapis.com/auth/userinfo.email'],
    });

    res.status(201).json({ ok: true, authUrl });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: error?.message || 'Internal server error' });
  }
};

module.exports = generateGoogleAuthUrl;
