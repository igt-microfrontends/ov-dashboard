import * as joi from "joi"; // add joi to package.json -> npm install joi

interface EnvVars {
    VITE_CONNECT_REMOTE: boolean;
}

const envVarsSchema = joi
    .object({
        VITE_CONNECT_REMOTE: joi.boolean().required(),
    })
    .unknown(true);

const { error, value } = envVarsSchema.validate(import.meta.env);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    CONNECT_REMOTE: envVars.VITE_CONNECT_REMOTE,
};
