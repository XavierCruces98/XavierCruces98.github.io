"use strict"

let change= true
const HTML_contenedor= document.querySelector(".contenedor")
const HTML_contenedor_traslado= document.querySelector(".contenedor-traslado")
const HTML_imagenDarkMode= document.querySelector(".imagen-dark-mode")
const HTML_hoja_css = document.querySelector("#mi-hoja-css")

const HTML_imagen_logo= document.querySelector("#foto-1")
const HTML_imagen_vector= document.querySelector("#imagen-vector")



HTML_imagenDarkMode.addEventListener("click", (evento)=>{ 
  evento.preventDefault(); 
  const evento_local = evento.target
  console.log(`TESTING img`, evento_local);

  cambiar_boton() ;
  evento.stopPropagation(); //evita que se duplique el evento
})

HTML_contenedor.addEventListener("click", (evento)=>{ 

  evento.preventDefault(); 
  const evento_local = evento.target
  console.log(`TESTING contenedor`, evento_local);

  cambiar_boton() 
})


function cambiar_boton() {
  if(change){
    HTML_hoja_css.href="estilos-dark.css",

    HTML_imagenDarkMode.classList.remove("imagen-desopacar")  // desopacado
    HTML_contenedor.classList.add("contenedor-black") // !Contenedor => oscurecemos  
    HTML_contenedor_traslado.classList.add("trasladar-sol-luna") //trasladamos y rotamos
    HTML_imagenDarkMode.classList.add("imagen-opacar") // primero opacamos
  
    setTimeout(() => { // tiempo para que termine de rotar

      HTML_contenedor.classList.remove("contenedor") // 
      HTML_contenedor.classList.add("contenedor-2") // !Contenedor => oscurecemos  

      HTML_contenedor_traslado.classList.remove("sol"), // despues de trasladar, cambiamos formato
      HTML_contenedor_traslado.classList.add("luna") , // despues de trasladar, cambiamos formato
      
      HTML_imagenDarkMode.classList.remove("imagen-opacar")   //  primero opacamos, quitamos esta clase
      HTML_imagenDarkMode.classList.add("imagen-desopacar") // segundo despopacamos
   
      HTML_imagenDarkMode.setAttribute("src","imagenes/luna.png" ) ;
  

      HTML_contenedor.classList.remove("contenedor-black") // !Contenedor => oscurecido
      HTML_contenedor_traslado.classList.remove("trasladar-sol-luna") // trasladado

    }, 500);

    HTML_imagen_logo.setAttribute("src","imagenes/Logo-blanco.png" ) 
    HTML_imagen_vector.setAttribute("src","imagenes/vector-blanco.png" ) 

    change=!change;
  }

  else {
    HTML_hoja_css.href= "estilos-ligth.css";

    HTML_imagenDarkMode.classList.remove("imagen-desopacar")   // desopacado
    HTML_contenedor.classList.add("contenedor-white") // !Contenedor => aclaramos  
    HTML_contenedor_traslado.classList.add("trasladar-luna-sol") //trasladamos
    HTML_imagenDarkMode.classList.add("imagen-opacar") // primero opacamos
  
    setTimeout(() => {
      HTML_contenedor.classList.remove("contenedor-2") // 
      HTML_contenedor.classList.add("contenedor") // !Contenedor => aclaramos 
  
      HTML_contenedor_traslado.classList.remove("luna"), // despues de trasladar, cambiamos formato
      HTML_contenedor_traslado.classList.add("sol") , // despues de trasladar, cambiamos formato

      HTML_imagenDarkMode.classList.remove("imagen-opacar") 
      HTML_imagenDarkMode.classList.add("imagen-desopacar") 

      HTML_imagenDarkMode.setAttribute("src","imagenes/sol.png" );

      HTML_contenedor.classList.remove("contenedor-white") // !Contenedor => aclarado
      HTML_contenedor_traslado.classList.remove("trasladar-luna-sol") // trasladado
     
    }, 500);

    HTML_imagen_logo.setAttribute("src","imagenes/LogoRecortado.png" ) 
    HTML_imagen_vector.setAttribute("src","imagenes/vector.png" )

    change=!change;
  }
}


