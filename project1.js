
setInterval(() => {
    var d=new Date();
  document.getElementById('time').innerHTML=
  d.getHours()+":"+
  d.getMinutes()+":"+
  d.getSeconds();
  
}, 1000);

function myFunction() {
    var x = document.getElementById("pwd");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

