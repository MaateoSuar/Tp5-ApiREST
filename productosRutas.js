const express = require('express');
const router = express.Router();
const logica = require('../logica/productosLogica');

router.get('/', (req, res) => {
    res.json(logica.listarProductos());
});

router.post('/', (req, res) => {
    const { nombre, precio } = req.body;
    if (!nombre || !precio) {
        return res.status(400).json({ mensaje: 'Nombre y precio son obligatorios.' });
    }
    const producto = logica.agregarProducto(nombre, precio);
    res.status(201).json(producto);
});

router.get('/:id', (req, res) => {
    const producto = logica.obtenerProducto(parseInt(req.params.id));
    if (!producto) {
        return res.status(404).json({ mensaje: 'Producto no encontrado.' });
    }
    res.json(producto);
});

router.put('/:id', (req, res) => {
    const { nombre, precio } = req.body;
    const productoActualizado = logica.actualizarProducto(parseInt(req.params.id), nombre, precio);
    if (!productoActualizado) {
        return res.status(404).json({ mensaje: 'Producto no encontrado para actualizar.' });
    }
    res.json(productoActualizado);
});

router.delete('/:id', (req, res) => {
    const productoEliminado = logica.borrarProducto(parseInt(req.params.id));
    if (!productoEliminado) {
        return res.status(404).json({ mensaje: 'Producto no encontrado para eliminar.' });
    }
    res.json({ mensaje: 'Producto eliminado.' });
});

module.exports = router;
