function addClass() {
    document.body.classList.add("sent");
    console.log("in add class function");

  }
  
  sendLetter.addEventListener("click", addClass);

function removeClass() {
  document.body.classList.remove("sent");
}

function reloadDIV() { 
      $( "#background3" ).load(window.location.href + " #background3" );
    //     console.log("in reload div");
   //      window.location.href += "#background3";
   //      location.reload();
}

