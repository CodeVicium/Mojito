let mostrarSalames = () => {
  let salames = ["eze", "lucas", "jhony", "gorriado"];

  for (let i = 0; i < salames.length; i++) {
    console.log(`${salames[i][0].toUpperCase()}${salames[i].slice(1)}`);
  }
};
