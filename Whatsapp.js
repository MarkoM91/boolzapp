function testAddMessage1() {

var wrapper = $(".wrap");

var message = document.createElement("div");
var messageContent = document.createElement("p");
var messageDetail = document.createElement("small");

$(message).addClass("message");
$(message).addClass("sent");

$(messageContent).text("messagio dinamico");
$(messageDetail).text("dettagli messaggio dinamico");

message.append(messageContent);
message.append(messageDetail);

wrapper.append(message);
}

function testAddMessage2() {

var wrapper = $(".wrap");

var message = document.createElement("div");
var messageContent = document.createElement("p");
var messageDetail = document.createElement("small");

$(message).addClass("message");
$(message).addClass("received");

$(messageContent).text("messagio dinamico");
$(messageDetail).text("dettagli messaggio dinamico");

message.append(messageContent);
message.append(messageDetail);

wrapper.append(message);
}

function txtEnterEvent(e){
  var keyPress = e.which;
  if (keyPress == 13) {
   testAddMessage2();
  }
}

function init() {
var btn1 = $("#wrapperButton1");
btn1.click(function() {

  testAddMessage1();
});
var btn2 = $("#wrapperButton2");
btn2.click(function() {
console.log("ok");
  testAddMessage2();
});

var myTxt = $("#myInput");
myTxt.keyup();

}


$(document).ready(init);
