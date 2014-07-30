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
       <h2>WOULD YOU LIKE ANOTHER SHOT?</h2>
      </div>
    </div>
    <div class="row text-center">
      <div class="col-xs-6 text-right">
        <div class="btn btn-circle btn-lg photo-continue" style="line-height:1em;padding-top:20px">NA<br />GO WITH<br/>THAT</div>
      </div>
      <div class="col-xs-6 text-left">
        <div class="btn btn-circle btn-lg green photo-again" style="line-height:1em;padding-top:40px;">GOD<br/>YES</div>
      </div>
    </div>
  </div>

<script>

        $('.photo-continue').click(function() {
            experience.nextStage();
        });

        $('.photo-again').click(function() {
            experience.goToStage(experience.getCurrentStage());
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