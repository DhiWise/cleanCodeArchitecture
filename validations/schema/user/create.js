const Joi = require('joi');

const createSchema = Joi.object({
    firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    isActive: Joi.boolean()
        .default(true),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
});
module.exports = createSchema;

