// ketika button di klik dua kali dengan menjalankan fungsi 
// animate
$('.top').click(function () {
  $('.box').animate({
    // properties : value
    'top': 0,
    // slow, style
  }, 500, 'linear');
});

$('.down').click(function () {
  $('.box').animate({
    'top': 380,

  }, 500, 'linear');
});
$('.right').click(function () {
  $('.box').animate({
    'left': 580,

  }, 500, 'linear');
});

$('.left').click(function () {
  $('.box').animate({
    'left': 0,

  }, 500, 'linear');
});

$('.center').click(function () {
  $('.box').animate({
    'top': 180,

  }, 500, 'linear');
});