"use strict"
const HTML_textArea = document.querySelector("textarea")
const HTML_botonEncriptar= document.querySelector("#Encriptar")
const HTML_botonDesencriptar = document.querySelector("#Desencriptar")
const HTML_copiar = document.querySelector("#Copiar")
const HTML_mensaje = document.querySelector(".mensaje")
const regex = /^([\.\,\s?]*[a-z]+[\.\,\s?]*)+$/ 

const evaluar_text = function(){
  if( !regex.test(HTML_textArea.value) ){
    HTML_copiar.style.display="none"
    HTML_mensaje.innerHTML=` <img src="imagenes/Muñeco.png" id="foto-2">
    <h2>Ningún mensaje fue encontrado</h2>
    <p>Ingresa el texto que desea encriptar o desencriptar.</p>`  

    HTML_mensaje.classList.add("mensaje")
    return true
  }
  else {
    HTML_copiar.style.display="initial" // no toy seguro pero bueno
    HTML_mensaje.classList.remove("mensaje")
    return false
  }
  
}

HTML_botonEncriptar.addEventListener("click", ()=>{
  if(evaluar_text()) return;
 
  const texto_encriptado=[]
  const texto = HTML_textArea.value

  for(let variable of [...texto]){

    if(variable==="e")      texto_encriptado.push("enter")
    else if(variable==="i") texto_encriptado.push("imes")
    else if(variable==="a") texto_encriptado.push("ai")
    else if(variable==="o") texto_encriptado.push("ober")
    else if(variable==="u") texto_encriptado.push("ufat")
    else { texto_encriptado.push(variable)}
  }

  HTML_mensaje.innerHTML=`<textarea id="textarea-2" readonly>${texto_encriptado.join("")}</textarea>`
})

HTML_botonDesencriptar.addEventListener("click", ()=>{
  if(evaluar_text()) return;
  const texto_desencriptado=[]
  const texto = HTML_textArea.value
  .replace(/enter/g, "1")
  .replace(/imes/g, "2")
  .replace(/ai/g, "3")
  .replace(/ober/g, "4")
  .replace(/ufat/g, "5")

  for(let variable of [...texto]){

    if(variable==="1")      texto_desencriptado.push("e")
    else if(variable==="2") texto_desencriptado.push("i")
    else if(variable==="3") texto_desencriptado.push("a")
    else if(variable==="4") texto_desencriptado.push("o")    
    else if(variable==="5") texto_desencriptado.push("u")
    else { texto_desencriptado.push(variable)}
  }

  HTML_mensaje.innerHTML=`<textarea id="textarea-2" readonly>${texto_desencriptado.join("")}</textarea>`


})



HTML_copiar.addEventListener("click", function(){
  console.log(`Texto que recien vamos a copiar ===`, HTML_mensaje.textContent);

  const elemento_oculto = document.createElement("textarea"); //"textarea" nos permite copiar con todo y salto de linea
  elemento_oculto.innerHTML=HTML_mensaje.textContent
  document.body.appendChild(elemento_oculto)
  elemento_oculto.select()
  document.execCommand("copy") //es normal que salga asi "--"
  document.body.removeChild(elemento_oculto)

})
