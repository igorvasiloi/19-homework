btn1.onclick = function() {
    alert("«You clicked First button» using DOM property");
  };
 
  btn2.onclick = function() {
    alert("«You clicked Second button» using DOM property");
  };
 
 btn3.onclick = function() {
   alert("«You clicked Third button» using DOM property");
 };
 
 function btn1Handler() {
   alert("«You clicked First button» using event listener");
 }
 
 document.getElementById("btn1").addEventListener("click", btn1Handler);
 
 
 function btn2Handler() {
   alert("«You clicked Second button» using event listener");
 }
 
 document.getElementById("btn2").addEventListener("click", btn2Handler);
 
  function btn3Handler() {
    alert("«You clicked Third button» using event listener");
  }
 
  document.getElementById("btn3").addEventListener("click", btn3Handler);
  
 
  