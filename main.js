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
  let hrin = document.getElementById("hrin").value;
  let minin = document.getElementById("minin").value;
  let hrout = document.getElementById("hrout").value;
  let minout = document.getElementById("minout").value;
  let meeting = document.getElementById("meeting").value;
}
