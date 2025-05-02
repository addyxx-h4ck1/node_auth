const logger = require('../libs/logger');

const requestsLogger = async (req, res, next) => {
  try {
    await logger(
      `${req.method}\t${req.url}\t${req.headers.origin}\t${req.headers['user-agent']}\n`,
      'requests.log',
    );
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = requestsLogger;
