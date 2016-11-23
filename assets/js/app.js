$(window).resize( function() {
	console.log($(window).innerWidth());
	adjust_don_box();
});

$(document).ready( function() {
	adjust_don_box();

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
/*
$(".btn-temoignage").click(function () {
	console.log('Hello');
	var clas;
	var str1 = ".row-infos";

	if ($(this).hasClass('un'))
		clas='.un';
	else if ($(this).hasClass('deux'))
		clas='.deux';
	else if ($(this).hasClass('trois'))
		clas='.trois';
	clas = str1.concat(clas);
	$('.div-temoignage').css({'width'}:'0%');
	/*$(".div-temoignage").animate({ width: "100%" }, 
	{
		duration: 1000,
		specialEasing: {
			width: 'linear'
		}
	});
});*/

$('.btn-temoignage').click( function() {
	var classe;
	var str1 = ".dessus";
	var str2 = ".container-down-small"

	if ($(this).hasClass('un'))
		classe = ".un";
	else if ($(this).hasClass('deux'))
		classe = ".deux";
	else if ($(this).hasClass('trois'))
		classe = ".trois";
	if ($(window).width() < 640) {
		classe = str2.concat(classe);
		console.log(classe);
		scrollTo($(classe));
		return false;
	}
	classe = str1.concat(classe);
	$(classe).animate({
		width: "0%"
	}, {
		duration: 800,
		specialEasing: {
			width: "linear",
		},
		complete: function() {
			$(classe).css({"display":"none"});
		}
	});
});

$('#link-1-header').click( function() {
	scrollTo($('#slide-show'));
});
$('#link-2-header').click( function() {
	scrollTo($('#slide-bg-white'));
});
function 	scrollTo(next){
	if ($(next).length != 0)
	{
		$('html, body').stop().animate({
			scrollTop: $(next).offset().top + 1
		}, 700, 'swing');
		return false;
	}
};

function 	adjust_don_box() {
	var		max;

	$(".box-description").css({"height" : "auto"})
	max = $(".box-description").first().height();
	$(".box-description").each(function(){
		if ($(this).height() > max)
			max = $(this).height();
	});
	$(".box-description").css({"height" : max});
}

