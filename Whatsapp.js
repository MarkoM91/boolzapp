function conversation() {



  var wrapperright2 = $(".wrapper-right2");
  var wrapperright = $(".wrapper-right");

wrapperright2.show();
wrapperright2.hide();


}

function search() {

    var me = $(this);
    var content = me.val();

    var contactInfo = $(".contact-info");
    contactInfo.removeClass("hidden");

    var txt = $(".txt > h5");

    for (var i = 0; i < contactInfo.length; i++) {

       var contactInfolength = contactInfo.eq(i);

       var contactInfoContent = txt.eq(i).text();


       if (!contactInfoContent.includes(content)) {

          contactInfolength.addClass("hidden");
       }
    }

}



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
    var message
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


    $(messageDetail).text("ok");
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
function messagePrinter1(e){
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

    var input = $('#wrapperInput');
    input.keyup(messagePrinter);

    var input1 = $("input#myInput");
    input1.keyup(search);

    var contactInfo = $(".contact-info");

    contactInfo.click(conversation);
}

$(document).ready(init);
