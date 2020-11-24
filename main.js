
function adminlogin(){
  let adminpassword = "1";
  
  let password = document.getElementById("password").value;
  window.alert(password);
  window.alert(password==adminpassword);
  window.alert(password===adminpassword);
  window.alert(password.equals(password));
  if(password==adminpassword){
    window.alert("hfdjksahkjhslf");
    location.assign("viewrequests.html");
  }
  else{
    location.assign("adminlogin.html");
  }
}

function studentlogin(){
  let studentDummyUser = "bhan";
  let studentDummyPw = "hi";
  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  window.alert(username==studentDummyUser && password==studentDummyPw);
  if(username==studentDummyUser && password==studentDummyPw){
    location.assign("viewrequests.html");
  }
  else{
    location.assign("studentlogin.html");
  }
}
