/* Variables */
var nameLabel = document.getElementById("name");
var emailLabel = document.getElementById("email");
var numberLabel = document.getElementById("number-label");

/* Submit button Meows WORKING!!!! */
function meowUs() { 
    var meow = document.getElementById("meow");
    meow.play();
    alert("Thank you for meowing us! We will meow back ASAP!"); 
}


/*Name WORKING!!!!*/
function nameCheck () {
  var nameInput = document.getElementById("name").value;
  var letterFilter = /^[A-Za-z]+$/;
  var numberFilter = /^[0-9]+$/ ;
  
  if (nameInput == "") {
      alert("Please enter a name");
      nameLabel.setAttribute("class", "invalid");
                        }
  
      else if (nameInput.match(numberFilter)) {
              alert("This is a number. Not a name.");
              nameLabel.setAttribute("class", "invalid");
                        }
  
      else if (!nameInput.match(letterFilter)) {
               alert("There is a number in your name?!");
                nameLabel.setAttribute("class", "invalid");
               }
      
      else {
      nameLabel.setAttribute("class", "valid"); 
                        }
  
                      }


/*Email WORKING!!!!*/

function emailVerification() {

  var emailInput = document.getElementById("email").value;

  var emailFilter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  if (!emailInput.match(emailFilter)) {
   alert("Please enter an eMeow!");
    emailLabel.setAttribute("class", "invalid"); 
                                      }
      else {
        emailLabel.setAttribute("class", "valid"); 
            }  
  
                            }

/*Number/ Age WORKING!!!!*/

function ageCheck () {
  var ageValue = document.getElementById("number-label").value;
  
  if (isNaN(ageValue)) {
    alert("This isn't an age.");
    numberLabel.setAttribute("class", "invalid");
                       }
  
    else if (ageValue == "") {
        alert("Please enter your cat age.");
        numberLabel.setAttribute("class", "invalid");
             }
    
    else if (ageValue > 38) {
       alert("The oldest living cat, Creme Puff, is 38 years old. You have broken the record for oldest cat! "); 
       numberLabel.setAttribute("class", "valid"); 
                            }   
      else {
       numberLabel.setAttribute("class", "valid"); 
      }
                      }
