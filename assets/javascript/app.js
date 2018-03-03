$(document).ready(function() {
// set up array with objects we want to show up on the page load
var topics = ["sad", "happy", "angry", "lonely", "overwhelmed"];
  // set up a function to add those buttons to the html
  function addBtn() {
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
addBtn();
});