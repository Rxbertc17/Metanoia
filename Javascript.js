document.addEventListener("DOMContentLoaded", function () {
    const botonesCompra = document.querySelectorAll(".btn-comprar");
    botonesCompra.forEach(boton => {
        boton.addEventListener("click", function () {
            alert("Producto agregado al carrito 🛒🛒.");
        });
    });

});
