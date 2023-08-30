const { celebrate, Joi } = require('celebrate');
const { urlRegex } = require('../constants/urlRegex');

const userIdValidation = celebrate({
  params: Joi.object().keys({
    userId: Joi.string().required().length(24).hex(),
  }),
});

const updateProfileValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
});

const updateAvatarValidation = celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().pattern(urlRegex),
  }),
});

module.exports = {
  userIdValidation, updateProfileValidation, updateAvatarValidation,
};
