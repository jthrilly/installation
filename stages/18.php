<div class="text-container">
      <h3>If you could set a task for someone in your life, with the aim of positively changing their mind, what would it be and who would it be for?</h3>
      <div class="row">
        <div class="col-md-9">
        <h4>You can write your answer here...(126 characters)</h4>  
          <textarea maxlength="126" class="text" style="height:220px"></textarea>
        </div>
        <div class="col-md-3 text-center" >
          <button class="btn btn-circle btn-lg next" style="margin-top:100px">Submit</button>
        </div>
      </div>
</div>
<script>
$('textarea').click(function() {
  $('.text').focus();
});

  $('.next').click(function() {
    experience.setUserQuote($('textarea').val());
      experience.nextStage();
  });



</script>


