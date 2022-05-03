
var uname = document.querySelector('#uname');
var psw = document.querySelector('#psw');

const UIDGenerator = require('uid-generator');

 path = require('path'),
  __parentDir = path.dirname(module.parent.filename);
logins = require(path.join(__dirname +'/../logins.json')); 
tokens = require(path.join(__dirname +'/../validTokens.json')); // path may vary
if(logins[uname] == psw){
var generatedToken = uidgen.generateSync();
  tokens[uname] = generatedToken;
  setCookie("name",uname,1); 
  setCookie(uname,generatedToken,1); 
  fs.writeFileSync(path.join(__dirname +'/../validTokens.json'), JSON.stringify(validTokens));
}



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
//set "user_email" cookie, expires in 30 days
//var userEmail=getCookie("user_email");//"bobthegreat@gmail.com"
