let carrito = [];
let total = 0;

function agregarAlCarrito(nombre_servicio, precio_servicio) {
    // alert(nombre + ' ' + precio);
    let servicio = { nombre: nombre_servicio, precio: precio_servicio };
    carrito.push(servicio);
    console.log(carrito);
    total = total + precio_servicio;
    total_carrito.innerText = '$' + total;
    Swal.fire(
        'servicio agregado',
        'Se ha agregado ' + nombre_servicio + ' al carrito de compras',
        'success'
    )
}