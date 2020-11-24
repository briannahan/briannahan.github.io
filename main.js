
function adminlogin(){
  var adminpassword = 1;
  var studentDummyUser = "bhan";
  var studentDummyPw = "hi";
  
  var password = document.getElementById("password").value;
  if(password==adminpassword){
    location.assign("viewrequests.html");
  }
  else{
    location.assign("adminlogin.html");
  }
}

function studentlogin(){
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if(password==studentDummyUser && password==studentDummyPw){
    location.assign("viewrequests.html");
  }
  else{
    location.assign("studentlogin.html");
  }
}
