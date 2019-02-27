//window.oneload= function(){

//humburger
let humburger = (function(options) {
  let button = document.querySelector(options.button);
  let menu = document.querySelector(options.menu);
  let body = document.querySelector("body");

  flag = false;
  let _toggleMenu = function(e) {
    button.classList.toggle("is-active");
    menu.classList.toggle("is-active");
    body.classList.toggle("body-active-menu");

    flag ? (flag = false) : (flag = true);
  };

  let addListeners = function() {
    button.addEventListener("click", _toggleMenu);
  };

  menu.addEventListener("click", function(e) {
    target = e.target;
    if (target.className == "menu__item-link") {
      _toggleMenu();
    }
  });

  document.addEventListener("keydown", function(e) {
    if (e.keyCode == 27 && flag) {
      _toggleMenu();
    }
  });

  return {
    init: addListeners
  };
})({
  button: "#hamburger-menu-link",
  menu: "#hamburger-menu"
});

/* button=1;
 console.log(button);
 console.log(menu);
   menu.openMenu();*/
humburger.init();

// }

$(document).ready(function() {
  let accord = $(".menu_accordeon-text__title");
  let active = "menu__accordeon-item_active";

  accord.click(function(event) {
    event.preventDefault();
    let parent = $(this).parent();

    if (parent.hasClass(active)) {
      parent.removeClass(active);
    } else {
      accord.parent().removeClass(active);
      parent.addClass(active);
    }
  });
});

$(document).ready(function() {
  let team = $(".accordeon__trigger");
  let trigger = "accordeon__item_is-active";

  team.click(function(event) {
    event.preventDefault();
    let parent = $(this).parent();

    if (parent.hasClass(trigger)) {
      parent.removeClass(trigger);
    } else {
      team.parent().removeClass(trigger);
      parent.addClass(trigger);
    }
  });
});

//slide
/*const left = document.querySelector("#left");
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



   
  */
//modal

let modalPopup = function(){
    const button = document.querySelectorAll("#reviews__modal");
    const templateModal = document.querySelector("#modal-template").innerHTML;
    const templateForm = document.querySelector("#form-template").innerHTML;
    const modal = createModal(templateModal);
    const formModal = createModal(templateForm);

    for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", e => {
        event.preventDefault();

        let paragraph = e.currentTarget.closest(".reviews__item-hover").querySelector(".reviews__text").innerHTML;
        let headline = e.currentTarget.closest(".reviews__item-hover").querySelector(".reviews__title").innerHTML;

        modal.setContent(paragraph, headline);
        modal.open();
    });
    }

function createModal(template) {
  const container = document.createElement("div");
  container.className = "popup";
  container.innerHTML = template;

  const contentBlock = container.querySelector(".popup__content-text");
  const headlineBlock = container.querySelector(".popup__content-title");
  let closeBtn;

  if (container.querySelector(".popup__close")) {
    closeBtn = container.querySelector(".popup__close");
  } else {
    closeBtn = container.querySelector(".popup__button");
  }
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
    setContent(content, name) {
      contentBlock.innerHTML = content;
      if (headlineBlock) {
        headlineBlock.innerHTML = name;
      }
    }
  };
}

//Form
let myForm = document.querySelector("#myForm");
const btn = document.querySelector("#form__btn");

function ajaxForm (form) {
  let formData = new FormData();
  formData.append("name", form.elements.name.value);
  formData.append("phone", form.elements.phone.value);
  formData.append("comment", form.elements.comment.value);
  formData.append("to", "katy-konovalchu@yandex.ru");

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send(formData);

  return xhr;
};

function submitForm (e) {
  e.preventDefault();

if (validateForm(myForm)) {
  var request = ajaxForm(myForm);
  
  request.addEventListener("load", () => {
    if (request.status >= 400) {
      let content = `Ошибка ${request.status}. Обратитесь к администратору сервера`;
      formModal.setContent(content);
      formModal.open();
    } else if (request.response.status) {
      let content = request.response.message;
      formModal.setContent(content);
      formModal.open();
    } else {
      let content = request.response.message;
      formModal.setContent(content);
      formModal.open();
    }
  });
}
 
};

btn.addEventListener("click", submitForm);
}

function validateForm(form) {
  let valid = true;

  if (!validateFiled(form.elements.name)) {
    valid = false;
  }

  if (!validateFiled(form.elements.phone)) {
    valid = false;
  }

  if (!validateFiled(form.elements.comment)) {
    valid = false;
  }

  return valid;
}

function validateFiled(field) {
  if (!field.checkValidity()) {
    field.nextElementSibling.textContent = field.validationMessage;
    return false;
  } else {
    field.nextElementSibling.textContent = "";
    return true;
  }
}


modalPopup();

//map

ymaps.ready(init);

var placemarks = [
  {
    latitude: 59.97,
    longitude: 30.31,
    hintContent: "ул.Литераторов, д. 10",
    balloonContent: "ул.Литераторов, д. 10"
  },

  {
    latitude: 59.94,
    longitude: 30.25,
    hintContent: "Малый проспект В О, д. 64",
    balloonContent: "Малый проспект В О, д. 64"
  },

  {
    latitude: 59.93,
    longitude: 30.34,
    hintContent: "наб. реки Фонтанки, д. 56",
    balloonContent: "наб. реки Фонтанки, д. 56"
  }
];
function init() {
  var myMap = new ymaps.Map("map", {
    center: [59.94, 30.32],
    zoom: 12,
    controls: ["zoomControl"],
    behaviors: ["drag"]
  });

  placemarks.forEach(function(obj) {
    var placemark = new ymaps.Placemark(
      [obj.latitude, obj.longitude],
      {
        hintContent: obj.hintContent,
        balloonContent: obj.balloonContent
      },

      {
        iconLayout: "default#image",
        iconImageHref: "./img/svg/map-marker.svg",
        iconImage: [40, 57],
        iconImageOffset: [-23, -57]
      }
    );
    myMap.geoObjects.add(placemark);
  });
}

//player

let video;
let durationControl;
let soundControl;
let intervalId;

$().ready(function() {
  video = document.getElementById("player");
  video.addEventListener("click", playStop);

  let playButtons = document.querySelectorAll(".play");
  for (let i = 0; i < playButtons.length; i++) {
    playButtons[i].addEventListener("click", playStop);
  }

  let micControl = document.getElementById("mic");
  micControl.addEventListener("click", soundOf);

  durationControl = document.getElementById("durationLevel");
  durationControl.addEventListener("mousedown", stopInterval);
  durationControl.addEventListener("mouseup", setVideoDuration);

  durationControl.min = 0;
  durationControl.value = 0;

  soundControl = document.getElementById("micLevel");
  soundControl.addEventListener("mouseup", changeSoundVolume);

  soundControl.min = 0;
  soundControl.max = 10;

  soundControl.value = soundControl.max;

  video.addEventListener(
    "ended",
    function() {
      $(".video__player-img").toggleClass("video__player-img--active");
      video.currentTime = 0;
    },
    false
  );
});

function playStop() {
  $(".video__player-img").toggleClass("video__player-img--active");
  durationControl.max = video.duration;

  if (video.paused) {
    video.play();
    intervalId = setInterval(updateDuration, 1000 / 66);
  } else {
    video.pause();
    clearInterval(intervalId);
  }
}

function stopInterval() {
  video.pause();
  clearInterval(intervalId);
}

function setVideoDuration() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
  video.currentTime = durationControl.value;
  intervalId = setInterval(updateDuration, 1000 / 66);
}

function updateDuration() {
  durationControl.value = video.currentTime;
}

function soundOf() {
  if (video.volume === 0) {
    video.volume = soundLevel;
    soundControl.value = soundLevel * 10;
  } else {
    soundLevel = video.volume;
    video.volume = 0;
    soundControl.value = 0;
  }
}

function changeSoundVolume() {
  /*
        Св-во volume может принимать значения от 0 до 1
        Делим на 10 для того что бы, была возможность более точной регулировки видео. 
         video.volume 0 0.1 0.2 0.3 0.4 0.5 0.6 0.7 0.8 0.9  1 
   soundControl.value 0   1   2   3   4   5   6   7   8   9  10
        */

  video.volume = soundControl.value / 10;
  console.log(video.volume);
}
