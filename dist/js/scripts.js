const menuIcon=document.getElementById('icon-hamburger');
const menu=document.getElementById('menu');

menuIcon.addEventListener('click',(event)=>{
    if(event.target.dataset.icon === 'hamburger'){
        event.target.src='assets/images/icon-close.svg';
        event.target.dataset.icon='close';
    }
 else{
    event.target.src='assets/images/icon-hamburger.svg';
    event.target.dataset.icon='hamburger';
 }

 menu.classList.toggle('menu--show');
})

window.addEventListener('resize', () => {
    if (menu.classList.contains('menu--show') && window.matchMedia("(min-width:768px)").matches) {
        menu.classList.remove('menu--show')
    }
})


