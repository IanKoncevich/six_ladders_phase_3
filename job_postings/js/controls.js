
/*MENU BURGER CLOSE_OPEN*/
$('.act-drop-md-button').click(function() {        
    
    var unhide = $(this).data("id");
    var line = '#line-data-ftjs-' + unhide + '';
    $(line).toggleClass('modal-contol-opened');
});

//Contact student
/*MENU BURGER CLOSE_OPEN CONTACT*/
$('.contact-button-main').click(function() {        
    var unhide_ct = $(this).data("id");
    var line_ct = '#pop-cont-mnbs-' + unhide_ct + '';
    $(line_ct).toggleClass('modal-contol-opened_ctn');
});
