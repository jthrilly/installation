<div class="container text-center">
	<div class="row">
		<div class="col-xs-4">
			<img src="" id="userImage"/>
		</div>
		<div class="col-xs-8">
			<h3 class="userQuote"></h3>
		</div>
	</div>
	<div class="row text-center">
		<div class="col-xs-12">
  			<h1>JOIN THE REVOLUTION</h1>
  			<h3>POST YOUR TASK AND PICTURE?</h3>
  		</div>
  	</div>
  	<div class="row text-center">
      <div class="col-xs-6 text-right">
        <button class="btn btn-circle btn-lg share-no">No</button>
      </div>
      <div class="col-xs-6 text-left">
        <button class="btn btn-circle btn-lg green share-yes">Yes</button>
      </div>
    </div>	
</div>

<script>

$('.share-yes').click(function() {
    experience.sendTweet();
    experience.nextStage();
});

$('.share-no').click(function() {
    experience.sendTweet();
    experience.nextStage();
});

var image = experience.getImage();
var userQuote = experience.getUserQuote();
$('.userQuote').html(userQuote);
document.getElementById("userImage").src=image;

</script>


