const campoNombre = document.querySelector('[name="nombre"]');
const campoTalla = document.querySelector('[name="talla"]');
const campoMarca = document.querySelector('[name="marca"]');
const campoCantidad = document.querySelector('[name="cantidad"]');
const botonCrear = document.getElementById("boton-crear");
const formularioPrenda = document.getElementById("formulario-prenda");
const prendasCuerpoTabla = document.querySelector("#prendas-tabla > tbody");
const botonesDeAccion = document.getElementById("botones-de-accion");

let prendaIndiceActual = 0;
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

function crearPrenda() {
  prendas.push(prendaActual);
  formularioPrenda.reset();
  prendaActual = {
    nombre: "",
    talla: "",
    marca: "",
    cantidad: 0,
  };

  listarPrendas();
}

function listarPrendas() {
  if (prendas.length === 0) {
    prendasCuerpoTabla.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center">No hay registros</td>
      </tr>
    `;
  } else {
    prendasCuerpoTabla.innerHTML = "";
  }

  prendas.forEach((prenda, index) => {
    prendasCuerpoTabla.innerHTML += `
      <tr>
        <td>${prenda.nombre}</td>
        <td>${prenda.talla}</td>
        <td>${prenda.marca}</td>
        <td>${prenda.cantidad}</td>
        <td>
          <button onclick="accionEditar(${index})">Editar</button>
          <button onclick="eliminarPrenda(${index})">Eliminar</button>
          <button onclick="verPrenda(${index})">Ver</button>
        </td>
      </tr>
    `;
  });
}

function accionEditar(index) {
  //3. Se precarga la prenda clonada en prenda actual
  prendaActual = Object.assign({}, prendas[index]);
  prendaIndiceActual = index;
  //4. Se precarga el fromulario
  campoNombre.value = prendaActual.nombre;
  campoMarca.value = prendaActual.marca;
  campoTalla.value = prendaActual.talla;
  campoCantidad.value = prendaActual.cantidad;

  //1'. Cambiar el botón crear a actualizar y agregar el botón de cancelar.
  iniciarBotonesActualizarYCancelar();
}

function iniciarBotonCrear() {
  botonesDeAccion.innerHTML = "";
  botonesDeAccion.innerHTML = `<button onclick="crearPrenda()" type="button">CREAR</button>`;
}

function iniciarBotonesActualizarYCancelar() {
  botonesDeAccion.innerHTML = "";
  botonesDeAccion.innerHTML = `
    <button type="button" onclick="actualizarPrenda()">ACTUALIZAR</button>
    <button type="button">CANCELAR</button>
  `;
}

function actualizarPrenda() {
  //Actualizamos la prenda dentro del array con el indice seleccionado
  prendas[prendaIndiceActual] = Object.assign({}, prendaActual);
  //Volver a dibujar la tabla
  listarPrendas();
  //Limpiar el formulario
  formularioPrenda.reset();
  //Cambiar el botón a crear
  iniciarBotonCrear();
}

function eliminarPrenda(index) {
  //Filtramos el array de prendas para dejar todos los datos diferentes al índice seleccionado
  //Por ejemplo si elijo el indice 1 para un array de 3 posiciones, se mantienen los registros de las posiciones 0 y 2.
  prendas = prendas.filter((_, i) => index !== i);
  //Redibujar la tabla
  listarPrendas();
}

function verPrenda(index) {
  //A través del índice obtenemos la información de la prenda dentro del array de prendas
  alert(JSON.stringify(prendas[index]));
  //De tarea: Agregar la funcion de la ventana modal
}

listarPrendas();
iniciarBotonCrear();

console.log("Se montó la aplicación");
