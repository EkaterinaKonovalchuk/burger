$(function () {

	$('.burger__button-next').on('click', function (e) {
		e.preventDefault();
			container = $(".slider");

		items = container.find(".slider__item"),

			activeSlide = $('.slider__item.active'),

			reqItem = activeSlide.next(),
			reqIndex = reqItem.index(),
			list = container.find(".slider__list"),
			duration = 500;

		if (reqItem.length) {
			list.animate({
				'left': -reqIndex * 100 + '%'
			}, duration, function () {
				activeSlide.removeClass('active');
				reqItem.addClass('active');
			})
		}



	});


	
	$('.burger__button-prev').on('click', function (e) {
		e.preventDefault();
			container = $(".slider");

		items = container.find(".slider__item"),

			activeSlide = $('.slider__item.active'),

			reqItem = activeSlide.prev(),
			reqIndex = reqItem.index(),
			list = container.find(".slider__list"),
			duration = 500;

		if (reqItem.length) {
			list.animate({
				'left': -reqIndex * 100 + '%'
			}, duration, function () {
				activeSlide.removeClass('active');
				reqItem.addClass('active');
			})
		}



	});


	
var md = new MobileDetect(window.navigator.userAgent),
	isMobile = md.mobile();
	let OnePageScroll = function () {

		
		const sections = $(".section");
		const visible = $('#maincontent');

		let inscroll = false;

		let performTransition = function (sectionEq) {
         if (!inscroll){
			 inscroll = true;
		 
console.log(sectionEq);

			let position = sectionEq * -100 + '%';
			console.log(position);
			sections
			.eq(sectionEq)
			.addClass("is-active")
			.siblings()
			.removeClass("is-active")



			visible.css({
				transform: `translateY(${position})`,
				"-webkit-transform": `translateY(${position})`
			});

			setTimeout (function(){
				inscroll = false;

				$(".fixed__menu-item")
				.eq(sectionEq)
				.addClass(".active")
				.siblings()
				.removeClass("active");
			},1000);

		}
	}
		

		let defineSections = function(sectionsList){

			let activeSection = sectionsList.filter(".is-active");
			return{
				activeSection: activeSection,
				nextSection: activeSection.next(),
				prevSection: activeSection.prev()

			};
		};

		let scrollToSection = function(direction){
			let section = defineSections(sections);
			if (direction == "up" && section.nextSection.length){
				performTransition(section.nextSection.index());
			}

			if (direction == "down" && section.prevSection.length){
				performTransition(section.prevSection.index());
			}

		};

		$(".wrapper").on({
			wheel: function(e) {
				const deltaY = e.originalEvent.deltaY;
				const direction = deltaY > 0 ? "up" : "down";

				scrollToSection(direction);
			},
			touchmove: e => e.preventDefault()
		});
		if (isMobile){
			$(window).swipe({
				swipe: (event,direction) =>{
					scrollToSection(direction);
				}
			})
		}

        


	//	document.querySelector(".arrow-scroll").addEventListener('click', function (e) {
	//		e.preventDefault();
	//		performTransition(1);
	//	})
   $("[data-scroll-to]").on("click", e => {
	   e.preventDefault();
	   performTransition(parseInt($(e.target).data("scroll-to")));
   })


	}
	OnePageScroll();
})();





