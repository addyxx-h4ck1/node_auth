const hash = require('../libs/hashPassword');
const Prisma = require('../libs/prisma');

const handleNewUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const pwd = await hash(password);

    const new_user = await Prisma.user.create({
      data: {
        email: email,
        name: name,
        password: pwd,
      },
    });

    res.status(201).json({ ok: true, msg: 'User created' });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: error?.message || 'Internal server error' });
  }
};

module.exports = handleNewUser;
