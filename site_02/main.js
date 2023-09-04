import banner from "./banner.js"
import artigo from "./artigo.js"
let a= new artigo()
a.CriarNovoArtigo("Calça jogger","A calça jogger tem tendência a ficar mais “folgadinha” no corpo e "+
"tem a barra ajustada. Modelagem normal, recomendamos pegar seu tamanho de costume.","artigo_01",1,"../img/calça.jpg")
a.CriarNovoArtigo("Calça flare","Conteudo0k,","artigo_01",2,"../img/calça2.webp")
a.CriarNovoArtigo("Calça Pantalona","Conteudo0k,","artigo_01",3,"../img/calça3.jpeg")
a.CriarNovoArtigo("Calça legging","Conteudo0k,","artigo_01",4,"../img/calça3.jpg")
let b= new banner()


b.bannerGrande("Moda","url(../img/download.jfif)","<article>Loja</article>","banner_01") 