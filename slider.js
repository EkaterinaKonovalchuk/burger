$(function(){

    $('.burger__button-next').on('click',function(e){
        e.preventDefault();
        var $this = $(this),
        container = $this.closest(".slider");
     
        items = container.find(".slider__item"),

        activeSlide = items.filter('.active'),
        
        reqItem = activeSlide.next(),
        reqIndex = reqItem.index(),
        list = container.find("slider__list"),
        duration = 500;

        if (reqItem.length){
            list.animate({

                'left': -reqIndex * 100 + '%'
            },duration, function (){
                activeSlide.removeClass('active');
                reqItem.addClass('active');
            })
        }
        
       

        });

        
let OnePageScroll = function(){
    const sections = $(".section");
    const visible = $('#maincontent');
  
    let inscroll = false;
  
    let performTransition = function (sectionEq){
      let position = sectionEq*-100 + '%';
      console.log(123);
      visible.css({
        transform: `translateY(${position})`,
        "-webkit-transform":`translateY(${position})`
      });
    }
  
    document.querySelector(".arrow-scroll").addEventListener('click',function(e){
     e.preventDefault();
      performTransition(1);
    })
  }
    })

 
        


