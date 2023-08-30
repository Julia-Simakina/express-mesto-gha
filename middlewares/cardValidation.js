const { celebrate, Joi } = require('celebrate');
const { urlRegex } = require('../constants/urlRegex');

const cardCreateValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(urlRegex),
  }),
});

const cardIdValidation = celebrate({
  params: Joi.object().keys({
    cardId: Joi.string().required().length(24).hex(),
  }),
});

module.exports = {
  cardCreateValidation, cardIdValidation,
};
