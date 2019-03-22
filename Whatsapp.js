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


function getMessage(sent, content) {

  var data = {

    testo: content,
    ora : "17.30"
  }

    if (sent) {

      data.class = "sent";
    } else {

      data.class = "received";
    }

    var template = $("#box-template").html();
    var compiled = Handlebars.compile(template);
    var message = compiled(data);

return message;
}


function automaticResponse() {

  $.ajax({
    url:"https://www.boolean.careers/api/random/sentence",
    method: "GET",
    success: function(data, state) {

      if (data.success) {

        ajaxMsg(data.response);
      }
    },
    error: function (request, state, error) {

      console.log("request" , date);
      console.log("state" , state);
      console.log("date" , error);
    }
  });

}


function ajaxMsg(rndSentence) {

  var message = getMessage(false, rndSentence);
  var activeMessageContainer = $(" .wrapper-right.selected .wrapper-right-container");
  activeMessageContainer.append(message);
}


function messagePrinter(e){

  var me = $(this);
  var activeMessageContainer = $(" .wrapper-right.selected .wrapper-right-container");

  if (e.which == 13) {

     var input = me.val();
     me.val("");

     var htmlMsg = getMessage(true, input);
     activeMessageContainer.append(htmlMsg);

     setTimeout(automaticResponse, 3000);
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
