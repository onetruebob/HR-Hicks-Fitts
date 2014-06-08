$(document).ready(function() {
    var $docBody = $(document.body);

    var setupWelcome = function (){
      $docBody.empty();
      $('<h1>Welcome to my demo of Hicks Law & Fitts Law</h1>').appendTo($docBody);
    };

    setupWelcome();
});