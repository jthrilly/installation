/* exported Experience, timedStages */
/* global video, snapshot,localMediaStream:true,hdConstraints,ctx, canvas, slideTimer, Codebird */
/* jshint devel:true,unused:false */
var Experience = function Experience() {

  var experience = {};
  var currentStage = 0;
  var $content = $('#content');
  var photoCountdown;
  var image;
  var timedStages = 18;
  var timings = [0,0,0,15,0,15,15,10,15,15,15,15,20,20,10,25,15,15];
  var quote;
  var cb;

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

  experience.reset = function() {
    quote = "";
    image = null;
    experience.goToStage(0);
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

      console.log("current stage; "+currentStage);
      var newStage = currentStage +1;
      console.log("new stage; "+newStage);
      experience.goToStage(newStage);
    
  };

  experience.prevStage = function() {
    experience.goToStage(currentStage-1);
  };

  experience.getCurrentStage = function() {
    return currentStage;
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
      image = canvas.toDataURL('image/png');
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

  experience.initTwitter = function() {
    cb = new Codebird();
    cb.setConsumerKey("7xo2EFvYpSWzikksZsF4CRKng", "DVhyzG4eOt4Y1t8nVDtyCgRMt7lX9meYXVYqOFWwu2oz2miwd9");

    // get request token
    // cb.__call(
    // "oauth_requestToken",
    // {oauth_callback: "oob"},
    // function (reply) {
    //     // stores it
    //     cb.setToken(reply.oauth_token, reply.oauth_token_secret);

    //     // gets the authorize screen URL
    //     cb.__call(
    //         "oauth_authorize",
    //         {},
    //         function (auth_url) {
    //             window.codebird_auth = window.open(auth_url);
    //         }
    //     );
    // }
    // );

  };


  experience.twitterAuth = function(code) {
    cb.__call(
      "oauth_accessToken",
      {oauth_verifier: code},
      function (reply) {
          // store the authenticated token, which may be different from the request token (!)
          cb.setToken(reply.oauth_token, reply.oauth_token_secret);
          console.log(reply);
          // if you need to persist the login after page reload,
          // consider storing the token in a cookie or HTML5 local storage
      }
    );
  };

  experience.sendTweet = function() {
      var userImage = experience.getImage();
      var quote = "#changemymind "+experience.getUserQuote();
      var data = userImage.substring( "data:image/png;base64,".length );
      var image = data;

    cb = new Codebird();
    cb.setConsumerKey("7xo2EFvYpSWzikksZsF4CRKng", "DVhyzG4eOt4Y1t8nVDtyCgRMt7lX9meYXVYqOFWwu2oz2miwd9");

    var params = {
        "status": quote,
        "media[]": image
    };
    console.log(image);
    console.log(quote);
    console.log(params);

    cb.setToken("2680975027-H7GNoL9Y4wXmluRYTPmnmCthBo3stxXr9Wq7E8h","k4bBjEbVGuYD6IXSh848kckW2WcTV46HBtWcP623jquSw");
    cb.__call(
        "statuses_updateWithMedia",
    params,
      function (reply) {
          console.log(reply);
      }
    );

  };


  return experience;
};

// function disableclick(event)
// {
//   if(event.button===2)
//    {
//      alert(status);
//      return false;    
//    }
// }

// document.onmousedown=disableclick();




