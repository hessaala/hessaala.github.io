function addClass() {
    document.body.classList.add("sent");
  }
  
  sendLetter.addEventListener("click", addClass);

function reloadDIV() { 
      $( "#background3" ).load(window.location.href + " #background3" );
  }
