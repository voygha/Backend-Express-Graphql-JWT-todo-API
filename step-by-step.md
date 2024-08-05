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

