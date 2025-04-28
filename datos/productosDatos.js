let listaProductos = [];

function obtenerProductos() {
    return listaProductos;
}

function guardarProducto(producto) {
    listaProductos.push(producto);
}

function obtenerProductoPorId(id) {
    return listaProductos.find(p => p.id === id);
}

function actualizarProducto(id, datosActualizados) {
    const index = listaProductos.findIndex(p => p.id === id);
    if (index !== -1) {
        listaProductos[index] = { ...listaProductos[index], ...datosActualizados };
        return listaProductos[index];
    }
    return null;
}

function eliminarProducto(id) {
    const index = listaProductos.findIndex(p => p.id === id);
    if (index !== -1) {
        return listaProductos.splice(index, 1);
    }
    return null;
}

module.exports = { obtenerProductos, guardarProducto, obtenerProductoPorId, actualizarProducto, eliminarProducto };
