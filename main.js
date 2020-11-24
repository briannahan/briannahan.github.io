
function adminlogin(){
  let adminpassword = 1;
  
  let password = document.getElementById("password").value;
  window.alert(password);
  if(password==adminpassword){
    location.assign("viewrequests.html");
  }
  else{
    location.assign("viewrequests.html");
  }
}

function studentlogin(){
  let studentDummyUser = "bhan";
  let studentDummyPw = "hi";
  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if(password==studentDummyUser && password==studentDummyPw){
    location.assign("viewrequests.html");
  }
  else{
    location.assign("studentlogin.html");
  }
}
