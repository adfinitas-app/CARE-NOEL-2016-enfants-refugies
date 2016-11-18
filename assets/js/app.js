$(window).resize( function() {
	console.log($(window).innerWidth());
});

$(document).ready( function() {
	$(function(){
		$("#slides").slidesjs({
			pagination: {
				active: false,
				effect: "slide"
			},
			width: 940,
			height: 528,
			navigation: {
				active: false,
				effect: "slide"
			}
		});
	});
});

$(".btn-temoignage").click(function () {
	var clas;
	var str1 = ".div-temoignage";

	if ($(this).hasClass('un'))
		clas='.un';
	else if ($(this).hasClass('deux'))
		clas='.deux';
	else if ($(this).hasClass('trois'))
		clas='.trois';
	clas = str1.concat(clas);
	$(clas).animate({
		width: "90%"
	}, {
		duration: 1000,
		specialEasing: {
			width: 'linear'
		}
	});
});