//alert("Ла Русса Мадре")
//alert("quiere decir viva la madre rusa XD")
const rutaBase="./public/img/";
const change=()=>{
    let imagen = document.getElementById("foco");
    let arraySrc = imagen.src.split("/");
    let getState = arraySrc[arraySrc.length-1];
    const setImg=path=>imagen.setAttribute("src",rutaBase+path);
    if(getState==="apagado.jpg"){
       setImg("encendido.jpg");
    }else{
       setImg("apagado.jpg");
    }
}

const remera=()=>{
    let img= document.getElementsByClassName("relative")[0];
    img.classList.add("translate")
    console.log(img,"img");
}


