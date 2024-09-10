const navbar = document.querySelector('.nav');
const abrir = document.querySelector('#abrir');
const cerrar = document.querySelector('#cerrar');

const contenido = document.getElementById('#subMenu');
const abrirCarro = document.getElementById('#abrirCarrito');
const cerrarCarro = document.getElementById('#cerrarCarrito');


const btnIncrementarCantidad = document.querySelector('#incrementar-cantidad');
const btnDisminuirCantidad = document.querySelector('#disminuir-cantidad');
const inputCantidad = document.querySelector('#cantidad');
const submitCarrito = document.querySelector('#agregar-al-carrito');
const vaciarCarrito = document.querySelector('#vaciar-carrito');


const storageCarrito=localStorage.getItem('carritoLS') ? parseInt(localStorage.getItem('carritoLS')) : 0;
cantidadCarrito.textContent = storageCarrito;


//menu hamburguesa
abrir.addEventListener('click', () => {
    nav.classList.add('visible');
})
cerrar.addEventListener('click', () => {
    nav.classList.remove('visible');
})


// Cambiamos la cantidad a agregar al carrito
btnIncrementarCantidad.addEventListener('click', (e) => {
    inputCantidad.value = parseInt(inputCantidad.value) + 1;

});
btnDisminuirCantidad.addEventListener('click', (e) => {
    if (parseInt(inputCantidad.value) > 1) {
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
    }
});

submitCarrito.addEventListener('click', (e) => {
    const storageCarrito=localStorage.getItem('carritoLS') ? parseInt(localStorage.getItem('carritoLS')) : 0;
    const totalCarrito = parseInt(inputCantidad.value) + storageCarrito;
    cantidadCarrito.textContent = totalCarrito;
    localStorage.setItem('carritoLS', totalCarrito);
    inputCantidad.value = 0;

    
});



vaciarCarrito.addEventListener('click', (e) => {
    cantidadCarrito.textContent = 0;
    localStorage.setItem('carritoLS', 0);
});



//Carrito

abrirCarrito.addEventListener('click', () => {
    subMenu.classList.add('clicked');
})
cerrarCarrito.addEventListener('click', () => {
    subMenu.classList.remove('clicked');
})

//ALERTAS RESPONSIVE
Swal.fire({

    title: '¡Bienvenido!',
    html: `
      <p>Al utilizar nuestro sitio web y realizar una compra, aceptas nuestros 
    <b> Términos y Condiciones </b>y 
    <b>Política de Privacidad.</p> </b>
      <p>Lee atentamente antes de continuar con la compra. Al hacer clic en "Aceptar", confirmas que has leído y estás de acuerdo con nuestras políticas.</p>
    `,
    backdrop: true,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false,
    stopKeydownPropagation: true,
    confirmButtonText: 'Aceptar',
}).then((result) => {
    if (result.isConfirmed) {
        // Acción cuando el usuario acepta los términos
        Swal.fire('¡Gracias!', 'Has aceptado los términos y condiciones.', 'success');
    }
});

//slider
const slider = document.getElementById('reseñasSlider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalItems = slider.children.length;

function showReview(index) {
    slider.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalItems;
    showReview(currentIndex);
});

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    showReview(currentIndex);
});
