//Coded by Ryan Atkinson
$(document).ready(function () {

  var $newTaskForm = $('.newTaskForm');
  var $taskInput = $('input:text');


  $newTaskForm.on('submit', function(e) {
    e.preventDefault();
    var newTask = $('input:text').val();
    $('ul:last').append('<li class="noBull">' + '<div class="addedTask">' + '<input type="checkbox" name="checkMeOut">'
                       + '<p>' + newTask + '</p></div></li>');
    $taskInput.val('');
  });



  $('ul:last').on('click', 'input:checkbox', function() {
    if($(this).prop('checked')) {
      $(this).closest('.addedTask').addClass('finished');
  } else if (!$(this).prop('checked')) {
      $(this).closest('.addedTask').removeClass('finished');
    }
  });

  // $('input:checkbox').click(function() {
  //   $('input:checkbox').each(function(i) {
  //     if($(this).prop('checked')) {
  //       $(this).closest('.addedTask').addClass('finished');
  //   } else if (!$(this).prop('checked')) {
  //       $(this).closest('.addedTask').removeClass('finished');
  //   })

  // $(document).on('click', 'input:checkbox', function(e) {
  //   if($(this).prop('checked')) {
  //     $(this).closest('.addedTask').addClass('finished');
  // } else if (!$(this).prop('checked')) {
  //     $(this).closest('.addedTask').removeClass('finished');
  //   });
  // });
});
