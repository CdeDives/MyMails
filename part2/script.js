var messagesCount = document.getElementsByTagName('p').length;
console.log(messagesCount);


document.getElementById('count').textContent = messagesCount;


for(var i=0; i<document.getElementsByTagName('p').length; i++) {

    document.getElementsByClassName('trash')[i].addEventListener("click", 
     function(){ 
      console.log("clic détécté");
      this.parentNode.remove();
      messagesCount = document.getElementsByTagName('p').length;
      document.getElementById('count').textContent = messagesCount;
      console.log(messagesCount)
     }
    );
  
  }