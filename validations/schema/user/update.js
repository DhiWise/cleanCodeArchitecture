const Joi = require('joi');

const updateSchema = Joi.object({
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
}).unknown(true);;
module.exports = updateSchema;

