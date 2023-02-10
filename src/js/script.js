const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFechar =document.querySelector(".fechar-modal");
const video =document.getElementById("video")
const modal =document.querySelector(".modal");
const linkDoVideo = video.src;
console.log(linkDoVideo);

function alternarModal(){
    modal.classList.toggle("aberto");

}
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});



botaoFechar.addEventListener("click", () =>{
    alternarModal();
    video.setAttribute("src", "");
})


