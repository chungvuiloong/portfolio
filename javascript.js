
/* First function*/
function myFunction() {
    alert("Thank you for meowing us! We will meow back ASAP!");
}

/* UPDATED VERSION OF myFunction */
function meowUs() { 
    var meow = document.getElementById("meow");
    meow.play();
    alert("Thank you for meowing us! We will meow back ASAP!");
}


/* Online Chat */
function meowMessenger() { 
    var meow = document.getElementById("meow");
    meow.play();
    alert("How can I meow you today?");
          }


          // When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
    close[i].onclick = function(){
        var div = this.parentElement;
        div.style.opacity = "0";
        setTimeout(function(){ div.style.display = "none"; }, 600);
    }
}

