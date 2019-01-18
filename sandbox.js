$(document).ready(function() {
    $('.locA').click(function() {
      $('.pinA').css({"border": "1px orange solid"});
      $('.pinB, .pinC').css({"border": "1px #111111 solid"});
    });
    $('.locB').click(function() {
      $('.pinB').css({"border": "1px orange solid"});
      $('.pinA, .pinC').css({"border": "1px #111111 solid"});
    });
    $('.locC').click(function() {
      $('.pinC').css({"border": "1px orange solid"});
      $('.pinA, .pinB').css({"border": "1px #111111 solid"});
    });
    $('.mapArea').click(function() {
      $('.pinA, .pinB, .pinC').css({"border": "1px #111111 solid"});
    });
    $('.genElement').click(function() {
      $elementCount = $('.makeElement').children().length;

      if ($elementCount < 4) {
        $('.makeElement').append("<li>List item!</li>");
      } else {
        alert('You have generated enough elements, stop.');
      }
    })
    $('.deleteElement li').click(function(clicked) {
      $(clicked.target).remove();
    })
    $('.inputButton').on('click', function() {
      $inputCount = $('.userInput').children().length;
      $inputContents = $('.input').val();

      if ($inputCount < 4) {
        $('.userInput').append("<li>" + $inputContents + "</li>");
        $('.input').val("");
      } else {
        alert('You have generated enough elements, stop.');
      }
    })
});
