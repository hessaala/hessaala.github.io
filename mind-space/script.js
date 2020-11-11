function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);

function reloadDIV() { 
      document.body.classList.remove("sent")
      $( "#background3" ).load(window.location.href + " #background3" );
      document.body.classList.add("sent");
  }
