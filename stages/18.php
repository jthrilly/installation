<div class="text-container">
      <h3>If you could set a task for someone in your life, with the aim of positively changing their mind, what would it be and who would it be for?</h3>
      <div class="row">
        <div class="col-md-9">
        <h4>You can write your answer here (click the box to open the keyboard). 99 Character limit.</h4>  
          <textarea maxlength="99" class="text" style="height:200px"></textarea>
        </div>
        <div class="col-md-3 text-center" >
          <button class="btn btn-circle btn-lg next" style="margin-top:100px">Submit</button>
        </div>
      </div>
</div>
<script>

  $('.text').focus();


  $('.next').click(function() {
    experience.setUserQuote($('textarea').val());
      experience.nextStage();
  });



</script>


