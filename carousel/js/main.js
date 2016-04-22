// Declare image array
var images = ["image_1.jpg", "image_2.jpg", "image_3.jpg", "image_4.jpg", "image_5.jpg", "image_6.jpg"];

// Declare vote array
var vote = [0, 0, 0, 0, 0, 0];

// Declare variable of the current display image
var i = 0;


// Next button function
$('#next').on('click', function() {
  $('#prev').removeAttr('disabled');
  i = i +1;
  $('#image-to-vote-on').attr('src', 'images/'+images[i]);
  $('#votes').html('Likes: '+vote[i]);

  if (i === images.length - 1) {
    $('#next').attr('disabled', "true");
  };
});


// Prev button function
$('#prev').on('click', function() {
  $('#next').removeAttr('disabled');
  i = i - 1;
  $('#image-to-vote-on').attr('src', 'images/'+images[i]);
  $('#votes').html('Likes: '+vote[i]);

  if (i === 0) {
    $('#prev').attr('disabled', "true");
  };
});

// Upvote function
$('#upvote').on('click', function () {
  vote[i] = vote[i] + 1;
  $('#votes').html('Likes: '+vote[i]);
});

// Downvote function
$('#downvote').on('click', function () {
  vote[i] = vote[i] - 1;
// Votes will never be less than 0
  if (vote[i] < 0) {
    vote[i] = 0;
  }
  $('#votes').html('Likes: '+vote[i]);
});

