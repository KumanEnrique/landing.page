const btn = document.querySelector(".btn")

const enlaces = document.querySelectorAll('a')

enlaces.forEach(enlace =>{
    enlace.target="_blank"
})

btn.addEventListener("click",()=>{
    enlaces.forEach(enlace =>{
    enlace.click()
})
})