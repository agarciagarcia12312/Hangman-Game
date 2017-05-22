
    function hide() {
    	var h = document.getElementById("initial_page");
    	var s = document.getElementById("game_page")
    	h.style.display = 'none';
    	s.style.display = 'block';
    }

    // working on choosing category 
    var z = 0
 // use evenmt listener
    function c1() {
    	hide();
    }
    
    function c2() {
    	hide();
    	z=1;
    
    }
    function c3() {
    	hide();
    	z=2;
    }
    function c4() {
    	hide();
    	z=3;
    }
    
   // function above used to oick category and hide initial page  		
     	
    
// working on choosing category

    var movies = ["the great gatsby", "deadpool", "finding dory", "zootopia", "la la land", "ghostbusters"];
    var tv_shows = ["friends", "how i met your mother", "the ofice", "new girl"];
    var hit_songs = ["hotline bling", "wrecking ball", "closer", "stargirl"];
    var world_monuments = ["the white house", "taj mahal"];
    var mHints = ['assets/images/gatsby.jpg','assets/images/dead.jpg','assets/images/dory.jpg','assets/images/zoo.jpg','assets/images/lala.jpg','assets/images/gb.jpg'];
    var tvHints = ['assets/images/friends.jpg','assets/images/himym.jpg','assets/images/office.jpg','assets/images/new.jpg'];
    var c3Hints = [];
    var c4Hints = [];
    var catergories = [movies, tv_shows, hit_songs, world_monuments];
   
    var hints = [mHints, tvHints, c3Hints. c4Hints]
    
// above: all the vairables for the words and hints
	



    function newGame () {
    	
    	var hint_picked = hints[z];
		var category_picked = catergories[z];
    	var letters = [];

    	var random =  Math.floor(Math.random() * category_picked.length);
    	var computerGuess = category_picked[random];
    	var wordsInside = computerGuess.split("");
     	var placeholder = computerGuess.split("");
     		// var posibilities ["q",""]
   	// below: line of code used to change the initial image to the hint image
     	document.getElementById("hint").src=hint_picked[random];
// below: used to delete the word from the array that way it wont repeat words
     	delete category_picked[random];
     	
     		
     		
     	// below: if the string is a letter it replaces it with a question mark
     		for (i=0; i < placeholder.length; i++) {
     			if (placeholder[i].match(/[a-z]/i)) {
     			placeholder[i]= "?";
     			}
     		} 
  		// below: code used to display the word in the html
     		var showing = document.getElementById("SecretWord");
     		var para = document.createElement("div");
     		var node = document.createTextNode(placeholder.join(""));
     		// para.innerHTML = placeholder.join(" ");
     		// debugger;
     		showing.appendChild(para);
     		para.innerHTML=(node.data);
     		
     		showing.innerHTML=(node.data);
     	 	
		

		var lives = 10;
		var wins = 0;
    	document.getElementById("lives").innerHTML = "you got this! guess a letter to begin";
     		
    	// pressing any key starts the game
    		document.onkeyup = function(event) {
     			var userGuess = event.key; 
				letters.push(userGuess);
				var lettersGuessed =[];
     			var yes = 0
     			document.getElementById("lives").innerHTML = lives;
     		
     	
     		

// below: code cheks to see if the letter gueseed is inside the array for the secret word
     		for (i=0; i < wordsInside.length; i++) {
     			if (userGuess == wordsInside[i] ) {
     // below: bariable used to confirm that there was a letter inside the secret word				
     				yes++; 
       				placeholder[i] = userGuess;
     			}
     		}	
  // below: code used to display alert if letterChoosen is not inside and taking of a life!!!

     		if (yes < 1) {
     			window.alert("letter not inside, try again!");
     			lives--;
     		}

     		if (lives == 3) {
     			window.alert("Warning 3 lives left");
     			// alert("warning!! only 3 lives left!!");
     		}
     		if (lives <= 0) {
     			window.alert("You Loose, press new game to play again")
     		}

     // When the two stings are ewual to eachother its count as a win 		
     		if (JSON.stringify(placeholder)==JSON.stringify(wordsInside)) {
     			var alert = confirm("you win!! pres ok to pick a new word");
				wins++;
				lives = 10;
				letters = [];
     				if (alert == true) {	
     			
     	// below: code used to generate a new word		
     				random =  Math.floor(Math.random() * category_picked.length);
    				computerGuess = category_picked[random];
     				wordsInside = computerGuess.split("");
     				placeholder = computerGuess.split("");
     					for (i=0; i < placeholder.length; i++) {
     						if (placeholder[i].match(/[a-z]/i)) {
     							placeholder[i]= "?";
     						}
     					}
     	// below: geting the apropiate hint for the new word and taking it out of the array
     			document.getElementById("hint").src=hint_picked[random]; 
     			delete category_picked[random];
     			
     			}
     		}	
     			
			
// showing updated word
			var newnode = document.createTextNode(placeholder.join(""));
			showing.appendChild(para);
     		para.innerHTML=(newnode.data);
     		
     		showing.innerHTML=(newnode.data);

     // below: code used to display data on html
     		var data = "<p>Wins:" + wins +"</p>" +
     		"<p>lives:" + lives + "</P>"  +
     		"<p>letters picked:" + letters + "</P>";
     		document.getElementById("lives").innerHTML = data;

   		
        
}
    	}

     		
   

