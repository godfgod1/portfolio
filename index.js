const buttons = document.querySelectorAll('button')

function hiddenDiv(e){
    const  info = e.target.nextElementSibling
    const  btn = e.target
    info.classList.toggle('hidden')
    btn.classList.toggle('color')
}


buttons.forEach(btn=>{
   btn.onclick = hiddenDiv
})

