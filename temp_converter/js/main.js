// Fahrenheit to Celsius
var input,output;

$('#fahrenheit_to_celsius').on('click', function () {
  input = $('#temperature').val();
  input = parseFloat(input);

  if (isNaN(input)) {
    $('#result').html('Input is not a number!');
    return;
  }
// Convert math
  output = (input - 32)*5/9;
  $('#result').html(convertText(input)+'F='+convertText(output)+'C');
  weather(input);
});

$('#celsius_to_fahrenheit').on('click', function () {
  input = $('#temperature').val();
  input = parseFloat(input);
  if (isNaN(input)) {
    $('#result').html('Input is not a number!');
    return;
  }
// Convert math
  output = (input*1.8 +32);
  $('#result').html(convertText(input)+'C='+convertText(output)+'F');
  weather(output);
});

function convertText (number) {
  var converted = number.toFixed(0) + '&deg;';
  return converted;
}

function weather (number) {
  if (number>70) {
    $('body').addClass('hot');
    $('body').removeClass('cold');
  }
  else {
    $('body').addClass('cold');
    $('body').removeClass('hot');
  }
}