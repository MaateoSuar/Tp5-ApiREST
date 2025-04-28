const express = require('express');
const app = express();
const productosRutas = require('./rutas/productosRutas');

app.use(express.json());

app.use('/productos', productosRutas);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor API REST escuchando en puerto ${PORT}`);
});
