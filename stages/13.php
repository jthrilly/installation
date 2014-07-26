<div class="text-container">
	<div class="vcenter">
  		<h1 class="small">If you could set one task for one person in your life, with the aim of positively affecting the way they perceive or experience the world around them, who would it be for and what would it be?</h1>
  		<h3>Write your answer here...(140 characters)</h3>
  		<textarea maxlength="140"></textarea>
        <button class="btn btn-circle btn-lg green next">Submit</button>
    </div>	 	
  	</div>
</div>
<script>
	$('.next').click(function() {
		experience.setUserQuote($('textarea').val());
	    experience.nextStage();
	});



</script>


