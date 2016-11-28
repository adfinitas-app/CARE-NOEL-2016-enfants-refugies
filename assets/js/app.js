$(window).resize( function() {
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

function getClass(item, str1, str2) {
	var classe;

	if (item.hasClass('un'))
		classe = ".un";
	else if (item.hasClass('deux'))
		classe = ".deux";
	else if (item.hasClass('trois'))
		classe = ".trois";
	if ($(window).width() < 640) {
		classe = str2.concat(classe);
		scrollTo($(classe));
		return false;
	}
	classe = str1.concat(classe);
	return classe;
}

$('.btn-return').click( function() {
	var classe;

	if ((classe = getClass($(this), ".dessus", ".container-down-small")) == false)
		return false;
	$(classe).css({"display":"block"});

	$(classe).animate({
		width: "100%"
	}, {
		duration: 800,
		specialEasing: {
			width: "linear",
		},
		complete: function() {
		}
	});
});

$('.btn-temoignage').click( function() {
	var classe;

	if ((classe = getClass($(this), ".dessus", ".container-down-small")) == false)
		return false;


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

$('.link-1-header').click( function() {
	$('#slide-show').css({"margin-top":"120px"});
	$("#dropdown-menu").hide();
	scrollTo($('#slide-show'));
});
$('.link-2-header').click( function() {
	$('#slide-show').css({"margin-top":"120px"});
	$("#dropdown-menu").hide();
	scrollTo($('#slide-bg-white'));
});

$('#burger').click( function() {
	if ($("#dropdown-menu").css('display') == 'none') {
		$('#slide-show').css({"margin-top":"200px"});
		$("#dropdown-menu").show();
	}
	else {
		$('#slide-show').css({"margin-top":"120px"});
		$("#dropdown-menu").hide();
	}
});

function 	scrollTo(next){
	if ($(next).length != 0)
	{
		$('html, body').stop().animate({
			scrollTop: $(next).offset().top - 95
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

