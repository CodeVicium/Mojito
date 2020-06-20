var img = [];
function createNuevoField(){
  let input = document.createElement("input");
  input.classList.add("form-control");
  let carusel = document.getElementById("carousel");
  let tag = carusel.getElementsByTagName("input");
  console.log(tag,"tag")
  carusel.appendChild(input);
}


