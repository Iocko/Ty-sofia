const menuBT = $('.menuicon');
const navMenu = $('.header-menu');

menuBT.click(function (e) { 
    navMenu.toggleClass('open');
    navMenu[0].style.transition ='width 0.4s ease-in-out'    
});