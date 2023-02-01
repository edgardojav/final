
let video=document.querySelector(".videouno")
const iniciaPlay=()=>{
    document.querySelector(".duracion").innerText="Duracion video:"+" "+video.duration
    video.play()
}
const iniciaPause=()=>{
    video.pause()
}
//juguemos

let arreglo=["","",""];
//evita el enlace
function allowDrop(ev){
   ev.preventDefault();
};
//arrastre del elemento
function drag(ev){
   ev.dataTransfer.setData("text",ev.target.id);
}

function drop(ev){
    if(arreglo[parseInt(ev.target.id)] ==""){
        let data = ev.dataTransfer.getData("text");
        arreglo[parseInt(ev.target.id)]=data;
        ev.target.appendChild(document.getElementById(data))
    }
}
function recarga(){
    window.location.reload()
}
