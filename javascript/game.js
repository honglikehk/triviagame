// the function does not run until the HTML is done loading
$(document).ready(function() {
  // when the submit button is clicked then the game is started
  $(".btn").on("click", function() {
    $(this).button("hide");
  });
});
