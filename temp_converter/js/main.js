// Fahrenheit to Celsius
$('#fahrenheit_to_celsius').on('click', function () {
  var fah = $('#temperature').val();
  fah = parseFloat(fah);
// Convert to celsius
  var cels;
  cels = (fah - 32)*5/9;
  $('#result').html(cels);
});