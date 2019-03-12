



function txtEnterEvent(e){
  var keyPress = e.which;
  if (keyPress == 13) {
   testAddMessage2();
  }
}
function getMessageGreen(content) {

var wrapper = $(".wrap");

var message = document.createElement("div");
var messageDetail = document.createElement("small");
var messageHour = document.createElement("h6");

$(message).addClass("message");
$(message).addClass("sent");


$(messageDetail).text(content);
$(messageHour).text("17:30");


message.append(messageDetail);
message.append(messageHour);

wrapper.append(message);

return wrapper;
}

function getMessageWhite(content) {

var wrapper = $(".wrap");

var message = document.createElement("div");
var messageDetail = document.createElement("small");
var messageHour = document.createElement("h6");

$(message).addClass("message");
$(message).addClass("received");


$(messageDetail).text(content);
$(messageHour).text("17:30");


message.append(messageDetail);
message.append(messageHour);

wrapper.append(message);

return wrapper;
}


function messagePrinter(e){
var me = $(this);
var activeMessageContainer = $(".wrapper-right-container");

  if (e.which == 13) {

   var input = me.val();
   me.val("");

   var htmlMsg = getMessageGreen(input);




   activeMessageContainer.append(htmlMsg);

   setTimeout(getMessageWhite, 1000);
  }
}


function init() {


var myTxt = $("#myInput");
myTxt.keyup();


var input = $('#wrapperInput');
input.keyup(messagePrinter);


}


$(document).ready(init);
