function testAddMessage1() {

var wrapper = $(".wrap");

var message = document.createElement("div");
var messageDetail = document.createElement("small");
var messageHour = document.createElement("h6");

$(message).addClass("message");
$(message).addClass("sent");


$(messageDetail).text("Ogni anno l’economia mondiale consuma quasi 93 miliardi di tonnellate di materie prime tra minerali, combustibili fossili, metalli e biomassa.")
$(messageHour).text("17:30");


message.append(messageDetail);
message.append(messageHour);

wrapper.append(message);
}

function testAddMessage2() {

var wrapper = $(".wrap");

var message = document.createElement("div");
var messageDetail = document.createElement("small");
var messageHour = document.createElement("h6");

$(message).addClass("message");
$(message).addClass("received");


$(messageDetail).text("ok interessante.");
$(messageHour).text("17:30");


message.append(messageDetail);
message.append(messageHour);

wrapper.append(message);
}

function txtEnterEvent(e){
  var keyPress = e.which;
  if (keyPress == 13) {
   testAddMessage2();
  }
}

function printMessage() {
var wrapperInput = $("#wrapperInput");
 var input = wrapperInput.val();

 var wrapper = $(".wrap");

 var message = document.createElement("div");
 var messageDetail = document.createElement("small");
 var messageHour = document.createElement("h6");

 $(message).addClass("message");
 $(message).addClass("sent");


 $(messageDetail).text(input);
 $(messageHour).text("17:30");


 message.append(messageDetail);
 message.append(messageHour);

 wrapper.append(message);


}

function init() {
var btn1 = $("#wrapperButton1");
btn1.click(function() {

  testAddMessage1();
});
var btn2 = $("#wrapperButton2");
btn2.click(function() {

  testAddMessage2();
});

var myTxt = $("#myInput");
myTxt.keyup();

var wrapperInput = $("#wrapperInput");
var content = $('#content')
content.click(printMessage);





}


$(document).ready(init);
