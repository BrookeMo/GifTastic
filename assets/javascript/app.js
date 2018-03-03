$(document).ready(function() {
// set up array with objects we want to show up on the page load
var topics = ["sad", "happy", "angry", "lonely", "overwhelmed"];
  // set up a function to add those buttons to the html
  function addButton() {
    // empty to avoid repeat buttons
    $("#gifButtons").empty();
    // Loop through the topics array
    for (var i = 0; i < topics.length; i++) {
      // make buttons for each category
      var btn = $("<button>");
      btn.addClass("emotion");
      btn.attr("data-name", topics[i]);
      btn.text(topics[i]);
      // place buttons on the page
      $("#gifButtons").append(btn);
    };
};
// run the function
addButton();

  //create onclick when adding a custom button
  $("#addNewButton").click(function(event) {
    event.preventDefault();

    // get new category from input box
    var category = $("#newInput")
      .val()
      .trim();
    // add new category to categoryList array
    topics.push(category);

    // calling the addButton function
    addButton();

    $("#input").focus();
    console.log(category);
  });

  //call functions
  addButton();
  console.log("ok");
});