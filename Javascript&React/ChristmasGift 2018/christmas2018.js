// Helsinki time Working
// var countDownDate = new Date("Dec 24, 2018 14:00:00 GMT+0200").getTime();


    // Set the date we're counting down to
    var countDownDate = new Date("Dec 24, 2018 18:00:00 GMT+0200").getTime();

    var loveMusic = document.getElementById("loveMusic");

        // Update the count down every 1 second
        var x = setInterval(function() {

            // Get todays date and time
            var now = new Date().getTime();

            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element
            document.getElementById("display").innerHTML = days + "d " + hours + "h "+ minutes + "m " + seconds + "s ";

            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("loveMusic").play();
                document.getElementById("display").style.visibility = "hidden";
                document.getElementById("content").style.visibility = "visible";

    }
}, 1000);

function disableClick(){
    document.onclick=function(event){
      if (event.button == 2) {
        alert('Right Click Message');
        return false;
      }
    }
  }