$(document).ready(function() {
  var $docBody = $(document.body);
  var startTime;
  var finishTime;

  var applyTemplate = function (template){
    $docBody.empty();
    $(template).appendTo($docBody);
  };

  // First page - Welcome

  var welcomeTemplate = ' \
  <h1>Welcome to my demo of Hicks Law & Fitts Law</h1> \
  <button class="basicButton" id="demo-start">Start the Demo</button>';

  var setupWelcome = function (){
    applyTemplate(welcomeTemplate)
    $('#demo-start').on('click', function(event) {
      event.preventDefault();
      setupSingleButtonTest();
    });
  };

  // Second page - Single Button Test

  var singleButtonTestTemplate = ' \
  <h1>Click the &quot;invoke&quot; button</h1> \
  <br><br><br> \
  <button class="basicButton" id="target">invoke</button>';

  var setupSingleButtonTest = function() {
    applyTemplate(singleButtonTestTemplate);
    startTime = (new Date).getTime();
    $('.basicButton').on('click', function(event) {
      if ($(this).attr('id') === 'target') {
        finishTime = (new Date).getTime();
        event.preventDefault();
        setupSingleButtonResults();
      }
    });
  };

  // Third page - Single Button Restuls

  var singleButtonResultsTemplate = ' \
  <h1>Single Button Test Results</h1> \
  <p>It took you <em><span id="results"></span></em> milliseconds to find and click the button.</p> \
  <button class="basicButton" id="nextTest">Next Test</button>';

  var setupSingleButtonResults = function() {
    applyTemplate(singleButtonResultsTemplate);
    $('#results').text ('' + (finishTime - startTime)); 
  };

  setupWelcome();
});