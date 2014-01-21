$(document).ready(function(){

	console.log('Slider');

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

vidSwitch = true;

var seekTime = function(time){
	vidTime = time;

	if(vidSwitch){
		$('.seek').val(vidTime);
	}
}

var getDuration = function(duration){
	vidDuration = duration;
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
		$('.micBG').append('<a href="#" class="mic" id="' + i + '">' + microphones[i] + '</a>');
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
		microphoneIndex = event.currentTarget.id;
		console.log(microphoneIndex);
	})

	var camBG = $('.camBG');
	camBG.hide();

	var cameras = flash.getCameras();
	cameraIndex = 0;
	for(var i = 0; i < cameras.length; i++){
		$('.camBG').append('<a href="#" class="cam" id="' + i + '">' + cameras[i] + '</a>');
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
		cameraIndex = event.currentTarget.id;
		console.log(cameraIndex);
	});

	filename = 'hobbit';

	$('.record').on('click', function(e){
		console.log(cameraIndex, microphoneIndex);
		flash.startRecording(filename, cameraIndex, microphoneIndex);
	});

	$('.volumeControl').on('input change', function(e){
		var volume = $('.volumeControl').val();
		flash.setVolume(volume / 100);
		console.log(volume);
	});

	seek = $('.seek').val(0);

	$('.seek').on('input change', function(e){

		var seek_bar = $('.seek').val();
		var xPos = seek_bar;
		var seekTime = 0;

		var seekTime  = xPos / 200 * vidDuration;

		vidSwitch = false;

		flash.setTime(seekTime);
	});

	$('.seek').on('mouseup', function(e){
		vidSwitch = true;
	});

}

// var myDataRef = new Firebase('');

// $('#button').on('click', function (e) {
//       var name = $('#nameInput').val();
//       var text = $('#messageInput').val();
//       myDataRef.push({name: name, text: text});
//       $('#messageInput').val('');
// });

// myDataRef.on('child_added', function(snapshot) {
//     var message = snapshot.val();
// 	displayChatMessage(message.name, message.text);
// });

// function displayChatMessage(name, text) {
// 	$('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
// 	$('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
// };