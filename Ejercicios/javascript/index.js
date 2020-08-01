//let error = document.getElementById("error");

let jugar = () => {
  // el nombre de los jugadore solo se pide una vez despues no se deben mostrar
  // se deberia mostrar despues de la primera vez solo un cuadro con su nombre
  console.log(document.getElementsByName("jugador"));
  let player1 = document.getElementsByName("jugador")[0].value;
  let player2 = document.getElementsByName("jugador")[1].value;
  // validacion ligica que obtiene como resultado un booleano
  /* falsy values :
     variable = undefined,null,false,0,"";
     validacion por ancho de array : variable.legth va a dar falso cuando el array este vacio
  */
  if (player1 && player2) {
    // validar que el usuario haya escrito un valor
    let valorPlayer1 = Math.ceil(Math.random() * 6);
    let valorPlayer2 = Math.ceil(Math.random() * 6);
    let paternPlayer1 = document.getElementById("player1");
    let paternPlayer2 = document.getElementById("player2");

    // validar que no hay imagenes anteriores antes de poner una nueva
    // poner loading mientras se define el resultado y el resultado debe tardar 4 segundos

    let imgPlayer1 = document.createElement("img");
    imgPlayer1.setAttribute("src", `./img/${valorPlayer1}.jpg`);
    let imgPlayer2 = document.createElement("img");
    imgPlayer2.setAttribute("src", `./img/${valorPlayer2}.jpg`);

    paternPlayer1.appendChild(imgPlayer1);
    paternPlayer2.appendChild(imgPlayer2);

    let ganador =
      valorPlayer1 > valorPlayer2
        ? `gano ${player1}`
        : valorPlayer1 === valorPlayer2
        ? ` Fue empate`
        : `gano ${player2}`;

    alert(`El ganador fue ${ganador}`); // el resultado se debe mostrar bonito al costado derecho de las imagenes
  } else {
    alert(
      "debera cargar los nombres de los jugadores antes de iniciar el juego"
    );
  }
};
