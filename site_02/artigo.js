class Artigo{
    CriarNovoArtigo(Titulo,Conteudo,IdAlvo,NumeroArtigo,imagem){
        document.getElementById(IdAlvo).innerHTML +="<div class='card' id='Artigo"+NumeroArtigo+"'></div>"
        document.getElementById("Artigo"+NumeroArtigo).innerHTML += Titulo+"<br/>"
        document.getElementById("Artigo"+NumeroArtigo).innerHTML += Conteudo+"<br/>"
        document.getElementById("Artigo"+NumeroArtigo).style.backgroundImage = "url('"+imagem+"')"
}
}
    export default Artigo

  
    