// Front-end script for the handlebars page.
$(document).ready(function () {
  console.log("Ready!");
  $("#burger-form").on("submit", function () {
    // Prevent default
    event.preventDefault();
    var burgerName = $(this).children("textarea").val();
    $.post("/api/" + burgerName, burgerName, function () {
      console.log("Make me that burger!");
      location.reload();
    });
  });
});
