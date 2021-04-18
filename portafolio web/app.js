const grid = new Muuri('.grid',{
    layout:{
        rouding:false
    }
})
window.addEventListener("load",()=>{
    grid.refreshItems().layout()
    document.getElementById('grid').classList.add('imagenes-cargadas')

    const enlaces = document.querySelectorAll('#categorias a')
    enlaces.forEach(elemento =>{
        elemento.addEventListener("click",e =>{
            e.preventDefault()
            enlaces.forEach(enlace => enlace.classList.remove('activo'))
            e.target.classList.add('activo')

            const categoria = e.target.innerHTML.toLowerCase()
            console.log(categoria)
            categoria === "todos" ? grid.filter('[data-categoria]'):grid.filter(`[data-categoria="${categoria}"]`)
        })
    })

    document.querySelector('#barra-busqueda').addEventListener("input",(e)=>{
        const busqueda = e.target.value
        grid.filter(item => item.getElement().dataset.etiquetas.includes(busqueda))
    })

    const overlay = document.getElementById("overlay")
    document.querySelectorAll(".grid .item img").forEach(elemento =>{
        
        elemento.addEventListener('click',()=>{
            const ruta = elemento.getAttribute('src')
            const descripcion = elemento.parentNode.parentNode.dataset.descripcion;
            overlay.classList.add("activo")
            document.querySelector('#overlay img').src = ruta
            document.querySelector('#overlay .descripcion').innerHTML = descripcion

        })
    })

    document.querySelector('#btn-cerrar-popup').addEventListener("click",()=>{
        overlay.classList.remove("activo")
    })
    overlay.addEventListener("click",(e)=>{
        overlay.classList.remove("activo")
        e.target.id === "overlay" ? overlay.classList.remove("activo") : ""
    })

})// tiempo 1:01:46