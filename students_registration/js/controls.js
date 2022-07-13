
/*MENU BURGER CLOSE_OPEN*/
$('.controls-uni-connected').click(function() {        
   
    var unhide = $(this).data("id");
    var line = '#line-data-ftjs-' + unhide + '';
    $(line).toggleClass('modal-contol-opened');
});
