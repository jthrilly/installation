/* exported Experience, timedStages */
/* global video, snapshot,localMediaStream:true,hdConstraints,ctx, canvas, slideTimer */
/* jshint devel:true,unused:false */
var Experience = function Experience() {

  var experience = {};
  var currentStage = 0;
  var $content = $('#content');
  var photoCountdown;
  var image;
  var timedStages = 17;
  var timings = [0,0,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20];
  var quote;

  experience.init = function() {
        experience.goToStage(0);
        $('.next').click(function() {
            experience.nextStage();
        });
        $('.back').click(function() {
            experience.prevStage();
        });

        $(document).keydown(function(e){
    		if (e.keyCode === 37) { 
       			experience.prevStage();
       			return false;
    		}
		});
        $(document).keydown(function(e){
    		if (e.keyCode === 39) { 
       			experience.nextStage();
       			return false;
    		}
		});  

  };

  experience.setUserQuote = function(string) {
    quote = string;
  };

  experience.getUserQuote = function() {
    return quote;
  };

  experience.getImage = function() {
    return image;
  };

  experience.getSlideTime = function() {
    var seconds = timings[currentStage]*1000;
    console.log(seconds+" m/seconds for slide number "+currentStage);
    return seconds;
  };

  experience.goToStage = function(stage) {
    var newStage = stage;
    $content.transition({ opacity: '0'},300,'easeInSine').promise().done( function(){
      if (typeof slideTimer !== 'undefined') {clearInterval(slideTimer); }
      $content.load( "stages/"+stage+".php", function() {
        console.log("loading "+stage+".php");
        $content.transition({ opacity: '1'},300,'easeInSine');    
      });
    });                    
    currentStage = newStage;
  };

  experience.nextStage = function() {
    console.log("next");
    if (currentStage <= (timedStages-1)) {
      console.log("current stage; "+currentStage);
      var newStage = currentStage +1;
      console.log("new stage; "+newStage);
      experience.goToStage(newStage);
    } else {
      console.log('cancelling');
      clearInterval(slideTimer);
    }
    
  };

  experience.prevStage = function() {
    experience.goToStage(currentStage-1);
  };

  experience.photoInit = function() {
	  
	  function handleVideo(stream) {
	    video.src = window.URL.createObjectURL(stream);
	    localMediaStream = stream;
	  }

	  function videoError(e) {
	  	// do something
	  	console.log(e);
	  }

	  video.addEventListener('click', snapshot, false);

	  navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;

	  if (navigator.getUserMedia) {       
	    navigator.getUserMedia(hdConstraints, handleVideo, videoError);
	  }
  };

  experience.startCountdown = function() {
      

      var i = 3;

      photoCountdown = setInterval(function () {
        $('.number').transition({'scale':1,opacity:1},0);
        $('.countdown-container').css({opacity:1}); //show the spinner;
        if (i === 0) {
          experience.stopCountdown();
          experience.takePhoto();
          experience.showPreview();
        }
        console.log(i);
        $('.number').html(i);
        $('.number').transition({'scale':0,opacity:0},1000).promise().done(function() {
        });
        i=i-1;
      }, 1000);

  };

  experience.takePhoto = function() {
    if (localMediaStream) {
      ctx.drawImage(video, 0, 0);
      // "image/webp" works in Chrome.
      // Other browsers will fall back to image/png.
      image = canvas.toDataURL('image/webp');
      console.log(image);
    }
  };

  experience.showPreview = function() {
    $('.photo-preview').css({opacity:0});
    $('.confirm-panel').show();
  };

  experience.stopCountdown = function() {
    $('.countdown-container').css({opacity:0});
    clearInterval(photoCountdown);
  };


  return experience;
};




