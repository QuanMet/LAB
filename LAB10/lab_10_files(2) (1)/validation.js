// Validate form data using jQuery
function validate() {
  var sid = $("#sid").val();
  var pwd1 = $("#pwd1").val();
  var pwd2 = $("#pwd2").val();
  var uname = $("#uname").val();
  var genm = $("#genm").prop("checked");
  var genf = $("#genf").prop("checked");

  var errMsg = ""; /* store error messages */
  var result = true; /* assumes no errors */
  var pattern = /^[a-zA-Z ]+$/; /* regex for letters and spaces only */

  /* Rule 1: Check if all required fields are entered */
  if (sid == "") {
    errMsg += "<li>User ID cannot be empty.</li>";
  }
  if (pwd1 == "") {
    errMsg += "<li>Password cannot be empty.</li>";
  }
  if (pwd2 == "") {
    errMsg += "<li>Retype password cannot be empty.</li>";
  }
  if (uname == "") {
    errMsg += "<li>User name cannot be empty.</li>";
  }
  if (!genm && !genf) {
    errMsg += "<li>A gender must be selected.</li>";
  }

  /* Rule 2: Check if the user ID contains an '@' symbol */
  if (sid.indexOf('@') == -1) {
    errMsg += "<li>User ID must contain an '@' symbol.</li>";
  }

  /* Rule 3: Check if password and retype password are the same */
  if (pwd1 != pwd2) {
    errMsg += "<li>Passwords do not match.</li>";
  }

  /* Rule 4: Check if user name contains only letters and spaces */
  if (!uname.match(pattern)) {
    errMsg += "<li>User name contains symbols.</li>";
  }

  /* Display error message if any errors detected */
  if (errMsg != "") {
    errMsg = "<div id='scrnOverlay'></div>"
      + "<section id='errWin' class='window'><ul>"
      + errMsg
      + "</ul><a href='#' id='errBtn' class='button'>Close</a></section>";

    $("body").after(errMsg);
    var numOfItems = ($("#errWin li").length + 6); // Calculate the height of the error window
    $("#scrnOverlay").css('visibility', 'visible');
    $("#errWin").css('height', numOfItems + 'em');
    $("#errWin").css('margin-top', (-numOfItems / 2) + 'em');
    $("#errWin").show();

    $("#errBtn").click(function() {
      $("#scrnOverlay").remove();
      $("#errWin").remove();
    });

    result = false;
  }

  return result;
}

// Toggle collapse/expand effect for sections
function toggle() {
  $(this).parent().next().slideToggle(); /* Toggle the section visibility */
  if ($(this).html() == "[-]") {
    $(this).html("[+]"); /* Change symbol */
  } else {
    $(this).html("[-]");
  }
}

// Initialize event listeners
$(document).ready(function() {
  $(".collapse").click(toggle); // Link collapse button with toggle function
  $("#regform").submit(validate); // Link form submit event with validate function
});
