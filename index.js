let productosIndex = document.getElementById('productosIndex')
fetch('json/Productos.json')
.then(promise => promise.json)
.then(data => {
    data.forEach(element => {
        productosIndex.innerHTML += `
        <div class="card bg-light mb-3" id="producto${element.id}" style="width: 18rem; margin: 6px;">
        <img src="./img/${element.img}" class="card-img-top" alt="...">
        <div class="card-body">
         <h5 class="card-title">${element.nombre}</h5>
         <p class="card-text">${Element.precio}</p>
         <p class="card-text">${Element.color}</p>
         <p class="card-text">${Element.stock}</p>
         <button id="btnProducto${Element.id}" class="btn btn-secondary"><i class="fa-regular fa-cart-circle-plus"></i></button>
         </div>
        </div>
        `
    });
})