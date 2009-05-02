function ieDetection() {
	var isIE = /MSIE/i.test(navigator.userAgent);
	if (!isIE) {
		Effect.toggle('authenticate','slide',{duration:.25});
		return false;
	} else {
		window.location.href='http://www.lifewareuniversity.com/lms/login/index.php';
		return false;
	}
}
 
function redirect(url) {
	window.location.href=url;
}
 
// Clear prompt from username field, if required.
  function clearUsernamePrompt() {
    var username = document.getElementById("username");
    if (username.value == "Username") {
      username.value = "";
    }
  }
  // Set the prompt for the username field, if required.
  function setUsernamePrompt() {
    var username = document.getElementById("username");
    if (username.value == "") {
      username.value = "Username";
    }
  }
  // Clear prompt from password field, if required.
  function clearPasswordPrompt() {
    var password = document.getElementById("password");
    password.style.display = "inline";
    password.focus();
    var passwordPrompt = document.getElementById("passwordPrompt");
    passwordPrompt.style.display = "none";
  }
 
  // Set the prompt for the password field, if required.
  function setPasswordPrompt() {
    var password = document.getElementById("password");
    if (password.value == "") {
      password.style.display = "none";
      var passwordPrompt = document.getElementById("passwordPrompt");
      passwordPrompt.style.display = "inline";
    }
  }
 
var NewWindow=null;
 
function openNewWindow(page, title, w, h, l, t, tb, loc, sb, stat, rs, fs, mb) {
if (w == undefined ){w=800;}
if (h == undefined ){h=600;}
if (l == undefined ){l=0;}
if (t == undefined ){t=0;}
if (tb == undefined ){tb="Yes";}
if (loc == undefined ){loc="Yes";}
if (sb == undefined ){sb="Yes";}
if (stat == undefined ){stat="Yes";}
if (rs == undefined ){rs="Yes";}
if (fs == undefined ){fs="Yes";}
if (mb == undefined ){mb="Yes";}
 
NewWindow = window.open(page,title,"width=" + w 
					+ ",height="+ h 
					+ ",left=" + l 
					+ ",top=" + t 
					+ ",toolbar=" + tb 
					+ ",location=" + loc 
					+ ",scrollbars=" + sb 
					+ ",status="+ stat 
					+ ",resizable="+ rs 
					+ ",fullscreen="+ fs 
					+",menubar=" + mb
					);
NewWindow.focus();
}