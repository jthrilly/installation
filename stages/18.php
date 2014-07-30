<div class="text-container">
	<div class="vcenter">
  		<h2>If you could set a task for someone in your life, with the aim of positively changing their mind, what would it be and who would it be for?</h2>
  		<h3>You can write your answer here...(140 characters)</h3>
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


