const crypto = require("crypto");
const { ENCRYPTION } = require('../constants/constants');
const { RANDOM_BYTES, BASE_64, SHA_256, HEX } = ENCRYPTION

const generateSalt = () => crypto.randomBytes(RANDOM_BYTES).toString(BASE_64);

const generateHashedPassword = (salt, password) => (
    crypto.createHmac(SHA_256, salt)
    .update(password)
    .digest(HEX)
);

module.exports = {
    generateSalt,
    generateHashedPassword,
};
