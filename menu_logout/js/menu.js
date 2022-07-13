$bod = $('body');
$mbDrop = $('#mb-m-drop-down-parent');
$signForm = $('.signup-form-container');
//Burger click -- open/close menu mobile
$('.burger-container-m-lg').on('click', function(e) {
    $bod.toggleClass("clicked-menu");
});

//Mobile drop down menu items
$('#mb-m-trigger').on('click', function(e) {
    $mbDrop.toggleClass("activated-child-mb-m");
});

//MODAL_________________________________________________
// Get the modal
var modal = document.getElementById("genralModal");

// Get the button that opens the modal

var btn = document.getElementById("open-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
$('.open-modal').on('click', function(e) {
  modal.style.display = "flex";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

//SIGUP POLICY CHECK______________________________
//ERORR NO POLICY CHECKED
$('.signup-main-button-fake').on('click', function(e) {
  $signForm.addClass("not-allow-pol");
});
//POLICYALLOWED SHOW BUTTON SUBMIT

$('.left-policy-child').on('click', function(e) {
  $signForm.removeClass("not-allow-pol");
  $signForm.toggleClass("policy-checke-yes");
});