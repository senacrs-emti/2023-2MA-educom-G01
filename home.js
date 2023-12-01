var startBtnHome = document.querySelector("#startBtnHome")
var homeBody = document.querySelector("#homeBody")
var voltar = document.querySelector("#backHomeBtn")
var origemTerra = document.querySelector("#origemTerra")
var origemTerraInformations = document.querySelector("#origemTerraInformations")
var rangeInput = document.querySelector("#myRange")
var inicio = document.querySelector("#sliderTimeNavPage")
var fim = document.querySelector("#sliderTime2NavPage")
var origemTerraInformationsVoltar = document.querySelector("#origemTerraInformationsVoltar")
var sobreEra = document.querySelector("#sobreEra")
var sobreEraInformations = document.querySelector("#sobreEraInformations") 
var sobreEraInformationsVoltar = document.querySelector("#sobreEraInformationsVoltar")
var feedback = document.querySelector("#feedback")

function startView(){
    homeBody.style.display = "none"
    voltar.style.display = "block"
    origemTerra.style.display = "block"
    rangeInput.style.display = "block"
    inicio.style.display = "block"
    fim.style.display = "block"
    sobreEra.style.display = "block"
    feedback.style.display = "block"
}

function voltarHome(){
    homeBody.style.display = "flex"
    voltar.style.display = "none"
    rangeInput.style.display = "none"
    inicio.style.display = "none"
    fim.style.display = "none"
    origemTerra.style.display = "none"
    sobreEra.style.display = "none"
    feedback.style.display = "none"
    sobreEraInformations.style.display = "none"
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
sobreEraInformationsVoltar.addEventListener("click", sobreEraInformationsVoltarFunction)
///


var slider = document.getElementById("myRange");
var sobreEraInformations = document.querySelector("#sobreEraInformations");

var titulos = [];
var textos = []


slider.addEventListener("input", function() {
    sobreEraInformations.innerHTML = "";

    if (slider.value >= 1 && slider.value <= 10) {
        titulos = ["Hadeano(4,5 bilhões de anos atras)"];
        textos = [
            "Primeira fase da Terra, a superfície era extremamente quente e possuía intensa atividade vulcânica, além de sofrer com diversos impactos de meteorito."
        ];
    }
      if(slider.value >= 11 && slider.value <= 20){
        titulos = ["Arqueano(3,85 - 2,5 bilhões de anos atrás) "]
        textos = ["A Terra começou a resfriar e surgiram as primeiras formações rochosas. A atmosfera primitiva era rica em gases como metano e amônia, e a vida primitiva, principalmente na forma de microrganismos unicelulares, começou a se desenvolver. "]
      }
      if(slider.value >= 21 && slider.value <= 30){
        titulos = ["Proterozoico(2,5 - 1,0 bilhões de anos)"]
        textos = ["Nesse período houve o aumento de oxigênio produzido por organismos fotossintéticos. Esse aumento deu a vez do surgimento dos eucariontes. Além disso, esse período testemunhou a formação de continentes e o início da tectônica de placas, com a movimentação dos continentes e a formação de montanhas. Até o fim dessa era houve o desenvolvimento de formas de vida mais complexas, como algas, bem como o depósito de minerais metálicos, a exemplo do ferro. "]
      }
      if(slider.value >= 31 && slider.value <= 40){
        titulos = ["Terra Bola de Neve(790 - 635 milhões de anos atrás)"]
        textos = [`A hipótese da "Terra bola de neve" propõe que a Terra já passou por períodos de resfriamento extremo, cobrindo o planeta com gelo e neve, desencadeando uma era glacial generalizada. Isso ocorreu há centenas de milhões de anos, quando a maior parte do planeta estava coberta por uma camada de gelo, refletindo a luz solar de volta para o espaço, o que causou um resfriamento ainda maior. Esse estado congelado teria sido interrompido por eventos como erupções vulcânicas que liberavam gases de efeito estufa, aquecendo a Terra gradualmente e revertendo o ciclo, permitindo o degelo e o retorno a um clima mais quente. Esses eventos influenciaram significativamente a evolução da vida na Terra.
        tem menu de contexto`]
      }
      if(slider.value >= 41 && slider.value <= 50){
        titulos = ["Cambriano(570 - 500 Milhoes de anos)"]
        textos = ["O início do Paleozoico foi marcado pela Explosão Cambriana, um evento notável em que a diversificação da vida deu origem a muitos grupos de animais complexos, como trilobitas, moluscos e artrópodes. Essa diversificação foi crucial para a evolução da fauna marinha."]
      }
      if(slider.value >= 51 && slider.value <= 60){
        titulos = ["Jurássico (201 a 145 milhões de anos atrás)"]
        textos = ["O Jurássico é conhecido pelo domínio dos dinossauros. Grandes répteis como o Brachiossauro, Diplodoco, Stegosaurus e o terrível Tiranossauro rex viveram durante esse período. Os primeiros pássaros e mamíferos continuaram a evoluir, mas os dinossauros eram os governantes da terra. Os continentes continuaram a se separar e as formas de vida marinhas, como os icnofósseis de amonites, eram diversas. ", "Desenvolvimento da Humanidade"]
      }
      if(slider.value >= 61 && slider.value <= 70){
        titulos = ["Cenozoica(65,5 milhões de anos atrás)", "Extinção K-Pg", "Domínio dos Mamíferos", "Evolução das Aves", "Formação de Cordilheiras e Mudanças Climáticas", "Desenvolvimento das Plantas com Flores", "Mudanças Climáticas", ]
        textos = ["Era que perdura até hoje.",
        "A era começou com a Extinção Cretáceo-Paleogeno (K-Pg), que marcou o fim dos dinossauros não aviários e o início da diversificação dos mamíferos. A causa mais aceita para essa extinção é o impacto de um grande asteroide na Península de Yucatán, no México. ",
        " Com a extinção dos dinossauros, os mamíferos tiveram a oportunidade de preencher nichos ecológicos anteriormente ocupados pelos répteis. Isso levou a uma explosão de diversidade de mamíferos, que começaram a se adaptar a diversas condições ambientais ecológicas. ",
        "As aves, que são descendentes dos dinossauros, também experimentaram uma diversificação significativa durante a Era Cenozoica. Hoje, as aves são um grupo extremamente diverso de vertebrados. ",
        "Durante o Cenozoico, ocorreram importantes eventos geológicos, como a formação dos Alpes, dos Andes e do Himalaia, devido à atividade tectônica. Essas cadeias de montanhas tiveram um impacto significativo nas correntes de ar e no clima global. ",
        "Durante o Paleogeno e o Neogeno, as plantas com flores (angiospermas) se tornaram a forma dominante de vegetação em todo o mundo, o que teve um impacto significativo na evolução e diversificação de insetos e outros grupos de organismos. ",
        "A Era Cenozoica também viu flutuações significativas nas temperaturas globais, incluindo períodos de resfriamento (como as glaciações) e aquecimento. Isso afetou os ambientes terrestres e marinhos, bem como a distribuição de vida. ",
        "Os primeiros hominídeos, nossos ancestrais, surgiram durante o final do Neogeno e evoluíram ao longo dos milhões de anos seguintes para se tornarem os seres humanos modernos. A Era Cenozoica é fundamental para a história da humanidade. "
      ]
      }
      if(slider.value >= 71 && slider.value <= 80){
        titulos = ["Atual"]
        textos = ["A terra ainda está na era cenozoica, mas as massas de terras constantemente se mechem, nesse modelo vemos a formação continental atual."]
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
    backButton.id = "origemTerraInformationsVoltar";
    backButton.appendChild(document.createTextNode("Voltar"));
    backButton.addEventListener("click", sobreEraInformationsVoltarFunction);

    sobreEraInformations.appendChild(backButton);
})



