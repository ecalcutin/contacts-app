import Joi from 'joi';

export const ENV_SCHEMA = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production').required(),
    MICROSERVICE_PORT: Joi.number().required()
});