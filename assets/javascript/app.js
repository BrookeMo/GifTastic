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
  });

  //call the function
  addButton();
});

// create a function to load gifs
function loadGif() {
    // empty previously loaded gifs
      $("#gifs").empty();
      console.log("clicked");
      search = $(this).text();
      console.log(this);
      var giphyURL =
        "https://api.giphy.com/v1/gifs/search?q=" + search + "&limit=10&api_key=0p44Xpl3mt1o1v1LSvaZGUrQiOFgw1AZ";
// ajax function for getting the data
$.ajax({
    url: giphyURL,
    method: "GET"
  }).then(function(response) {
    console.log(response.data);
    var results = response.data;
// run through the results in a for loop
for (var i = 0; i < results.length; i++) {
    //grab the gif
    var imageURL = results[i].images.fixed_height.url;
    //and the still
    var imageStillURL = results[i].images.fixed_height_still.url;
    // and the rating
    var rating = results[i].rating;
    // put all the info into html
    var divTag = $("<div>");
    var pTag = $("<p>").text("Rating: " + rating);
    var imgTag = $("<img>").attr("src", imageStillURL);
    //give them attributes for clicking still to animated
    imgTag.attr("data-still", imageStillURL);
    imgTag.attr("data-animate", imageURL);
    imgTag.attr("data-state", "still").attr("class", "gif");
    //append to the html
    $("#gifs").append(divTag);
    divTag.attr("class", "gifDiv");
    divTag.append(pTag);
    divTag.append(imgTag);
};
});
}
$(".emotion").on("click", function() {
    console.log("You made it!");
loadGif();
});
$("body").on("click", ".gif", function() {
    var src = $(this).attr("src");
    if ($(this).hasClass("playing")) {
      //stop
      $(this).attr("src", src.replace(/\.gif/i, "_s.gif"));
      $(this).removeClass("playing");
    } else {
      //play
      $(this).addClass("playing");
      $(this).attr("src", src.replace(/\_s.gif/i, ".gif"));
    }
  });

