$(window).resize( function() {
	console.log($(window).innerWidth());
});

$(document).ready( function() {
	var slide = 0;

	$('.btn-prev').click( function() {
		slide = changeSlide(slide - 1);
	});
	$('.btn-suiv').click( function() {
		slide = changeSlide(slide + 1);
	});
});

var img_slide = ['https://s3.amazonaws.com/heroku-adfinitas-campaign/care-noel-2016/img-slide-1.jpg', 
'https://s3.amazonaws.com/heroku-adfinitas-campaign/care-noel-2016/img-slide-2.jpg',
'https://s3.amazonaws.com/heroku-adfinitas-campaign/care-noel-2016/img-slide-3.jpg'];
var text_slide = [];
var titre_slide = [];


function changeSlide(slide) {
	var i = 0;

	if (slide == -1)
		slide = 2;
	else if (slide == 3)
		slide = 0;

	$('.slide-show').each( function() {
		$(this).fadeOut(300);
		if (i == slide) {
			$(this).delay(300).fadeIn(300);
		}
		i++;
	});
	return slide;
}

function appearSlide(slide) {
	$('.slide-show').each( function() {


	});

}






