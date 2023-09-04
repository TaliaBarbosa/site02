class banner{
    bannerGrande(Titulo,imagem,Texto,Idlocal){
        document.getElementById(Idlocal).innerHTML += "<h1 style='background-color:gray;color:black;margin-top:20vh;position:absolute'>"+ Titulo + "</h1>"
        document.getElementById(Idlocal).innerHTML += "<h3  style='background-color:gray;color:black;margin-top:30vh;position:absolute;padding:5vh;width:94%'>"+Texto+"</h3>"
        document.getElementById(Idlocal).style.backgroundImage = imagem
       

    }
}
export default banner