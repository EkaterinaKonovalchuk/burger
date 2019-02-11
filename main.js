
   //window.oneload= function(){ 
    
    //humburger
   let humburger = (function (options){
       let button = document.querySelector(options.button);
       let menu = document.querySelector(options.menu);
       let body = document.querySelector("body");

       
       flag = false;
       let _toggleMenu = function (e){
           button.classList.toggle("is-active");
           menu.classList.toggle("is-active");
           body.classList.toggle("body-active-menu");

           flag ? flag = false:flag = true;
       };




       let addListeners = function(){
           button.addEventListener("click", _toggleMenu);
       };

       menu.addEventListener("click",function(e){
           target = e.target;
           if (target.className == 'menu__item-link'){
               _toggleMenu();
           }
       })

       

       document.addEventListener("keydown",function(e){
           if((e.keyCode == 27) && (flag)){
               _toggleMenu();
           }
       });

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