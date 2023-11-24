var startBtnHome = document.querySelector("#startBtnHome")
var homeBody = document.querySelector("#homeBody")
var voltar = document.querySelector("#backHomeBtn")
var origemTerra = document.querySelector("#origemTerra")
var information = document.querySelector("#informations")
var rangeInput = document.querySelector("#myRange")
var inicio = document.querySelector("#h1")
var fim = document.querySelector("#h2")

function startView(){
    homeBody.style.display = "none"
    voltar.style.display = "block"
    origemTerra.style.display = "block"
    rangeInput.style.display = "block"
    inicio.style.display = "block"
    fim.style.display = "block"
    console.log(rangeInput.style.display);
}

function voltarHome(){
    homeBody.style.display = "block"
    voltar.style.display = "none"
    rangeInput.style.display = "none"
    inicio.style.display = "none"
    fim.style.display = "none"
    origemTerra.style.display = "none"
}

function information(){
    information.style.display = "block"
}

startBtnHome.addEventListener("click", startView)
voltar.addEventListener("click", voltarHome)
origemTerra.addEventListener("click", information)