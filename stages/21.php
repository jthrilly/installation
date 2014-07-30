<div class="text-container">
	<div class="row">
		<h2>Please enter your details below to be signed up to our mailing list.</h2>
	</div>
	<div class="row text-center">
      	<form action="http://thisisunfinished.createsend.com/t/d/s/xjtl/" class="connect-form" id="subForm" method="post">
      		<br /><br />
	        <label for="fieldName">Name</label>
	        <input id="fieldName" name="cm-name" type="text">
	        <label for="fieldEmail">Email</label>
	        <input id="fieldEmail" name="cm-xjtl-xjtl" required="" type="email">
	    	</form>
	 </div>
	 <div class="row text-center">
	 	<br /><br />
      	<button class="btn btn-circle btn-lg next">Submit</button>
      	<button class="btn btn-circle btn-lg green next">Cancel</button>
 	</div>
</div>
<script>
	$('.cancel').click(function() {
	    experience.nextStage();
	});

	$('.next').click(function() {
	    $('#subForm').submit();
	});

  $('#subForm').submit(function (e) {
    var $this = $(this);
    var message = $('#message');
    e.preventDefault();
    $.getJSON(
    this.action + "?callback=?",
    $(this).serialize(),
    function (data) {
        if (data.Status === 400) {
            console.log("Error: " + data.Message);
            
        } else { // 200
            console.log("Success: " + data.Message);
            $this[0].reset();
        }

        experience.nextStage();
    });
});


</script>


