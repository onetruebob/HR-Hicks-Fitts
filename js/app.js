$(document).ready(function() {
  var terms = ["invoke","define","reference","scope","closure","variable","function","functional",
                "functional shared","prototypal","pseudoclassical","debugger","linear","polynomial",
                "logarithmic","break point","bind","call","apply","this","driver","nagivator","pseudocode",
                "encapsulation","test driven development"];

  var $docBody = $(document.body);
  var startTime;
  var finishTime;

  var applyTemplate = function (template){
    $docBody.empty();
    $(template).appendTo($docBody);
  };


  var generateButtons = function (buttonTerms){
    debugger;
    var buttonTemplate = '';
    _.each(buttonTerms, function (term){
      buttonTemplate = buttonTemplate + '<button class="basicButton" id="' + 
                       (term === 'invoke' ? 'target' : '') + '">' + term + '</button><br>\n';
    });
    return buttonTemplate;
  };

  // First page - Welcome
  var welcomeTemplate = ' \
  <h1>Welcome to my demo of Hick\'s Law</h1> \
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
      event.preventDefault();
      if ($(this).attr('id') === 'target') {
        finishTime = (new Date).getTime();
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
    $('#results').text('' + (finishTime - startTime));
    $('#nextTest').on('click', function (event){
      event.preventDefault();
      setupRndMultiTermTest();
    });
  };


  // Forth page - Rnd Multi Term Test
  var rndMultiTermTestTemplate = '<h1>Click the &quot;invoke&quot; button</h1>';

  var setupRndMultiTermTest = function (){
    var shuffledTerms;

    applyTemplate(rndMultiTermTestTemplate);
    shuffledTerms = _.shuffle(terms);
    $(generateButtons(shuffledTerms)).appendTo($docBody)
    startTime = (new Date).getTime();
    $('.basicButton').on('click', function (e){
      e.preventDefault();
      if($(this).attr('id') === 'target'){
        finishTime = (new Date()).getTime();
        setupRndMultiTermResults();
      }
    });
  };

  // Fifth page - Rnd Multi Term Test Result
  var rndMultiTermResultTemplate = ' \
  <h1>Random Multi Button Test Results</h1> \
  <p>It took you <em><span id="results"></span></em> milliseconds to find and click the button.</p> \
  <button class="basicButton" id="nextTest">Next Test</button>';

  var setupRndMultiTermResults = function (){
    applyTemplate(rndMultiTermResultTemplate);
    $('#results').text('' + (finishTime - startTime));
    $('#nextTest').on('click', function (event){
      event.preventDefault();
      setupGroupedMultiTermTest();
    });
  };

  // Sixth page - Grouped Multi Term Test
  var groupedMultiTermTestTemplate = ' \
  <h1>Click the &quot;invoke&quot; button</h1>';

  var setupGroupedMultiTermTest = function (){
    var template = groupedMultiTermTestTemplate
    var template = template + '<div class="buttonGroup"><h1>Instantiation Patterns</h1>';
    var template = template + generateButtons(['functional', 'functional shared', 'prototypal', 'pseudoclassical']) + '<br>';
    var template = template + '<h1>Context</h1>';
    var template = template + generateButtons(['this', 'call', 'apply', 'bind']) + '<br>';
    var template = template + '<h1>Functions</h1>';
    var template = template + generateButtons(['function', 'define', 'invoke', 'debugger', 'break point']) + '<br></div>';
    var template = template + '<div class="buttonGroup"><h1>Complexity</h1>';
    var template = template + generateButtons(['linear', 'logarithmic','polynomial']) + '<br>';
    var template = template + '<h1>Variables</h1>';
    var template = template + generateButtons(['variable', 'reference', 'scope', 'closure']) + '<br>';
    var template = template + '<h1>Best Practices</h1>';
    var template = template + generateButtons(['test driven development', 'encapsulation', 'pseudocode','driver', 'navigator']) + '<br></div>';
    applyTemplate(template);
    startTime = (new Date).getTime();
    $('.basicButton').on('click', function (e){
      e.preventDefault();
      if($(this).attr('id') === 'target'){
        finishTime = (new Date()).getTime();
        setupGroupedMultiTermResults();
      }
    });
  };

  //Seventh page - Grouped Multi Term Test Results
  var rndGroupedMultiTermResultTemplate = ' \
  <h1>Grouo Multi Button Test Results</h1> \
  <p>It took you <em><span id="results"></span></em> milliseconds to find and click the button.</p> \
  <button class="basicButton" id="nextTest">Next Test</button>';

  var setupGroupedMultiTermResults = function (){
    applyTemplate(rndGroupedMultiTermResultTemplate);
    $('#results').text('' + (finishTime - startTime));
    $('#nextTest').on('click', function (event){
      event.preventDefault();
      setupGroupedMultiTermTest();
    });
  };

  // Start up the app
  setupWelcome();
});