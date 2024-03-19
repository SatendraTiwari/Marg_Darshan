
function checkdata(){
  const username = document.getElementById("name");
  const massage = document.getElementById("massage");
  
  if(username.value==""){
    alert("please enter the name");
    username.focus();
    return false;
  }
  
  if(massage.value==""){
    alert("Please  user enter a any massage ");
    massage.focus();
    return false;
  }
  
  if (true) {
    alert("thanks for recommending ");
  }
 
  return true;
}


let header = document.getElementById("submit");
header.style.Color="red";
 
let textbox = document.querySelector(".tboxes")
let massage = document.querySelector(".massage")

if (massage.value==""){
  
}