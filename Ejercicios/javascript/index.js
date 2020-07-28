let jugar = () => {
  // el nombre de los jugadore solo se pide una vez despues no se deben mostrar 
 // se deberia mostrar despues de la primera vez solo un cuadro con su nombre 
  console.log(document.getElementsByName("name"));
  let player1 = document.getElementsByName("name")[0].value;
  let player2 = document.getElementsByName("name")[1].value;
  // validar que el usuario haya escrito un valor
  let valorPlayer1 = Math.ceil(Math.random() * 6);
  let valorPlayer2 = Math.ceil(Math.random() * 6);
  let paternPlayer1 = document.getElementById("player1");
  let paternPlayer2 = document.getElementById("player2");
  // validar que no hay imagenes anteriores antes de poner una nueva 
  // poner loading mientras se define el resultado y el resultado debe tardar 4 segundos 
  let imgPlayer1 = document.createElement("img");
  imgPlayer1.setAttribute("src",`./img/${valorPlayer1}.jpg`)
  let imgPlayer2= document.createElement("img");
  imgPlayer2.setAttribute("src",`./img/${valorPlayer2}.jpg`)
  paternPlayer1.appendChild(imgPlayer1);
  paternPlayer2.appendChild(imgPlayer2);
  let ganador =
    valorPlayer1 > valorPlayer2
      ? `gano ${player1}`
      : valorPlayer1 === valorPlayer2
      ? ` Fue empate`
      : `gano ${player2}`;
  alert(`El resultado fue ${ganador}`); // el resultado se debe mostrar bonito al costado derecho de las imagenes 
};