// index.js

require('dotenv').config();
//importamos la configuracion del servidor
const app = require('./server');

//indicamos el puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server on port http://localhost:${PORT}/graphql`);
});
