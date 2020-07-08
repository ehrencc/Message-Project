function showText(){
    var userText = document.getElementById("text").value;  

    document.getElementById("posted").innerHTML= userText;
    
    if(userText==="") 
    document.getElementById("alert").style.display="block"; else

    document.getElementById("alert").style.display="none"
    
   };       
