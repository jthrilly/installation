  <div class="photo-preview">  
    <video autoplay="true" id="videoElement">   
    </video>
    <div class="countdown-container">
      <div class="loader"></div>
      <span class="number"></span>
    </div>
  </div>



  <div class="container confirm-panel">
    <div class="row text-center">
      <canvas width="1280" height="720">
      </canvas>
    </div>
    <div class="row text-center">
      <div class="col-md-12">
       <h2>Take a different shot?</h2>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-md-6 text-right">
        <button class="btn btn-circle btn-lg photo-again">Yes</button>
      </div>
      <div class="col-md-6 text-left">
        <button class="btn btn-circle btn-lg green photo-continue">No</button>
      </div>
    </div>
  </div>

<script>

        $('.photo-continue').click(function() {
            experience.nextStage();
        });

        $('.photo-again').click(function() {
            experience.goToStage(1);
        });


$(".countdown").knob({
                'min':0,
                'max':3,
                'readOnly':true

                });




  var video = document.querySelector("#videoElement");

  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var localMediaStream = null;

  var hdConstraints = {
  video: {
    mandatory: {
      minWidth: 1280,
      minHeight: 720
    }
  }
};
  
  var localMediaStream = null;

  experience.photoInit();
  setTimeout(function() { experience.startCountdown() }, 2000);
  function snapshot() {
    if (localMediaStream) {
      ctx.drawImage(video, 0, 0);
      // "image/webp" works in Chrome.
      // Other browsers will fall back to image/png.
      // document.querySelector('img').src = canvas.toDataURL('image/webp');
    }
  }
</script>