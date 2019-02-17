
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


  

//slide
    const left = document.querySelector("#left");
    const right = document.querySelector("#right");
    const items = document.querySelector("#items");
    const minRight = 0;
    const computed = getComputedStyle(items);
    let sliderWidth =  parseInt (computed.width);
    
   var sliderItemsCounter = items.children.length;
   
    right.addEventListener("click", function(e){
        e.preventDefault();

        let currentRight= parseInt(computed.right);
       // console.log(computed.right);
        if (currentRight < (sliderItemsCounter-1)*sliderWidth) {
          items.style.right = currentRight + sliderWidth + "px";
          }
         
        });
        
        left.addEventListener("click", function(e) {
          e.preventDefault();

        
          let currentRight = parseInt(computed.right);
        
          if (currentRight > 0 ) {
            items.style.right = currentRight - sliderWidth + "px";
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



//Form
let myForm = document.querySelector("#myForm");
const btn = document.querySelector("#form__btn");

btn.addEventListener("click", event => {
event.preventDefault();

if (validateForm(myForm)){
let formData = new FormData();
formData.append("name",myForm.elements.name.value);
formData.append("phone",myForm.elements.phone.value);
formData.append("comment",myForm.elements.comment.value);
formData.append("to","katy-konovalchu@yandex.ru") ; 

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
xhr.open("POST",'https://webdev-api.loftschool.com/sendmail');
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.send(formData);

return xhr;

}


var btnForm = function (e){
  e.preventDefault();
  var form = e.target;
  let request = myForm (form);

  request.addEventListener("load",() =>{
    if (request.status >= 400){
      let content =" ошибка содинения, попробуйте позже";
      overlay.open ("#form__btn", `${content}.ошибка ${reques.status}`)

    }
    else if(request.response.status){
      overlay.open("#form__btn",content);
    }

    else{
      let content = request.response.message;
      overlay.open("#form__btn",content);
    }
    
  });
  }
  btn.addEventListener('click',btnForm);

}
);

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