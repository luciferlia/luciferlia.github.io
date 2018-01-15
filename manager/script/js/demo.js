/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#BFEFFF',
    lineColor: '#BFEFFF'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});