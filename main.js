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
  window.alert("confetti");
  let timein = document.getElementById("timein").value;
  let timeout = document.getElementById("timeout").value;
  let meeting = document.getElementById("meeting").value;
  window.alert("timein=" + timein);
  window.alert("timeout=" + timeout);
  window.alert("meeting=" + meeting);
}

