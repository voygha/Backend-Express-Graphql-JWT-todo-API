# Explicacion del archivo

Aqui iremos haciendo todas las configuraciones de la API, la separe por puntos o tareas que iremos haciendo de forma secuencial, en este archivo se detallara todo el proceso desde cero hasta terminar la APP

1. Configuración del Proyecto:

- Inicializar un proyecto de Node.js.
- Instalar dependencias necesarias.
- Configurar la estructura de carpetas y archivos según tu especificación.

2. Configuración del Servidor:

- Crear un servidor Express.
- Configurar GraphQL para manejar nuestra base de datos.
- Establecer la conexión con la base de datos.

3. Autenticación con JWT:
- Crear un middleware para la autenticación.
- Implementar la generación y validación de tokens JWT.

4. Roles y Permisos:

- Definir los roles de administrador y usuario básico.
- Proteger rutas según el rol del usuario.

5. CRUD para Notas:

- Implementar la lógica para crear, leer, actualizar y borrar notas.
- Restringir el acceso a las notas según el rol del usuario.

6. Estructura de Carpetas:

- Configurar controladores y rutas.
- Manejar la lógica de negocio en los controladores.

# Paso 1 Inicializar el proyecto

### Inicializar el proyecto

```bash
npm init -y
```

### Instalar dependencias
Tenemos que instalar express, graphql, jwt, bcrypt y dotenv

- express: Para manejar las peticiones HTTP.
- graphql y express-graphql: Para gestionar la base de datos y consultas.
- jsonwebtoken: Para la generación y verificación de JWT.
- bcryptjs: Para encriptar contraseñas.
- dotenv: Para manejar variables de entorno.

```bash
npm install express graphql express-graphql jsonwebtoken bcryptjs dotenv
```

Instalar nodemon
```bash
npm install --save-dev nodemon
```
Agregamos un script en package.json para ejecutar nodemon:
```javascript
"scripts": {
  "start": "node src/index.js",
  "dev": "nodemon src/index.js"
}
```

### Estructura de carpetas
Creamos los siguientes archivos y carpetas:

```bash
mkdir src
cd src
mkdir controllers routes
touch index.js server.js database.js
cd controllers
touch notesController.js
cd ../routes
touch notesRoutes.js
```

Hasta aqui ya tendriamos la estructura basica del proyecto

# Paso 2 Configuración del Servidor:
Aqui comenzaremos a levantar nuestro servidor con node y express

Comencemos con la base da datos GraphQL, preparemos la conexión a la base de datos.

### Archivo `database.js`
En este archivo configuraremos nuestra base de datos utilizando GraphQL, usaremos un objeto de memoria como base de datos temporal.

Necesitaremos GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList del paquete de graphql que instalamos

```javascript
const { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLList } = require('graphql');
```

Para este ejemplo comenzaremos con datos ficticios para implementar pruebas

Creemos los datos ficticios para los usuarios y las notas:

```javascript
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
```

Definamos las tablas que usaremos:

```javascript
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
```
Definamos el Root Query
```javascript

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
```

Definamos el esquema

```javascript
// Creación del esquema
const schema = new GraphQLSchema({
  query: RootQuery,
});

```
Exportemos nuestra bd para pasarla al index o cualquier otro archivo que necesite importarlo

```javascript
module.exports = {
  schema,
  users,
  notes,
};
```

Puedes visitar el el archivo src/database.js para visualizar el archivo completo.

