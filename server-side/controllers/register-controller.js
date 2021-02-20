const User = require('../models/User');
const { generateSalt, generateHashedPassword } = require('../utils/encryption');

const register = async (req, res, next) => {
    const { username, password, email, firstName, lastName, avatar } = req.body;
    
    const salt = generateSalt();
    const hashedPass = generateHashedPassword(salt, password);

    const user = new User({
        username,
        password: hashedPass,
        salt,
        email,
        firstName,
        lastName,
        avatar,
    });

    try {
        await user.save();
        res.json(user);
    } catch(err) {
        console.log(err)
        res.send(err);
    }
    
};

module.exports = { register };