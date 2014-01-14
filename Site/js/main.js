$(document).ready(function(){

  $('.bxslider').bxSlider({
	controls: false,
	preloadImages: 'visible',
	touchEnabled: true,
	oneToOneTouch: true,
	auto: true
  });

});

var loginNav = $('.nav');
loginNav.hide();

$('.login').on('mouseenter', function(e){
	e.preventDefault();
	loginNav.show();
});

loginNav.on('mouseleave', function(e){
	e.preventDefault();
	loginNav.hide();
});

var volumeBG = $('.vcBG');
volumeBG.hide();

$('.volume').on('mouseenter', function(e){
	e.preventDefault();
	volumeBG.show();
});

volumeBG.on('mouseleave', function(e){
	e.preventDefault();
	volumeBG.hide();
});

var play = true;
$('.play').on('click', function(e){
	e.preventDefault();

	if(play){
		$('.play').attr('src', 'img/pause.png');
		play = false;
	}else {
		$('.play').attr('src', 'img/play.png');
		play = true;
	}
});

var micBG = $('.micBG');
micBG.hide();

$('.microphone').on('mouseenter', function(e){
	e.preventDefault();
	micBG.show();
});

micBG.on('mouseleave', function(e){
	e.preventDefault();
	micBG.hide();
});

var camBG = $('.camBG');
camBG.hide();

$('.camera').on('mouseenter', function(e){
	e.preventDefault();
	camBG.show();
});

camBG.on('mouseleave', function(e){
	e.preventDefault();
	camBG.hide();
});