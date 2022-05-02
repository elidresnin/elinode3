const form = document.forms[0];


form.addEventListener('submit', (event) => {
    // handle the form data
  user = form.elements['uname'];
password = form.elements['psw'];



  
});





function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
const UIDGenerator = require('uid-generator');
generatedToken = uidgen.generateSync();
 path = require('path'),
  __parentDir = path.dirname(module.parent.filename);

  validTokens = require(path.join(__dirname +'/../validTokens.json')); // path may vary
validTokens[loginUser] = generatedToken;
fs.writeFileSync(path.join(__dirname +'/../validTokens.json'), JSON.stringify(validTokens));
setCookie(loginUser,generatedToken,1); //set "user_email" cookie, expires in 30 days
//var userEmail=getCookie("user_email");//"bobthegreat@gmail.com"
