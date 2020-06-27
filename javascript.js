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
function agregarProducto(){
  let nombre = document.getElementById("name").value;
  let descripcion = document.getElementById("description").value;
  let precio = document.getElementById("price").value;
  let img = document.getElementById("image").value;
  let newProducto = new Producto(nombre,descripcion,precio,img);
  productos.push(newProducto);
  listarProductos()
}

function listarProductos() {
  let tbody = document.getElementById("tbody");
  console.log(tbody);
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
  console.log(table,"table");
};
