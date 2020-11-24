var adminpassword = 1;
var studentDummyUser = "bhan";
var studentDummyPw = "hi";

function adminlogin(){
  var password = document.getElementById("password").value;
  if(console.log(password==adminpassword)){
    location.assign("viewrequests.html");
  }
  else{
    location.assign("adminlogin.html");
  }
}

function studentlogin(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if(console.log(password==studentDummyUser)&&console.log(password===studentDummyPw)){
    location.assign("viewrequests.html");
  }
  else{
    location.assign("studentlogin.html");
  }
}
