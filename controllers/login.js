const { generateToken } = require('../libs/generateToken');
const { compare } = require('../libs/hashPassword');
const Prisma = require('../libs/prisma');

const handleLogin = async (req, res) => {
  const { email, password } = req.body;

  if (!email)
    return res.status(422).json({ ok: true, msg: 'Email not provided' });

  if (!password)
    return res.status(422).json({ ok: true, msg: 'password not provided' });

  try {
    const user = await Prisma.user.findUnique({ where: { email: email } });

    if (!user)
      return res
        .status(404)
        .json({ ok: false, msg: `User with email ${email} is not registered` });

    //Here we have the user in the DB
    const auth = await compare(user?.password, password);

    if (!auth)
      return res.status(401).json({ ok: false, msg: 'Invalid credentials' });

    //user crentials match (JWT in play)

    const token = await generateToken(user.id);

    res.cookie('token', token, {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
    });

    res.status(201).json({ ok: true, token });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ ok: false, msg: error?.message || 'Internal server error' });
  }
};

module.exports = handleLogin;
