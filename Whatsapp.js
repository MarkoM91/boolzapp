function selectWrapper() {

  var me = $(this);
  meIndex = me.index();

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



    var message = document.createElement("div");
    var messageDetail = document.createElement("small");
    var messageHour = document.createElement("h6");
    var popUp = document.createElement("div");
    var popUpElement = document.createElement("div");
    var a = document.createElement("a");
    var deleteMsg = document.createElement("div");
    var a1 = document.createElement("a");


    $(messageDetail).text(content);
    $(messageHour).text("17:30");
    $(a).text("Info Message");
    $(a1).text("Delete message");

    message.append(messageDetail);
    message.append(messageHour);
    message.append(popUp);
    popUpElement.append(a);
    deleteMsg.append(a1);
    popUp.append(popUpElement);
    popUp.append(deleteMsg);


    $(message).addClass("message");
    $(popUp).addClass("pop-up");
    $(popUpElement).addClass("pop-up-element");
    $(deleteMsg).addClass("deleteMsg");

    if (sent) {

      $(message).addClass("sent");
    } else {

      $(message).addClass("received");
    }

return message;
}

function automaticMessage() {

  $.ajax({
    url:"https://www.boolean.careers/api/random/sentence",
    method: "GET",
    success: function(data, state) {

      if (data.success) {

        var rndSentence = data.response
        var message = getMessageGreen(false, rndSentence);
        var activeMessageContainer = $(" .wrapper-right.selected .wrapper-right-container");
        activeMessageContainer.append(message);
      }
    },
    error: function (request, state, error) {

      console.log("request" , date);
      console.log("state" , state);
      console.log("date" , error);
    }
  });

}

function messagePrinter(e){



    var me = $(this);
    var activeMessageContainer = $(" .wrapper-right.selected .wrapper-right-container");

     if (e.which == 13) {

        var input = me.val();
        me.val("");

        var htmlMsg = getMessageGreen(true, input);
        activeMessageContainer.append(htmlMsg);


        setTimeout(automaticMessage, 3000);
     }
}



function showMessage() {

  var me = $(this);
  me.find(".pop-up").show();
}

function deleteMessage() {

  var me = $(this);
  me.closest(".message").remove();
}

function init() {

    var input = $('.wrapperInput');
    input.keyup(messagePrinter);

    var input1 = $("input#myInput");
    input1.keyup(search);

    var contactInfo = $(".contacts > .contact-info");
    contactInfo.click(selectWrapper);

    var message = $(".message");
    $(document).on("click" , ".message" , showMessage);
    var deleteMsg = $(".deleteMsg");
    $(document).on("click" , ".deleteMsg" , deleteMessage);
}

$(document).ready(init);
