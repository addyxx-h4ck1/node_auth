const Prisma = require('../libs/prisma');

const handleRootRequest = async (req, res) => {
  try {
    const users = await Prisma.user.findMany();

    res.status(200).json({ ok: true, users });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: error?.message || 'Internal server error' });
  }
};

module.exports = handleRootRequest;
