//server
//requerimos express para montar el servidor
const express = require('express');
//Requerimos graphql para consultas http
const { createHandler } = require('graphql-http/lib/use/express');
// Requerimos el esquema de la base de datos 
const { schema } = require('./database');

const app = express();

// Configuración de GraphQL
// Configuración de GraphQL
app.use(
    '/graphql',
    createHandler({
        schema: schema,
        graphiql: true, // Interfaz para pruebas de GraphQL
        context: (req) => ({ user: req.user }), // Pasar el usuario al contexto de GraphQL
    })
);

module.exports = app;
