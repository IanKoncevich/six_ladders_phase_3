

var drop_cust_major =  $("#inpt-major-op-cl");//
var drop_cust_school =  $("#inpt-school-op-cl");

var drop_container_major =  $("#drop-down-contianer-m-cut");
var drop_container_school =  $("#drop-down-contianer-m-cut-school");

drop_cust_major.click(function() {
    drop_container_major.toggleClass("hide");
});

drop_cust_school.click(function() {
    drop_container_school.toggleClass("hide");
});