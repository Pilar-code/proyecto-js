let btnCarrito = document.getElementById('btnCarrito')
let carritoBody = document.getElementById('carritoBody')
let compra = document.getElementById('compra')

function productosEnCarrito(productosStorage) {
    carritoBody.innerHTML = " "
    productosStorage.forEach(element => {
        let precio = element.cant * element.color;
        carritoBody.innerHTML += `
  <table class="table">
     <thead>
     <tr>
      <th scope="col">#</th>
      <th scope="col">imagen</th>
      <th scope="col">Producto</th>
      <th scope="col">Cantidad</th>
      <th scope="col">precio</th>
     </tr>
     </thead>
     <tbody>
     <tr>
      <th scope="row">~</th>
      <td><img src="./img/${element.img}" class="imagenCarrito" alt="..."></td>
      <td>${element.precio}</td>
      <td>${element.cant}</td>
      <td>$${precio}</td>
      <td><button class="btn" id="eliminar${element.id}"><img src="https://img.icons8.com/ios-glyphs/30/undefined/filled-trash.png"/></button></td>
      <td><button class="btn" id="sumar${element.id}"><img src="https://img.icons8.com/material-rounded/24/undefined/plus--v1.png"/></button></td>
     </tr>
     </tbody>
  </table>
        `
    });
}
btnCarrito.addEventListener('click', () =>{
    let productosStorage = JSON.parse(localStorage.getItem('carrito'))
    productosEnCarrito(productosStorage)
})


compra.addEventListener('click', () =>{
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'La compra se ha realido con exito',
        showConfirmButton: false,
        timer: 3000,
      })
})

/* productosEnCarrito.forEach(element => {
document.getElementById(`eliminar${element.id}`).addEventListener('click', () =>{
   if(arrayProductos.find((producto) => producto.cant === element.cant)) {
       let menos = arrayProductos.findIndex((producto) => producto.cant === element.cant)
       arrayProductos[menos].cant--;
       localStorage.setItem('carrito', JSON.stringify(arrayProductos))
    }
   })
}) */

productosEnCarrito(productosStorage).forEach(element => {
    document.getElementById(`sumar${element.id}`).addEventListener('click', () =>{
        if (arrayProductos.find(producto => producto.id == element.id)) {
            let indice = arrayProductos.findIndex(producto => producto.id == element.id)
            if(arrayProductos[indice].cant < element.stock) {
                arrayProductos[indice].cant++;
            }
            localStorage.setItem('carrito', JSON.stringify(arrayProductos))
        }
    })
})