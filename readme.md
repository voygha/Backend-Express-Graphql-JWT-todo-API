# Explicacion de la Aplicacion

Crearemos una API con node y express.

## Base de datos
Una API sencilla de un todo list, usaremos graphql como base de datos.
 
## Tipos de usuarios
Tendremos dos tipos de usuarios, un administrador que podra ver todas las notas, de todos los usuarios y un usuario basico, el cual sera el que registre sus notas personales, este usuario basico unicamente podra ver sus notas, unicamente las de el, lo mismo con los demas usuarios, vamos a definir 2 usuarios administradores y 2 basicos.

Para este ejemplo lo haremos de automatica sin tener que crear una ruta o una api para los usuarios (De momento).

## Descripcion de las rutas
Crearemos y protegeremos las rutas para que la lista de notas solo pueda ser vista con el usuario logueado y de acuerdo a sus permisos devolverle sus notas o todas las tareas. 

## Funcionamiento de la API
La API hara proceso CRUD, considera eso porque el usuario basico solo podra hacer esto sobre las notas que le pertenezcan y el usuario administrador podra hacerlo sobre cualquier nota de cualquier usuario por lo que hay que validar el tipo de usuario y la peticion que esta solicitando, es decir si el usuario basico1 esta solicitando borrar o actualizar la info de una nota del usuario basico2 no deberia poder hacer esto, en cambio si lo hace un administrador deberia ser posible, quiero validar la autenticacion de los usuarios con JWT.

## Validacion con JWT
La validacion la haremos por medio de JWT para manipular la base de datos Graphql y validar los permisos de los usuarios por tokens o credenciales.


## Estructura del Proyecto
La estructura del proyecto estara compuesta por:

La carpeta src, la cual contendra:

- index.js sera el archivo de arranque
- server.js sera el archivo de configuracion del servidor y se exportara para ser importado de index.js
- databse.js sera el archivo que configure mi conexion a la base de datos y que se exportara para ser importado en el index.js
- Carpeta controllers ahi estaran mis controladores para renderizar o para hacer la manipulacion del CRUD de las notas
- Carpeta routes la cual se encargara de definir las rutas y de importar los controladores que hacen que la ruta /notes muestre todas las notas del usuario por ejemplo.


## Escalabilidad del proyecto

Comencemos a configurar el proyecto desde cero

El paso a paso lo encontraras en el step-by-step.md del proyecto.


