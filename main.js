
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

  $(document).ready(function () {
  let accord = $('.menu_accordeon-text__title');
  let active = "menu__accordeon-item_active";

  accord.click(function (event){
      event.preventDefault();
      let parent = $(this).parent();

      if (parent.hasClass(active)){
          parent.removeClass(active);
      } else {
          accord.parent().removeClass(active);
          parent.addClass(active);
      }

  });

});


$(document).ready(function () {
    let team = $('.accordeon__trigger');
    let trigger = "accordeon__item_is-active";
  
    team.click(function (event){
        event.preventDefault();
        let parent = $(this).parent();
  
        if (parent.hasClass(trigger)){
            parent.removeClass(trigger);
        } else {
            team.parent().removeClass(trigger);
            parent.addClass(trigger);
        }
  
    });
  
  });


  


    const left = document.querySelector("#left");
    const right = document.querySelector("#right");
    const items = document.querySelector("#items");
    const minRight = 0;
/*const maxRight = 600;
const step = 100;
let currentRight = 0;

items.style.right = currentRight;

right.addEventListener("click", function() {
  if (currentRight < maxRight) {
    currentRight += step;
    items.style.right = currentRight + "px";
  }
});

left.addEventListener("click", function() {
  if (currentRight > minRight) {
    currentRight -= step;
    items.style.right = currentRight + "px";
  }*/
    const computed = getComputedStyle(items);
    
  
    right.addEventListener("click", function(e){
        e.preventDefault();

        let currentRight= parseInt(computed.right);
        console.log(computed.right);
        if (!currentRight) {
            currentRight = 0;
          }
          if (currentRight < 1500) {
            items.style.right = currentRight + 100 + "px";
          }
        });
        
        left.addEventListener("click", function(e) {
          e.preventDefault();

        
          let currentRight = parseInt(computed.right);
        
          if (!currentRight) {
            currentRight = 0;
          }
        
          if (currentRight > 0) {
            items.style.right = currentRight - 100 + "px";
          }
    });



   
  
//modal
const button = document.querySelector("#reviews__modal");
const template = document.querySelector('#modal-template').innerHTML;
//const button = document.querySelector(".popup");
//const button = document.querySelector(".popup__close");
const modal = createModal();

button.addEventListener("click", e => {
  //modal.setContent("Hello WOrld");
  modal.open();

  
});


function createModal() {
  const container = document.createElement("div");
  container.className = "popup";
  container.innerHTML = template;

  const contentBlock = container.querySelector(".popup__content");

  const closeBtn = container.querySelector(".popup__close");
  closeBtn.addEventListener("click", e => {
    document.body.removeChild(container);
  });

  const overlay = container.querySelector(".overlay");

  overlay.addEventListener("click", e => {
    e.preventDefault();
    if (e.target === overlay) {
      closeBtn.click();
    }
  });

  return {
    open() {
      document.body.appendChild(container);
    },
    close() {
      closeBtn.click();
    },
    setContent(content) {
      contentBlock.innerHTML = content;
    }
  };
}


//checked
/*const no__call = document.querySelector("#no__call");
document.getElementById('no__call').onclick = function () {
      document.getElementById('no__call').checked = !0

                }*/

                





/*//modal

const overlay = (function(){
  let body = document.querySelector('body');
  let link = document.createElement('a');

  link.classList.add('modal__review-close');
  link.setAttribute('href','#');
 
  let openOverlay = function (modalId,content){
    let overlay = document.querySelector(modalId);
    let innerOverlay = overlay.querySelector('.modal__reviews-inner');

    link.addEventListener('click', (e)=>{
      e.preventDefault();
      closeOverlay(modalId);
    })

    overlay.addEventListener('click', (e)=>{
      e.preventDefault();
      if(e.target == overlay){
        closeOverlay(modalId);
      }
    })

    document.addEventListener("keydown", function(e){
      if (e.keyCode == 27) closeOverlay(modalId);
    });

    if(content){
      innerOverlay.innerHTML = content;
      innerOverlay.appendChild(link);
    }

    overlay.classList.add("is-active");
    body.classList.add('locked');
  }

  let closeOverlay = function (modalId){
    let overlay = document.querySelector(modalId);

    overlay.classList.remove('is-active');
    body.classList.remove('locked');
  }

  let setContent = function (modalId,content){
    let overlay = document.querySelector(modalId);
    let innerOverlay = overlay.querySelector('.modal__review-inner');

    if (content){
      innerOverlay.innerHTML = content;
      innerOverlay.appendChild(link);
    }
  }
  return{
    open: openOverlay,
    close: closeOverlay,
    setContent: setContent

  }
})*/










//Form
const myForm = document.querySelector("#myForm");
const btn = document.querySelector("#form__btn");

btn.addEventListener("click", event => {
event.preventDefault();

if (validateForm(myForm)){

  const data = {
    name: myForm.elements.name.value,
    phone:myForm.elements.phone.value,
    comment:myForm.elements.comment.value

}

  const xhr = new XMLHttpRequest();
xhr.open("POST",'https://webdev-api.loftschool.com/sendmail');
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.send(JSON.stringify(data));

}
});

function validateForm(form){
  let valid = true;

  if (!validateFiled(form.elements.name)){
    valid = false;
  }

  if (!validateFiled(form.elements.phone)){
    valid = false;
  }

  if (!validateFiled(form.elements.comment)){
    valid = false;
  }

  return valid;
}

function validateFiled(field){
    field.nextElementSibling.textContent = field.validationMessage;
    return field.checkValidity();
  }
  
  


/*const data = {
    name: myForm.elements.name.value,
    phone:myForm.elements.phone.value,
    comment:myForm.elements.comment.value

}*/

/*
const xhr = new XMLHttpRequest();
xhr.open("POST",'https://webdev-api.loftschool.com/sendmail');
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.send(JSON.stringify(data));

//console.log(myForm.elements.name.value);
//console.log(myForm.elements.callback.checked);
//*/