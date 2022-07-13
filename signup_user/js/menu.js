var item =  $(".drop-down-pc-link");
var body =  $("body");
var burger =  $("#open-close-menu");
var userDrop = $(".user-info-all-data-container");

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
            console.log('no')
        }else{
            console.log('to')
            item.removeClass("activated-drop-d");
            $(this).addClass("activated-drop-d");
        }
    });
});

/*USER TOP BLOCK DROP DOWN*/
$(function() {
    userDrop.click(function() {
        userDrop.toggleClass("activated-user-data-drop");
    });
});
/*HIDE USER DROP DOWN ON OUTSIDE CLICK*/
$(document).mouseup(function(e) 
{
    var container = userDrop

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0) 
    {
        userDrop.removeClass("activated-user-data-drop");
    }
});