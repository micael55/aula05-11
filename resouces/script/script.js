// // evento change
// opcoes.addEventListener("change",()=>{
//     console.log(opcoes.value)
// })

// // Evento focus
// input.addEventListener("focus",
// elementoFocado)

// input.addEventListener("focusout",
// elementoFocado)

// function elementoFocado(){
//     console.log("teste")
// }

// // classes via dom

// let boy =document.querySelector
// ("button");
// let body = document.querySelector("body");

// darkButton.addEventListener("click",()=>{
//     body.classList.add("dark");
// })



function mostrarAlerta() {
    alert("Você clicou no botão!");
}

document.getElementById("meuBotao").addEventListener("click", mostrarAlerta);

