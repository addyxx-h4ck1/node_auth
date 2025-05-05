const bcrypt = require('bcrypt');

const hash = async (pwd) => {
  try {
    const h = await bcrypt.hash(pwd, 10);
    return h;
  } catch (error) {
    throw new error(error?.message || 'Failed to hash pwd');
  }
};

const compare = async (hash, pwd) => {
  try {
    const c = await bcrypt.compare(pwd, hash);
    return c;
  } catch (error) {
    throw new error(error?.message || 'Failed to compared pwd');
  }
};

module.exports = { hash, compare };
