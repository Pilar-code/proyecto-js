let btnCarrito = document.getElementById('btnCarrito')
let carritoBody = document.getElementById('carritoBody')
let compra = document.getElementById('compra')

function productosEnCarrito(productosStorage) {
    carritoBody.innerHTML = " "
    productosStorage.forEach(element => {
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
      <td>$${element.color}</td>
      <td><button class="btn" id="restar${element.id}"><img src="https://img.icons8.com/ios-glyphs/30/undefined/filled-trash.png"/></button></td>
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
 