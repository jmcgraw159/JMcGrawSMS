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

var connected = function(success, error){

	if(success){
		console.log('Success');
		flash.startPlaying('hobbit_vp6.flv');
	}else {
		console.log(error)
	}
}

var flashReady = function(){

	console.log('Flash Ready');

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

	var play_toggle = true;
	var play = false;
	$('.play').on('click', function(e){
		e.preventDefault();

		if(!play){
			flash.connect('rtmpt://localhost:5080/SMServer/');
			play = true;
		}else {
			flash.playPause();
		}

		if(play_toggle){
			$('.play').attr('src', 'img/pause.png');
			play_toggle = false;
		}else {
			$('.play').attr('src', 'img/play.png');
			play_toggle = true;
		}
	});

	var micBG = $('.micBG');
	micBG.hide();

	var microphones = flash.getMicrophones();
	microphoneIndex = 0;
	for(var i = 0; i < microphones.length; i++){
		$('.micBG').append('<a href="#" class="mic">' + microphones[i] + '</a>');
	}

	$('.microphone').on('mouseenter', function(e){
		e.preventDefault();
		micBG.show();
	});

	micBG.on('mouseleave', function(e){
		e.preventDefault();
		micBG.hide();
	});

	$('.mic').on('click', function(e){
		e.preventDefault();
		console.log(event.currentTarget);
	})

	var camBG = $('.camBG');
	camBG.hide();

	var cameras = flash.getCameras();
	cameraIndex = 0;
	for(var i = 0; i < cameras.length; i++){
		$('.camBG').append('<a href="#" class="cam">' + cameras[i] + '</a>');
	}

	$('.camera').on('mouseenter', function(e){
		e.preventDefault();
		camBG.show();
	});

	camBG.on('mouseleave', function(e){
		e.preventDefault();
		camBG.hide();
	});

	$('.cam').on('click', function(e){
		e.preventDefault();
		console.log(event.currentTarget);
	});

	filename = 'hobbit';

	$('.record').on('click', function(e){
		flash.startRecording(filename, cameraIndex, microphoneIndex);
	});

}