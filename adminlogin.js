var adminpassword = 'ResearchDragon';

function login(){
  var password = document.getElementById("password").value;
  if console.log(password===adminpassword){
    location.assign("viewrequests.html");
  }
}

