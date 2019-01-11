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
});
