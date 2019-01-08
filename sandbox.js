$(document).ready(function() {
    $('.locA').click(function() {
      $('.pinA').css({"border": "1px orange solid"});
      $('.pinB, .pinC').css({"border": "none"});
    });
    $('.locB').click(function() {
      $('.pinB').css({"border": "1px orange solid"});
      $('.pinA, .pinC').css({"border": "none"});
    });
    $('.locC').click(function() {
      $('.pinC').css({"border": "1px orange solid"});
      $('.pinA, .pinB').css({"border": "none"});
    });
    $('.mapArea').click(function() {
      $('.pinA, .pinB, .pinC').css({"border": "none"});
    });
});
