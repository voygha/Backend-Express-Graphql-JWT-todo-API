// src/database.js

const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } = require('graphql');

// Datos de ejemplo para usuarios y notas
const users = [
  { id: '1', username: 'admin1', password: 'admin1', role: 'admin' },
  { id: '2', username: 'admin2', password: 'admin2', role: 'admin' },
  { id: '3', username: 'user1', password: 'user1', role: 'user' },
  { id: '4', username: 'user2', password: 'user2', role: 'user' },
];

const notes = [
  { id: '1', content: 'Nota 1 del usuario 1', userId: '3' },
  { id: '2', content: 'Nota 2 del usuario 1', userId: '3' },
  { id: '3', content: 'Nota 1 del usuario 2', userId: '4' },
];

// Definición del tipo Usuario
const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    username: { type: GraphQLString },
    role: { type: GraphQLString },
  },
});

// Definición del tipo Nota
const NoteType = new GraphQLObjectType({
  name: 'Note',
  fields: {
    id: { type: GraphQLString },
    content: { type: GraphQLString },
    userId: { type: GraphQLString },
  },
});

// Definición del Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    notes: {
      type: new GraphQLList(NoteType),
      resolve(parent, args) {
        return notes;
      },
    },
    users: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return users;
      },
    },
  },
});

// Creación del esquema
const schema = new GraphQLSchema({
  query: RootQuery,
});

//Exportamos el Esquema, los usuarios y las notas
module.exports = {
  schema,
  users,
  notes,
};