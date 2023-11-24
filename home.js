var startBtnHome = document.querySelector("#startBtnHome")
var homeBody = document.querySelector("#homeBody")
var voltar = document.querySelector("#backHomeBtn")
var origemTerra = document.querySelector("#origemTerra")
var origemTerraInformations = document.querySelector("#origemTerraInformations")
var rangeInput = document.querySelector("#myRange")
var inicio = document.querySelector("#h1")
var fim = document.querySelector("#h2")
var origemTerraInformationsVoltar = document.querySelector("#origemTerraInformationsVoltar")
var sobreEra = document.querySelector("#sobreEra")
var sobreEraInformations = document.querySelector("#sobreEraInformations") 
var sobreEraInformationsVoltar = document.querySelector("#sobreEraInformationsVoltar")

function startView(){
    homeBody.style.display = "none"
    voltar.style.display = "block"
    origemTerra.style.display = "block"
    rangeInput.style.display = "block"
    inicio.style.display = "block"
    fim.style.display = "block"
    sobreEra.style.display = "block"
}

function voltarHome(){
    homeBody.style.display = "block"
    voltar.style.display = "none"
    rangeInput.style.display = "none"
    inicio.style.display = "none"
    fim.style.display = "none"
    origemTerra.style.display = "none"
    sobreEra.style.display = "none"
}

function origemTerraInformationsFunction(){
    origemTerraInformations.style.display = "block"
}

function origemTerraInformationsVoltarFunction(){
    origemTerraInformations.style.display = "none"
}

function sobreEraFunction(){
    sobreEraInformations.style.display = "block"
}

function sobreEraInformationsVoltarFunction(){
    sobreEraInformations.style.display = "none"
}

startBtnHome.addEventListener("click", startView)
voltar.addEventListener("click", voltarHome)
origemTerra.addEventListener("click", origemTerraInformationsFunction)
origemTerraInformationsVoltar.addEventListener("click", origemTerraInformationsVoltarFunction)
sobreEra.addEventListener("click", sobreEraFunction)
sobreEraInformations.addEventListener("click", sobreEraInformationsVoltarFunction)
///


var slider = document.getElementById("myRange");
var sobreEraInformations = document.querySelector("#sobreEraInformations");

var titulos = [];
var textos = [];

slider.addEventListener("input", function() {
    sobreEraInformations.innerHTML = "";

    if (slider.value >= 1 && slider.value <= 10) {
        titulos = ["Hadeano", "Arqueano", "Proterozoico"];
        textos = [
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        ];
    }
      if(slider.value >= 11 && slider.value <= 20){
        titulos = ["11", "20"]
        textos = ["caralho", "pica"]
      }
      if(slider.value >= 21 && slider.value <= 30){
        titulos = ["3", "3"]
        textos = ["caralho", "pica"]
      }
      if(slider.value >= 31 && slider.value <= 40){
        titulos = ["4", "4"]
        textos = ["caralho", "pica"]
      }
      if(slider.value >= 41 && slider.value <= 50){
        titulos = ["5", "5"]
        textos = ["caralho", "pica"]
      }
      if(slider.value >= 51 && slider.value <= 60){
        titulos = ["6", "6"]
        textos = ["caralho", "pica"]
      }
      if(slider.value >= 61 && slider.value <= 70){
        titulos = ["7", "7"]
        textos = ["caralho", "pica"]
      }
      if(slider.value >= 71 && slider.value <= 80){
        titulos = ["8", "8"]
        textos = ["caralho", "pica"]
      }

      for (let i = 0; i < titulos.length; i++) {
        let container = document.createElement("div");

        let titleHtml = document.createElement("h1");
        titleHtml.appendChild(document.createTextNode(`${titulos[i]}`));
        container.appendChild(titleHtml);

        let textHtml = document.createElement("p");
        textHtml.appendChild(document.createTextNode(`${textos[i]}`));
        container.appendChild(textHtml);

        sobreEraInformations.appendChild(container);
    }

    let backButton = document.createElement("button");
    backButton.className = "hover";
    backButton.id = "sobreEraInformationsVoltar";
    backButton.appendChild(document.createTextNode("Voltar"));
    backButton.addEventListener("click", function() {
        sobreEraInformations.innerHTML = "";
    });

    sobreEraInformations.appendChild(backButton);
})



