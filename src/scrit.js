const navbtn=document.querySelector('#navbtn')
const navdiv=document.querySelector('#navdiv')


navbtn.addEventListener('click', function(){
    navdiv.classList.toggle('hidden')
})