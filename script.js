const campoNombre = document.querySelector('[name="nombre"]');
const campoTalla = document.querySelector('[name="talla"]');
const campoMarca = document.querySelector('[name="marca"]');
const campoCantidad = document.querySelector('[name="cantidad"]');
const botonCrear = document.getElementById("boton-crear");
const formularioPrenda = document.getElementById("formulario-prenda");

let prendaActual = {
  nombre: "",
  talla: "",
  marca: "",
  cantidad: 0,
};

campoNombre.addEventListener("input", function (event) {
  prendaActual.nombre = event.target.value;
});

campoTalla.addEventListener("input", function (event) {
  prendaActual.talla = event.target.value;
});

campoMarca.addEventListener("input", function (event) {
  prendaActual.marca = event.target.value;
});

campoCantidad.addEventListener("input", function (event) {
  prendaActual.cantidad = event.target.value;
});

botonCrear.addEventListener("click", function () {
  prendas.push(prendaActual);
  formularioPrenda.reset();
  prendaActual = {
    nombre: "",
    talla: "",
    marca: "",
    cantidad: 0,
  };

  console.log(prendas);
});
