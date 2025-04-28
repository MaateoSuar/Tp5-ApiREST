const datos = require('../datos/productosDatos');

function listarProductos() {
    return datos.obtenerProductos();
}

function agregarProducto(nombre, precio) {
    let producto = {
        id: datos.obtenerProductos().length + 1,
        nombre,
        precio
    };
    datos.guardarProducto(producto);
    return producto;
}

function obtenerProducto(id) {
    return datos.obtenerProductoPorId(id);
}

function actualizarProducto(id, nombre, precio) {
    return datos.actualizarProducto(id, { nombre, precio });
}

function borrarProducto(id) {
    return datos.eliminarProducto(id);
}

module.exports = { listarProductos, agregarProducto, obtenerProducto, actualizarProducto, borrarProducto };
