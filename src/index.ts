import express, { Application } from 'express';  
import morgan from 'morgan';
import swaggerUi from 'swagger-ui-express';
const swaggerDocument = require('../public/swagger.json');
import { taskRoutes  }from './routes';
import {
    deployment,
    deployments,
    port
} from './config';

const app:Application = express();

app.use(express.json());

if(deployment === deployments.development){
    app.use(morgan('tiny'));
}
app.use(express.static('public'));

app.use('api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get('/health', (req:any, res:any)=>{
    res.json({
        code: 200,
        message: "Api ok."
    })
})

app.use(`${process.env.MS_BASE_PATH}`, taskRoutes);

app.listen(port, ()=>{
    console.log("server running on port", port);
})