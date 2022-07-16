$bod = $('body');
$mbDrop = $('#mb-m-drop-down-parent');
//Burger click -- open/close menu mobile
$('.burger-container-m-lg').on('click', function(e) {
    $bod.toggleClass("clicked-menu");
});

//Mobile drop down menu items
$('#mb-m-trigger').on('click', function(e) {
    $mbDrop.toggleClass("activated-child-mb-m");
});