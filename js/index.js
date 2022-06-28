if(!localStorage.getItem('carrito')){
    localStorage.setItem('carrito', JSON.stringify([]))
}
let productosIndex = document.getElementById('productosIndex')
fetch('producto.json')
.then(promise => promise.json())
.then(data => {
    data.forEach(element => {
        productosIndex.innerHTML += `
        <div class="card bg-light mb-3" id="producto${element.id}" style="width: 18rem; margin: 6px;">
        <img src="./img/${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title">${element.nombre}</h5>
         <p class="card-text">$${element.precio}</p>
         <p class="card-text">Color Disponible: ${element.color}</p>
         <p class="card-text">Stock: ${element.stock}</p>
         <button id="btnProducto${element.id}" class="btn btn-secondary"><img src="https://img.icons8.com/ios-glyphs/20/undefined/add-shopping-cart.png"/></button>
         </div>
        </div>
        `
    });
    data.forEach(element => {
        document.getElementById(`btnProducto${element.id}`).addEventListener('click', () =>{
                if (arrayProductos.find(producto => producto.id == element.id)) {
                    let indice = arrayProductos.findIndex(producto => producto.id == element.id)
                    if(arrayProductos[indice].cant < element.stock) {
                    arrayProductos[indice].cant++;
                    }
                    localStorage.setItem('carrito', JSON.stringify(arrayProductos))
                }else {
                    let newProducto = new Producto(element.id, element.img, element.nombre, element.color, element.precio, element.stock)
                    arrayProductos.push(newProducto)
                    localStorage.setItem('carrito', JSON.stringify(arrayProductos))
                }
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Se añadio al carrito',
                    showConfirmButton: false,
                    timer: 1000,
                })
        })
    });
})