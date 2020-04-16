$(document).ready(function() {

$("#navigation>li").hover(function(){
$(this).children("div").children("span").stop().animate({opacity: "1"},300);
},function(){
$(this).children("div").children("span").stop().animate({opacity: "0"},300);
});

$("#navigation>li").each(function(){
$(this).append("<span></span>");
});

var config = {    
     over: showMenu, // function = onMouseOver callback (REQUIRED)    
     timeout: 100, // number = milliseconds delay before onMouseOut    
     out: hideMenu // function = onMouseOut callback (REQUIRED)    
};
$("#navigation>li").hoverIntent( config );
function showMenu(){$(this).find('.dropdown').first().slideDown('300',"linear");}
function hideMenu(){$(this).find('.dropdown').first().slideUp('300',"linear");}

var config2 = {    
     over: dropdownShow, // function = onMouseOver callback (REQUIRED)    
     timeout: 100, // number = milliseconds delay before onMouseOut    
     out: dropdownHide // function = onMouseOut callback (REQUIRED)    
};
$(".dropdown li").hoverIntent( config2 );
function dropdownShow(){$(this).children('.dropdown').show('300');}
function dropdownHide(){$(this).children('.dropdown').hide('300');}

/* Faculty Login header top */
var config3 = {    
     over: showFacultyLogin, // function = onMouseOver callback (REQUIRED)    
     timeout: 100, // number = milliseconds delay before onMouseOut    
     out: hideFacultyLogin // function = onMouseOut callback (REQUIRED)    
};
$("#top_login_inner").hoverIntent( config3 );
function showFacultyLogin(){
	$("#top_login_form_trigger").addClass("active");
	$("#top_login_form").addClass("shown");
}
function hideFacultyLogin(){
	$("#top_login_form_trigger").removeClass("active");
	$("#top_login_form").removeClass("shown");
}

$("#quicklinks").click(function(){
	if($("#quickwrapper1").hasClass("shown")){
		$("#quickwrapper1").slideUp("normal");
		$("#quickwrapper1").removeClass("shown");
}
else{
		$("#quickwrapper1").slideDown("normal");
		$("#quickwrapper1").addClass("shown");
}
});



$(".hidenextul").click(function(){
	var nextul = $(this).next(".hiddenul");
	if(nextul.hasClass("shown")){
		$(this).children("span").text("click here to see >>");
		nextul.hide();
		nextul.removeClass("shown");
	}
	else{
		$(this).children("span").text("<< click here to hide");
		nextul.show();
		nextul.addClass("shown");
	}
});

$("#navigation>li").wrapInner(function(){
	$el = $(this);
	var newDiv = $("<div />", {
                "class": "nav-li-wrapper",
                "css"  : {
                        "height"  : $el.height(),
                        "width"   : "100%",
                        "position": "relative"
                }
        });
	return newDiv;
});


/* Forcast Lightbox */
$("#forcast2").fancybox({
	'titlePosition'	: 'inside',
	'overlayShow'	: true,
	'transitionIn'	: 'elastic',
	'transitionOut'	: 'elastic'
});

$("#txtsearchtop").focus(function(){
	if($(this).val() == "search..."){ $(this).val(""); }
	$("#navigation").stop().animate({width: "830px"}).css("overflow","auto");
	$(this).stop().animate({width: "120px"});
	$(this).css({color: "#000000", backgroundPosition : "0 -37px"});
	$(this).parent().css("backgroundPosition","right -37px");
	$(this).css();
});
$("#txtsearchtop").blur(function(){
	if($(this).val() == ""){ $(this).val("search..."); }
	$(this).stop().animate({width: "70px"});
	$("#navigation").stop().animate({width: "880px"}).css("overflow","auto");
	$(this).css({color: "#aaaaaa", backgroundPosition : "0 0"});
	$(this).parent().css("backgroundPosition","right 0");
});

$('.close-message').click(function(){
	$(this).parent().fadeOut();
});

$('input[rel~="notempty"]').blur(function(){
notempty($(this));
});
$('select[rel~="selection"]').change(function(){
selection($(this));
});
$('textarea[rel~="notempty"]').blur(function(){
notempty($(this));
});
$('input[rel~="email"]').blur(function(){
email($(this));
});
$('input[rel~="number"]').blur(function(){
number($(this));
});
$('input[rel~="mobile"]').blur(function(){
mobile($(this));
});
$('input[name="enroll"]').blur(function(){
enroll($(this));
});
$('input[rel~="matchpass"]').blur(function(){
password($('input[name="pass1"]'),$('input[name="pass2"]'));
});

$("#regform").submit(function(){
return validate_form();
});

});
var phoneRegex = /^\+\d{12}$/;
var intRegex = /^\d+$/;
var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function enroll(field){
var val = field.val();
var key = val.substring(3,6);
var len = val.length;
if(key!="156" || len !=10 || !intRegex.test(val)) {
field.addClass("errorinput");
return false;
}
else{
field.removeClass("errorinput");
return true;
}
}

function notempty(field){
if(field.val() == "") {
field.addClass("errorinput");
return false;
}
else{
field.removeClass("errorinput");
return true;
}
}
function selection(field){
if(field.val() == "select") {
field.addClass("errorinput");
return false;
}
else{
field.removeClass("errorinput");
return true;
}
}
function password(pass1,pass2){
 if(pass1.val() == "") {
 pass1.addClass("errorinput");
 // $("#regform #pass1info").text('You must enter your Password.').removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else if((pass1.val().length < 6) || (pass1.val().length > 20)){
 pass1.addClass("errorinput");
 // $("#regform #pass1info").text("Password length must be 6 to 20 characters.").removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else if(pass1.val() != pass2.val()){
 pass1.removeClass("errorinput");
 pass2.addClass("errorinput");
 // $("#regform #pass1info").text("ok").removeClass("errorinfo").addClass("okinfo");
 // $("#regform #pass2info").text("Passwords do not match.").removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else{
 // $("#regform #pass1info").text("ok").removeClass("errorinfo").addClass("okinfo");
 // $("#regform #pass2info").text("Passwords match.").removeClass("errorinfo").addClass("okinfo");
 pass1.removeClass("errorinput");
 pass2.removeClass("errorinput");
 return true;
 }
 }
 function email(field){
 if(!emailRegex.test(field.val())) {
 field.addClass("errorinput");
 return false;
 }
 else{
 field.removeClass("errorinput");
 return true;
 }
 }
 function mobile(field){
 if(!phoneRegex.test(field.val())) {
 field.addClass("errorinput");
 return false;
 }
 else{
 field.removeClass("errorinput");
 return true;
 }
 }
function number(field){
 if(!intRegex.test(field.val())) {
 field.addClass("errorinput");
 return false;
 }
 else{
 field.removeClass("errorinput");
 return true;
 }
 }

function validate_form(){
 var flag = true;
 $('input[rel~="notempty"]').each(function(){
 flag = flag & notempty($(this));
 });
 $('select[rel~="selection"]').each(function(){
 flag = flag & selection($(this));
 });
 $('input[rel~="email"]').each(function(){
 flag = flag & email($(this));
 });
 $('input[rel~="number"]').each(function(){
 flag = flag & number($(this));
 });
 $('textarea[rel~="notempty"]').each(function(){
 flag = flag & notempty($(this));
 });
 $('input[rel~="mobile"]').each(function(){
 flag = flag & mobile($(this));
 });
 $('input[name="enroll"]').each(function(){
 flag = flag & enroll($(this));
 });
 flag = flag & password($('input[name="pass1"]'),$('input[name="pass2"]'));
 if(flag) return true;
 else return false;
}
/*
function notempty(var field){
 if(field.val() == "") {
 field.addClass("errorinput");
 field.append("<span class='error'>You must enter your First Name");
 return false;
 }
}

Email
Phone
password match
maxlength

$("div#ajax-message").hide();
 var fname = $("#regform input[name='fname']");
 var lname = $("#regform input[name='lname']");
 var college = $("#regform input[name='college']");
 var year = $("#regform input[name='year']");
 var branch = $("#regform input[name='branch']");
 var email = $("#regform input[name='email']");
 var pass1 = $("#regform input[name='password']");
 var pass2 = $("#regform input[name='retypepassword']");
 var contact = $("#regform input[name='contact']");
 var intRegex = /^\d+$/;
 var emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

 function val_name(){
 if(fname.val() == "") {
 fname.addClass("errorinput");
 $("#regform #nameinfo").text("You must enter your First Name.").removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else if(fname.val().length > 49 ) {
 fname.addClass("errorinput");
 $("#regform #nameinfo").text("First name length exceeds maximum length(50).").removeClass("okinfo").addClass("errorinfo");
 return false;
 }else if(lname.val() == "") {
 fname.removeClass("errorinput");
 lname.addClass("errorinput");
 $("#regform #nameinfo").text("You must enter your Last Name.").removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else if(lname.val().length > 49 ) {
 fname.removeClass("errorinput");
 lname.addClass("errorinput");
 $("#regform #nameinfo").text("Last name length exceeds maximum length(50).").removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else{
 $("#regform #nameinfo").text("ok").removeClass("errorinfo").addClass("okinfo");
 fname.removeClass("errorinput");
 lname.removeClass("errorinput");
 return true;
 }
 }

 function val_college(){
 if(college.val() == "") {
 college.addClass("errorinput");
 $("#regform #collegeinfo").text("Please enter name of your College.").removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else{
 $("#regform #collegeinfo").text("ok").removeClass("errorinfo").addClass("okinfo");
 college.removeClass("errorinput");
 return true;
 }
 }

 function val_year(){
 if(year.val() == "") {
 year.addClass("errorinput");
 $("#regform #yearinfo").text("Please enter your year.").removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else{
 $("#regform #yearinfo").text("ok").removeClass("errorinfo").addClass("okinfo");
 year.removeClass("errorinput");
 return true;
 }
 }

 function val_branch(){
 if(branch.val() == "") {
 branch.addClass("errorinput");
 $("#regform #branchinfo").text("Please enter your branch.").removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else{
 $("#regform #branchinfo").text("ok").removeClass("errorinfo").addClass("okinfo");
 branch.removeClass("errorinput");
 return true;
 }
 }
 function val_email(){
 if(!emailRegex.test(email.val())) {
 email.addClass("errorinput");
 $("#regform #emailinfo").text("Please enter a valid email address.").removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else{
 $("#regform #emailinfo").text("ok").removeClass("errorinfo").addClass("okinfo");
 email.removeClass("errorinput");
 return true;
 }
 }
 function val_contact(){
 if(!intRegex.test(contact.val())) {
 contact.addClass("errorinput");
 $("#regform #contactinfo").text("Only Numbers are allowed. Do not - , + etc.").removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else{
 $("#regform #contactinfo").text("ok").removeClass("errorinfo").addClass("okinfo");
 contact.removeClass("errorinput");
 return true;
 }
 }

 function val_pass(){
 if(pass1.val() == "") {
 pass1.addClass("errorinput");
 $("#regform #pass1info").text('You must enter your Password.').removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else if((pass1.val().length < 6) || (pass1.val().length > 20)){
 pass1.addClass("errorinput");
 $("#regform #pass1info").text("Password length must be 6 to 20 characters.").removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else if(pass1.val() != pass2.val()){
 pass1.removeClass("errorinput");
 pass2.addClass("errorinput");
 $("#regform #pass1info").text("ok").removeClass("errorinfo").addClass("okinfo");
 $("#regform #pass2info").text("Passwords do not match.").removeClass("okinfo").addClass("errorinfo");
 return false;
 }
 else{
 $("#regform #pass1info").text("ok").removeClass("errorinfo").addClass("okinfo");
 $("#regform #pass2info").text("Passwords match.").removeClass("errorinfo").addClass("okinfo");
 pass1.removeClass("errorinput");
 pass2.removeClass("errorinput");
 return true;
 }
 }

fname.blur(val_name);
lname.blur(val_name);
college.blur(val_college);
year.blur(val_year);
branch.blur(val_branch);
pass1.blur(val_pass);
pass2.blur(val_pass);
contact.blur(val_contact);
email.blur(val_email);

email.keyup(val_email);
pass1.keyup(val_pass);
pass2.keyup(val_pass);


$("#regform").submit(function(){
if(val_name() & val_college() & val_year() & val_branch() & val_pass() & val_contact() & val_email())
{
$("#ajax-reg").show();
$.post(
 "php/ajax-reg.php",
 $("#regform").serialize(),
 function(data){
 var phpdata = data.split('|');
 $("#ajax-message").html(phpdata[1]);
 if(phpdata[0] == "success"){
 $("div#ajax-message").removeClass("errorbox").addClass("successbox");
 $("#regform").fadeOut("normal").hide();
 }
 else{
 $("div#ajax-message").removeClass("successbox").addClass("errorbox");
 }
 $("#ajax-message").fadeIn("slow");
 $("#ajax-reg").hide();
 }
 );
}
 return false;
});
 */ 