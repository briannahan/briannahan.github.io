function adminlogin(){
  let adminpassword = "ResearchDragon";
  
  let password = document.getElementById("password").value;
  if(password==adminpassword){
    location.assign("viewrequests.html");
  }
  else{
    window.alert("Incorrect password");
    location.assign("adminlogin.html");
  }
}

function studentlogin(){
  let studentDummyUser = "bhan";
  let studentDummyPw = "hi";
  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  if(username==studentDummyUser && password==studentDummyPw){
    location.assign("enterrequest.html");
  }
  else{
    window.alert("Incorrect username and/or password");
    location.assign("studentlogin.html");
  }
}

function submitRequest(){
  let timein = document.getElementById("timein").value.split(":");
  let timeout = document.getElementById("timeout").value.split(":");
  let meeting = document.getElementById("meeting").checked;
  window.alert(timein);
  window.alert(timeout);
  window.alert(timeout[0]);
  let minutes = 0;
  if (timeout[0]-timein[0]<0){
    window.alert("heyheh");
    minutes = 60*(24+timeout[0]-timein[0]);
    minutes = minutes + timeout[1]-timein[1];
  }
  else{
    window.alert("heyheh");
    minutes = 60*(timeout[0]-timein[0]))+timeout[1]-timein[1];
  }
  window.alert("heyheh");
  window.alert("minutes=" + minutes);
}

