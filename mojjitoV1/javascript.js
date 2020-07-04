var productos = []; 
class Producto {
  constructor(nombre, descripcion, precio, pathImg) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
    this.pathImg = pathImg;
  }
}
function createNuevoField() {
  let input = document.createElement("input");
  input.classList.add("form-control");
  let carusel = document.getElementById("carousel");
  let tag = carusel.getElementsByTagName("input");
  carusel.appendChild(input);
}
function esPar(number) {
  return (number % 2) === 0;
}
// que el cliente vea el precio con el valor de la moneda local 
function agregarProducto(){
  // todos tienen que tener un valor
  // nombre y descripcion tiene que estar el dato que vas a guardar todo en minuscula 
  // descripcion del producto no puede superar los 140 caracteres
  // ante cada interaccion que tengamos con el usuario muestro un cartel que le indique cual fue su error 
  let nombre = document.getElementById("name").value; 
  let descripcion = document.getElementById("description").value;
  let precio = document.getElementById("price").value;
  let img = document.getElementById("image").value;
  let newProducto = new Producto(nombre,descripcion,precio,img);
  productos.push(newProducto);
  listarProductos()
}

function listarProductos() {
  // nombre descripcion se tienen que mostrar la primera letra en mayuscula
  // tiene que estar en la moneda local $
  let tbody = document.getElementById("tbody");
  for (let index = 0; index < productos.length; index++) {
    let img = document.createElement("img");
    let tr = tbody.insertRow();
    img.setAttribute("src",`./public/img/${productos[index].pathImg}`);
    tr.insertCell().appendChild(img);
    tr.insertCell().innerText= productos[index].nombre;
    tr.insertCell().innerText= productos[index].descripcion;
    tr.insertCell().innerText= productos[index].precio;
  }
 }
window.onload = () => {
  listarProductos()
};
