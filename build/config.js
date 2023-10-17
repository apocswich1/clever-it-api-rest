"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbEnabled = exports.servicetypes = exports.servicetype = exports.context = exports.port = exports.deployments = exports.deployment = void 0;
const isTest = process.env.NODE_ENV === 'test';
const envPath = isTest ? './test.env' : './dev.env';
require('dotenv').config({ path: envPath });
const env = __importStar(require("env-var"));
const deployments = {
    development: 'development',
    test: 'test',
    production: 'production'
};
exports.deployments = deployments;
const servicetypes = {
    API: "API"
};
exports.servicetypes = servicetypes;
process.env.NODE_ENV = process.env.NODE_ENV || deployments.development;
const deployment = env
    .get('NODE_ENV')
    .required()
    .asEnum(Object.values(deployments));
exports.deployment = deployment;
const servicetype = env
    .get('SERVICE_TYPE')
    .required()
    .asEnum(Object.values(servicetypes));
exports.servicetype = servicetype;
const dbEnabled = process.env.DB_ENABLED === 'true' ? true : false;
exports.dbEnabled = dbEnabled;
const port = process.env.PORT ? parseInt(process.env.PORT) : 80000;
exports.port = port;
const context = process.env.CONTEXT || '';
exports.context = context;
