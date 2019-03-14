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



return message;
}





function messagePrinter(e){


  console.log("ciao");
    var me = $(this);
    var activeMessageContainer = $(" .wrapper-right.selected .wrapper-right-container");

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



function rowCanc() {

  var me = $(this);


  me.remove();


}


function init() {

    var input = $('.wrapperInput');
    input.keyup(messagePrinter);





    var input1 = $("input#myInput");
    input1.keyup(search);


    var contactInfo = $(".contacts > .contact-info");
    contactInfo.click(selectWrapper);

    var message = $(".message")

    $(document).on("click" , ".message", rowCanc);
}








$(document).ready(init);
