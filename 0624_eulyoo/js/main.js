$(document).ready(function(){
	const visual_swiper = new Swiper('.visual .swiper', { /* 팝업을 감싼는 요소의 class명 */

		effect: "fade", /* fade 효과 */

		autoplay: {  /* 팝업 자동 실행 */
			delay: 2500,
			disableOnInteraction: true,
		},
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
		navigation: {  /* 이전, 다음 버튼 */
			nextEl: '.visual .bnt_next',  /* 다음 버튼의 클래스명 */
			prevEl: '.visual .bnt_prev',  
		},

	}); //visual_swiper

	const book_swiper = new Swiper('.book .swiper', { /* 팝업을 감싼는 요소의 class명 */
		slidesPerView: "auto", /* li의 넓이 비율로 안함 - css에서 준 넓이대로 함 */
		spaceBetween: 16, /* li와 li사이 - 제일 작은 여백 */
		breakpoints: {
			640: {  /* 640px 이상이 되면 적용 */
				spaceBetween: 24, 
			},
		},
		loop: true,  /* 마지막 팝업에서 첫번째 팝업으로 자연스럽게 넘기기 */
	});

	$(".interview .list ul li").on("mouseenter", function(){
		$(this).addClass("on")
	})
	$(".interview .list ul li").on("mouseleave", function(){
		$(this).removeClass("on")
	})
})


