const modal = document.getElementById('miModal')
const flex = document.getElementById('flex')
const abrir = document.getElementById('abrir')
const cerrar = document.getElementById('close')

abrir.addEventListener("click",function(){
    modal.style.display = 'block'
})
cerrar.addEventListener("click",function(){
    modal.style.display = 'none'
})

window.addEventListener("click",function(e){
    if(e.target == flex){
        modal.style.display = 'none'
    }
})