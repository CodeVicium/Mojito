let mostrarSalames = () => {
  let salames = ["eze", "lucas", "jhony", "gorriado"];

  for (let i = 0; i < salames.length; i++) {
    console.log(`${salames[i][0].toUpperCase()}${salames[i].slice(1)}`);
  }
};

var saludo = " hola ",nombre,final = " !",resultado;
{
  nombre = prompt("soy ATLAS cual es tu nombre");
  resultado = saludo + nombre + final;
  alert(resultado);
}

let pregunta = "! ",accion,signo = " buenisimo a buscarlo!",resultado1;
{
  accion = prompt("que te gustaria saber hoy de bebidas?");
  resultado1 = pregunta + accion + signo;
  alert(resultado1);
}

let sugerir = "entra a nuestra pagina y encuentra lo que buscas tenemos mucho de eso gracias!";
alert(sugerir);
