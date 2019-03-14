function selectWrapper() {

  var me = $(this);
  meIndex = me.index();
  console.log(meIndex);


  var wrapperRight = $('.wrapper-right');
  wrapperRight.removeClass("selected");

  var selectedWrapper = wrapperRight.eq(meIndex);
  $(selectedWrapper).addClass("selected");


}




function search() {

    var me = $(this);
    var content = me.val().toLowerCase();

    var contactInfo = $(".contact-info");
    contactInfo.removeClass("hidden");

    var txt = $(".txt > h5");

    for (var i = 0; i < contactInfo.length; i++) {

       var contactInfolength = contactInfo.eq(i);

       var contactInfoContent = txt.eq(i).text().toLowerCase();


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

function getMessageGreen(sent ,content) {

    var wrapper = $(".wrap");

    var message = document.createElement("div");
    var messageDetail = document.createElement("small");
    var messageHour = document.createElement("h6");

    $(messageDetail).text(content);
    $(messageHour).text("17:30");

    message.append(messageDetail);
    message.append(messageHour);

    $(message).addClass("message");

    if (sent) {

      $(message).addClass("sent");
    } else {

      $(message).addClass("received");
    }

  wrapper.append(message);

return wrapper;
}

function getMessageGreen1(sent ,content) {

    var wrapper = $(".wrap1");

    var message = document.createElement("div");
    var messageDetail = document.createElement("small");
    var messageHour = document.createElement("h6");

    $(messageDetail).text(content);
    $(messageHour).text("17:30");

    message.append(messageDetail);
    message.append(messageHour);

    $(message).addClass("message");

    if (sent) {

      $(message).addClass("sent");
    } else {

      $(message).addClass("received");
    }

  wrapper.append(message);

return wrapper;
}




function messagePrinter(e){
    var me = $(this);
    var activeMessageContainer = $(".wrapper-right-container");

     if (e.which == 13) {

        var input = me.val();
        me.val("");

        var htmlMsg = getMessageGreen(true, input);
        activeMessageContainer.append(htmlMsg);

        setTimeout(function() {

          htmlMsg = getMessageGreen(false, "ok");
          activeMessageContainer.append(htmlMsg);

        }, 1000);
     }
}

function messagePrinter1(e){
    var me = $(this);
    var activeMessageContainer = $(".wrapper-right-container1");

     if (e.which == 13) {

        var input = me.val();
        me.val("");

        var htmlMsg = getMessageGreen1(true, input);
        activeMessageContainer.append(htmlMsg);

        setTimeout(function() {

          htmlMsg = getMessageGreen1(false, "ok");
          activeMessageContainer.append(htmlMsg);

        }, 1000);
     }
}

function rowCanc() {

  var me = $(this);


  me.remove();


}


function init() {

    var input = $('#wrapperInput');
    input.keyup(messagePrinter);

    var input1 = $('#wrapperInput1');
    input1.keyup(messagePrinter1);



    var input1 = $("input#myInput");
    input1.keyup(search);


    var contactInfo = $(".contacts > .contact-info");
    contactInfo.click(selectWrapper);

    var message = $(".message")

    $(document).on("click" , ".message", rowCanc);
}








$(document).ready(init);
