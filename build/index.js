"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swaggerDocument = require('../public/swagger.json');
const routes_1 = require("./routes");
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
if (config_1.deployment === config_1.deployments.development) {
    app.use((0, morgan_1.default)('tiny'));
}
app.use(express_1.default.static('public'));
app.use('api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.get('/health', (req, res) => {
    res.json({
        code: 200,
        message: "Api ok."
    });
});
app.use(`${process.env.MS_BASE_PATH}`, routes_1.taskRoutes);
app.listen(config_1.port, () => {
    console.log("server running on port", config_1.port);
});
