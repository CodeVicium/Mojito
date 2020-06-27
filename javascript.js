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
  console.log(tag, "tag");
  carusel.appendChild(input);
}
function esPar(number) {
  return (number % 2) === 0;
}
console.log(productos,"productos");
function agregarProducto(){
  let nombre = document.getElementById("name").value;
  let descripcion = document.getElementById("description").value;
  let precio = document.getElementById("price").value;
  let img = document.getElementById("image");
  let newProducto = new Producto(nombre,descripcion,precio,img);
  productos.push(newProducto);
  console.log(productos,"productos");
}

function listarProductos() {
  let tbody = document.getElementById("tbody");
  console.log(tbody);
  for (let index = 0; index < productos.length; index++) {
    let img = document.createElement("img");
    let tr = tbody.insertRow();
    img.setAttribute("src",productos[index].pathImg);
    console.log(img,"img");
    tr.insertCell().appendChild(img);
    tr.insertCell().innerText= productos[index].nombre;
    tr.insertCell().innerText= productos[index].descripcion;
    tr.insertCell().innerText= productos[index].precio;
   
  }
 }
window.onload = () => {

  console.log(table,"table");
};
