var item =  $(".drop-down-pc-link");
var body =  $("body");
var burger =  $("#open-close-menu");

let winheight = 0;

//Open modal butons
var user = $("#open-modal-by-click");
var notification = $("#open-modal-by-click-notif");
var message = $("#open-modal-by-click-message");

//SET height of menu modal
if ($(window).width() < 678) {
    //mobile screen
    winheight = $(window).height();
    winheight = winheight - 220;
}
else {
    //pc screen
    winheight = $(window).height();
    winheight = winheight - 140;
}



//Modal
var userDrop = $(".user-info-all-data-container");

//Close modal button
var closeModal = $(".right-side-nv-md-h");

/*MENU BURGER CLOSE_OPEN*/
$(function() {
    burger.click(function() {
        body.toggleClass("activeted-mobile-menu");
    });
});

/*MENU DROP DOWN OPEN LINK*/
$(function() {
    item.click(function() {
        if ( $(this).hasClass("activated-drop-d")) {
            item.removeClass("activated-drop-d");
        }else{
            item.removeClass("activated-drop-d");
            $(this).addClass("activated-drop-d");
        }
    });
});


/*USER TOP BLOCK DROP DOWN*/
$(function() {
    //view account modal content
    user.click(function() {
        //remove rest possible opened content types (notificatons, messages)
        userDrop.removeClass("notification-view-md message-view-md");
        //open modal and account content inside
        userDrop.toggleClass("activated-user-data-drop account-view-md");

        //get content height inside
        var content_height = $(".account-seeting-modal-content").height();
        //if content height bigger than wrap max height 
        if(content_height > winheight){
            //set this wrap height stat = win height - 140px
            $(".modal-menu-container-nw").css('height', winheight  + 'px');
        }else{
            // set wrap height - max content
            $(".modal-menu-container-nw").css('height', 'max-content');
        }
    });

    //view notifications modal content
    notification.click(function() {
        //remove rest possible opened content types (account, messages)
        userDrop.removeClass("account-view-md message-view-md");
        //open modal and notifications content inside
        userDrop.toggleClass("activated-user-data-drop notification-view-md");


        //get content height inside
        var content_height = $(".notifications-modal-content").height();
        //if content height bigger than wrap max height 
        if(content_height > winheight){
            //set this wrap height stat = win height - 140px
            $(".modal-menu-container-nw").css('height', winheight  + 'px');
        }else{
            // set wrap height - max content
            $(".modal-menu-container-nw").css('height', 'max-content');
        }
    });

    //message account modal content
    message.click(function() {
        //remove rest possible opened content types (account, notifications)
        userDrop.removeClass("account-view-md notification-view-md");
        //open modal and message content inside
        userDrop.toggleClass("activated-user-data-drop message-view-md");

        //get content height inside
        var content_height = $(".messgaes-modal-content").height();
        //if content height bigger than wrap max height 
        if(content_height > winheight){
            //set this wrap height stat = win height - 140px
            $(".modal-menu-container-nw").css('height', winheight  + 'px');
        }else{
            // set wrap height - max content
            $(".modal-menu-container-nw").css('height', 'max-content');
        }
    });
});

closeModal.click(function(){
   userDrop.removeClass("activated-user-data-drop account-view-md notification-view-md message-view-md");
});


/*HIDE USER DROP DOWN ON OUTSIDE CLICK*/

$(document).mouseup(function(e) 
{
    var container = userDrop

   // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        userDrop.removeClass("activated-user-data-drop account-view-md notification-view-md message-view-md");
    }
});