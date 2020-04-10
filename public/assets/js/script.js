// Front-end script for the handlebars page.
$(document).ready(function () {
  console.log("Ready!");
  // Code that posts the name of the burger in the form
  $("#burger-form").on("submit", function () {
    // Prevent default
    event.preventDefault();
    var burgerName = $(this).children("textarea").val();
    $.post("/api/" + burgerName, burgerName, function () {
      console.log("Make me that burger!");
      location.reload();
    });
  });
  // Code that changes data in the database when a button is clicked
  $("#burger-list").on("click", "button", function () {
    var burger = $(this).prev().text();
    var id = parseInt(burger[0]);
    $.ajax({
      url: "/api/" + id,
      method: "PUT",
    }).then(function (response) {
      location.reload();
    });
  });
});
