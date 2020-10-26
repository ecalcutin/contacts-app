import Joi from 'joi';

export const ENV_SCHEMA = Joi.object({
    NODE_ENV: Joi.string().valid('development', 'production').required(),
    MICROSERVICE_PORT: Joi.number().required(),
    MONGO_USER: Joi.string().required(),
    MONGO_PASS: Joi.string().required(),
    MONGO_HOST: Joi.string().required(),
    MONGO_URI: Joi.string().required(),
});