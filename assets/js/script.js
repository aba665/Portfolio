let title = document.getElementById("tituloportf")
let  about = document.getElementById("sobreportf")
let imagem = document.getElementById("imgportf")
let firstBarra = document.querySelector(".barFirst")
let secondBarra = document.querySelector(".barSecond")
let selecionadores = document.getElementsByClassName("selecionadores")
let indexPortfolio = 0;
let arr = []
var collectionPortfolio = [
    {titulo: "AnimeLogo", sobre: "Projeto da recriação de um site de animes com o uso de HTML, CSS, JAVASCRIPT e VANILLA.", src: "./assets/image/animelogophoto.png"},
    {titulo: "Space", sobre: "Foi um projeto criado com o intuito de adicionar mais interatividade na página através de Html, Css e Javascript.", src: "./assets/image/spacephoto.png"},
    {titulo: "Landing Page", sobre: "Essa página foi criada com o objetivo de fazer uma criação cutilizando Bootstrap.", src: "./assets/image/pojetobootstrap.png"}
]

loaderPagina(indexPortfolio)

function loaderPagina(index){
   
    title.textContent = collectionPortfolio[index].titulo
    about.textContent = collectionPortfolio[index].sobre
    imagem.src = collectionPortfolio[index].src

}

function firstProject(){
    
    indexPortfolio = 0
    loaderPagina(indexPortfolio)
        selecionadores[0].style.background = "white"
        
}

function secondProject(){
    indexPortfolio = 1
    loaderPagina(indexPortfolio)

    selecionadores[1].style.background = "white"
    firstBarra.style.background = "white"
   
}

function thirdProject(){

    indexPortfolio = 2
    loaderPagina(indexPortfolio)

    selecionadores[2].style.background = "white"
    secondBarra.style.background = "white"
        
    
}

