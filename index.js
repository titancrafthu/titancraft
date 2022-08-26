let home = document.querySelector('.home');
let tgf = document.querySelector('.tgf');
let main = document.querySelector('.main');
let tgfr = document.querySelector('.tgfr');
let copy = document.querySelector('.copy');
let shop = document.querySelector('.shop');

home.addEventListener('click',()=>{tgfr.style.display='none';main.style.display='block'});
tgf.addEventListener('click',()=>{main.style.display='none';tgfr.style.display='block'});

copy.addEventListener('click',()=>{
    navigator.clipboard.writeText('titancraft.hu');
    copy.textContent = 'Másolva'
})