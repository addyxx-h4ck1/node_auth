const jwt = require('jsonwebtoken');
const { config } = require('dotenv');
config();

const generateToken = async (payload) => {
  try {
    const token = await jwt.sign(payload, process.env.JWT_SECRET);
    return token;
  } catch (error) {
    throw new error(error?.message || 'Failed to generate Token');
  }
};

module.exports = { generateToken };
