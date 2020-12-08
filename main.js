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
  let whenin = document.getElementById("whenin").value;
  let hrout = document.getElementById("hrout").value;
  let minout = document.getElementById("minout").value;
  let whenout = document.getElementById("whenout").value;
  let meeting = document.getElementById("meeting").value;
  
  if (whenin == "PM" && hrin != 12){
    hrin = hrin + 12;
  }
  else if (whenin == "AM" && hrin == 12){
    hrin = 0;
  }
  window.alert(hrin);
  if (whenout == "PM" && hrout != 12){
    hrout = hrout + 12;
  }
  else if (whenout == "AM" && hrout == 12){
    hrout = 0;
  }
  window.alert(hrout);
  let hrs = hrout - hrin;
  let mins = minout - minin;
  let minutes = hrs*60 + mins;
  window.alert(minutes);
}
