
   //window.oneload= function(){ 
    
    //humburger
   let humburger = (function (options){
       let button = document.querySelector(options.button);
       let menu = document.querySelector(options.menu);
       let body = document.querySelector("body");

       let itemsList = document.getElementById("menu__list_hamburger").chuldren;


       let _toggleMenu = function (e){
           button.classList.toggle("is-active");
           menu.classList.toggle("is-active");
           body.classList.toggle("body-active-menu");
       };




       let addListeners = function(){
           button.addEventListener("click", _toggleMenu);
       }

       return {
           init:addListeners};
   })
 ({
     button:"#hamburger-menu-link",
     menu:"#hamburger-menu"
 });

/* button=1;
 console.log(button);
 console.log(menu);
   menu.openMenu();*/
   humburger.init();

   
  // }