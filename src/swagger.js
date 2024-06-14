const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'awsome Pet have API',
            version: '1.0.0',
            description: 'API for managing pet adoptions',
        },
        servers: [
            {
                url: 'http://localhost:4001',
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);





module.exports = (app) => {
    app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};