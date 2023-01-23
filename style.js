let video=document.querySelector(".videouno")
const iniciaPlay=()=>{
    document.querySelector(".duracion").innerText="Duracion video:"+" "+video.duration
    video.play()
}
const iniciaPause=()=>{
    video.pause()
}