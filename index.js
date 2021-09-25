const buttons = document.querySelectorAll('button')

function hiddenDiv(e){
    const  info = e.target.nextElementSibling
    info.classList.toggle('hidden')
}


buttons.forEach(btn=>{
   btn.onclick = hiddenDiv
})

