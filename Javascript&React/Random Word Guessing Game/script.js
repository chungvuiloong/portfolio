

// Variable for the words

var words = ["cat", "dog", "squirrel", "giraffe", "elephant", "lion", "pikachu", "ice cream", "charmander", "chair", "pen"];
var color = ["yellow", "blue", "red", "purple", "orange", "black", "brown"];
var furniture = ["chair", "table", "sofa", "lamp"]


//this array combines the three arrays into one. concat//
var listWords = words.concat(color, furniture);


//const, let, variables for HTML
const list = document.getElementById('list-data');
let controls = document.querySelector('.controls')
let scoreEle = document.querySelector('#score')
let score = 0


//When windows load, this function starts
window.onload = function windowLoad() {
    

    // website starts generating random words UPDATED with 3 array into 1.
    const answer01 = listWords[Math.floor(Math.random()* (listWords.length))];
    const answer02 = listWords[Math.floor(Math.random()* (listWords.length))];
    const answer03 = listWords[Math.floor(Math.random()* (listWords.length))];
    const answer04 = listWords[Math.floor(Math.random()* (listWords.length))];


    //The correct answer
    const winningAnswer = listWords[Math.floor(Math.random()* (listWords.length))];         

    // Previous codes using word array
    // const answer01 = words[Math.floor(Math.random()* (words.length))];
    // const answer02 = words[Math.floor(Math.random()* (words.length))];
    // const answer03 = words[Math.floor(Math.random()* (words.length))];
    // const answer04 = words[Math.floor(Math.random()* (words.length))];
    
    
   
    // store random words into an array + correct answer
    let answers = [answer01, answer02, answer03, answer04, winningAnswer];
    getTaggedPhotos(winningAnswer);



    // reshuffle element/ function
    function shuffle(answers) {
          for (let i = answers.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = answers[i];
            answers[i] = answers[j];
            answers[j] = temp;
          }
          return answers;
        }

        const result = shuffle(answers);

    // create buttons, then pushes the random words into the buttons
    answers.forEach(function(answer){

        // create button
        let box = document.createElement("button");
        controls.appendChild(box);

        //answer is deprived from let answers

        let newContent01 = document.createTextNode(answer);


        box.appendChild(newContent01);


        // attach event handler
        box.onclick = function(event){
            event.preventDefault();
            //event.target.innerHTML is the selected answer
            let val = event.target.innerHTML
            if (val == winningAnswer) {
                score += 1
                scoreEle.innerHTML = score
                alert("You are the winner!!")

                //refresh the webpage
                window.location.reload(false);

            } else {
                alert("Try again the answer is " + winningAnswer + ".")

                //ori
                //alert("Try again the answer is " + answer01 + ".")
            }
            getTaggedPhotos(winningAnswer)

        }
    })
    
    // api call to tumblr
    function getTaggedPhotos(winningAnswer) {
        fetch('https://api.tumblr.com/v2/tagged?tag=' + winningAnswer + '&api_key=BHkb2keUuHl08VrMfbi4UQdhH0oPtqw2kREqpG9IeDQUKOTfJX')
        .then(function(response) {
            return response.json();
        } )

        .then(function(result) {
            list.innerHTML = '';
            const items = result.response;
            for (let i = 0; i < items.length; i++) {
                const item = items[i];

                if(item.photos != undefined) {
                    const altSizes = item.photos[0].alt_sizes;
                    const imgSrc = altSizes[altSizes.length - 3].url;
                    
                    const img = document.createElement('img');
                    img.src = imgSrc;

                    const li = document.createElement('li');
                    li.appendChild(img);
                    list.appendChild(li);
                }    
            }


        }) 
    }
}   
        
     
            
            


            