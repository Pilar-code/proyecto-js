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
    productosStorage.forEach(element => {
        document.getElementById(`eliminar${element.id}`).addEventListener('click', () =>{
            if (arrayProductos.find(producto => producto.id == element.id)) {   
                let indice = arrayProductos.findIndex(producto => producto.id == element.id)
                if(arrayProductos[indice].cant >= 1) {
                    arrayProductos[indice].cant--;
                    if(arrayProductos[indice].cant === 0 ){
                        arrayProductos.splice(indice, 1)
                    }
                    localStorage.setItem('carrito', JSON.stringify(arrayProductos))
                }
            }
        });
        document.getElementById(`sumar${element.id}`).addEventListener('click', () =>{
            if (arrayProductos.find(producto => producto.id == element.id)) {
                let indice = arrayProductos.findIndex(producto => producto.id == element.id)
                if(arrayProductos[indice].cant < element.stock) {
                    arrayProductos[indice].cant++;
                    localStorage.setItem('carrito', JSON.stringify(arrayProductos))
                }
            }
            
        });
    })
}

btnCarrito.addEventListener('click', () =>{
    productosEnCarrito(arrayProductos)
})

carritoBody.addEventListener('click', () => {
   productosEnCarrito(arrayProductos) 
})

compra.addEventListener('click', () =>{
    LimpiarCarrito();
    localStorage.clear();
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'La compra se ha realido con exito',
        showConfirmButton: false,
        timer: 3000,
      })
    arrayProductos = [];
});

function LimpiarCarrito() {
    while(carritoBody.firstChild){
       carritoBody.removeChild(carritoBody.firstChild)
    }
}