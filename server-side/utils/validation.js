const Joi = require("joi");

const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

const validateRegister = (req, res) => {
  const schema = Joi.object({
    username: Joi().string().alphanum().min(3).max(30).required(),
    password: Joi.string().regex(passwordPattern).required(),
    repeat_password: Joi.ref('password'),
    
  });
};
