$(function() {
    // Cargar Menu
    $("#header").load("header.html");
    // Cargar el pie de página
    $("#footer").load("footer.html");
  });
  
  
  //Para productos agregar y quitar producto al carrito
  function agregarAlCarrito(nombre, precio) {
    var cart = document.querySelector('.cart');
    var item = document.createElement('div');
    item.classList.add('item');
    item.innerHTML = '<span class="name">' + nombre + '</span><span class="price">$ ' + precio.toFixed(2) + '</span>';
    var removeButton = document.createElement('button');
    removeButton.classList.add('remove');
    removeButton.textContent = 'Eliminar';
    removeButton.addEventListener('click', function() {
        quitarDelCarrito(item, precio);
    });
    item.appendChild(removeButton);
    cart.insertBefore(item, cart.firstChild);

    var totalElement = document.querySelector('.total');
    var total = parseFloat(totalElement.innerHTML.split(':')[1].trim().slice(1));
    total += precio;
    totalElement.innerHTML = 'Total: $ ' + total.toFixed(2);
    }

function quitarDelCarrito(item, precio) {
    var cart = document.querySelector('.cart');
    cart.removeChild(item);

    var totalElement = document.querySelector('.total');
    var total = parseFloat(totalElement.innerHTML.split(':')[1].trim().slice(1));
    total -= precio;
    totalElement.innerHTML = 'Total: $ ' + total.toFixed(2);
    }