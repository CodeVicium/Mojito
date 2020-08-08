let saveValues;
let jugar = () => {
  // el nombre de los jugadore solo se pide una vez despues no se deben mostrar
  // se deberia mostrar despues de la primera vez solo un cuadro con su nombre
  console.log(document.getElementsByName("jugador"));
  if (!saveValues) {
    let player1 = document.getElementsByName("jugador")[0].value;
    let player2 = document.getElementsByName("jugador")[1].value;
    if (player1 && player2) {
      saveValues = [player1, player2];
    } else {
      alert("no ingreso correctamente los nombres");
      return;
    }
  }

  // validacion ligica que obtiene como resultado un booleano
  /* falsy values :
     variable = undefined,null,false,0,"";
     validacion por ancho de array : variable.legth va a dar falso cuando el array este vacio
  */

  let valorPlayer1 = Math.ceil(Math.random() * 6);
  let valorPlayer2 = Math.ceil(Math.random() * 6);
  let paternPlayer1 = document.getElementById("player1");
  let paternPlayer2 = document.getElementById("player2");

  // validar que no hay imagenes anteriores antes de poner una nueva
  // poner loading mientras se define el resultado y el resultado debe tardar 4 segundos

  console.log(paternPlayer1.children, "papa1");
  console.log(paternPlayer2.children, "papa2");
  const validarSiTieneUnHIjoImg = (arrayDeHijos) => {
    console.log(arrayDeHijos, "array de hijos");
    let tuboHijoImg = false;

    for (let i = 0; i < arrayDeHijos.length; i++) {
      console.log(arrayDeHijos[i]);
    }
    return tuboHijoImg;
  };
  if (
    validarSiTieneUnHIjoImg(paternPlayer1.children) &&
    validarSiTieneUnHIjoImg(paternPlayer2.children)
  ) {
    console.log("paso");
  } else {
    console.log("no paso");
  }

  let imgPlayer1 = document.createElement("img");
  imgPlayer1.setAttribute("src", `./img/${valorPlayer1}.jpg`);
  imgPlayer1.style.maxWidth = "8rem";
  /*
    para agregar un clase de css a un nodo de tipo html
    imgPlayer1.classList.add("pepe");
    
    para eliminar un clase de css a un nodo de tipo html
    imgPlayer1.classList.remove("pepe");
    */

  let imgPlayer2 = document.createElement("img");
  imgPlayer2.setAttribute("src", `./img/${valorPlayer2}.jpg`);
  imgPlayer2.style.maxWidth = "8rem";

  paternPlayer1.appendChild(imgPlayer1);
  paternPlayer2.paternPlayer2.appendChild(imgPlayer2);

  let ganador =
    valorPlayer1 > valorPlayer2
      ? `gano ${player1}`
      : valorPlayer1 === valorPlayer2
      ? ` Fue empate`
      : `gano ${player2}`;

  alert(`El ganador fue ${ganador}`); // el resultado se debe mostrar bonito al costado derecho de las imagenes

  alert("debera cargar los nombres de los jugadores antes de iniciar el juego");
};
var mostrarStupido=()=>{
  // mostrar el indice de la palabra stupido
  let stupid = "habia una vez un circo que siempre tenia stupido y una variedad muy grande de stupido";
  let stupido = stupid.indexOf("stupido");
  document.getElementById("guaso").innerHTML = stupido;
}
var cortarCirco=()=>{
  // mostrar el indice de la palabra stupido
  let stupid = "habia una vez un circo que siempre tenia stupido y una variedad muy grande de stupido";
  let stupidos = stupid.indexOf("circo");
  let gato = stupid.slice(stupidos,22);
  document.getElementById("tapita").innerHTML = gato;
}
var cambiarAHombre=()=>{
  // mostrar el indice de la palabra stupido
  let palabra = "yo alguna vez fui mujer";
  document.getElementById("tapita").innerHTML = gato;
}