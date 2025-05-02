const path = require('path');
const fsPromises = require('fs/promises');
const fs = require('fs');
const { format } = require('date-fns');

const logger = async (log, file_name) => {
  try {
    const date = format(new Date(), 'dd/MM/yyyy\t\tHH:mm:ss');
    const message = `${date}\t${log}`;

    if (!fs.existsSync(path.join(__dirname, '..', 'logs'))) {
      await fsPromises.mkdir(path.join(__dirname, '..', 'logs'));
    }

    await fsPromises.appendFile(
      path.join(__dirname, '..', 'logs', file_name),
      message,
    );
  } catch (error) {
    console.log(error);
  }
};

module.exports = logger;
