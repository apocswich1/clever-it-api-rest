const isTest = process.env.NODE_ENV === 'test';
const envPath = isTest ? './test.env' : './dev.env';

require('dotenv').config({path: envPath});
import * as env from 'env-var';

const deployments = {
    development: 'development',
    test: 'test',
    production: 'production'
};

const servicetypes = {
    API:"API"
}

process.env.NODE_ENV = process.env.NODE_ENV || deployments.development;

const deployment: string = env
    .get('NODE_ENV')
    .required()
    .asEnum(Object.values(deployments));

const servicetype: string = env
    .get('SERVICE_TYPE')
    .required()
    .asEnum(Object.values(servicetypes));

const dbEnabled: boolean = process.env.DB_ENABLED === 'true' ? true : false;

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 80000;

const context: string = process.env.CONTEXT || '';

export {
    deployment,
    deployments,
    port,
    context,
    servicetype,
    servicetypes,
    dbEnabled
};
