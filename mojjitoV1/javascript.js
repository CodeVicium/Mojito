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
  let nombre = document.getElementById("name").value.toLowerCase(); 
  let descripcion = document.getElementById("description").value.toLowerCase();
  let precio = document.getElementById("price").value;
  let img = document.getElementById("image").value;
  let newProducto = new Producto(nombre,descripcion,precio,img);
  if(nombre && descripcion && precio && img){
    productos.push(newProducto);
    listarProductos()
  }
  else{
    alert("No se olvide de llenar los campos de manera correcta");
  }
}
function capitalizeFirstLetter(text){
  return text[0].toUpperCase() + text.slice(1);
}
function convertToLocalMoney(number){
  let localMoney = Number.parseFloat(number).toFixed(2);
  return `$ ${localMoney}`
}
function listarProductos() {
  let tbody = document.getElementById("tbody");
  for (let index = 0; index < productos.length; index++) {
    let img = document.createElement("img");
    let tr = tbody.insertRow();
    img.setAttribute("src",`./public/img/${productos[index].pathImg}`);
    tr.insertCell().appendChild(img);
    tr.insertCell().innerText= capitalizeFirstLetter(productos[index].nombre);
    tr.insertCell().innerText= capitalizeFirstLetter(productos[index].descripcion);
    tr.insertCell().innerText= convertToLocalMoney(productos[index].precio);
  }
 }
window.onload = () => {
  listarProductos()
};
