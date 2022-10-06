let input = document.querySelector(".textview");

function insert(btnvalue){
   input.value +=  btnvalue;
  }
  
  function equals(){
    input.value  = eval(input.value);
  }
  
  function clean(){
    input.value = "";
  }
  
  function back(){
    input.value = (input.value).slice(0, -1);
  }