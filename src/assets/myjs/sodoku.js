

const easy = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const medium = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const hard = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];

  var timer;
  var timeRemaining;
  var lives;
  var selectedNum;
  var selectedTile;
  var diableSelect;
  var score;

  

  function startGame(){
  
    for (let i = 0; i < id("number-container").children.length; i++){
        id("number-container").children[i].addEventListener("click", function(){
            //If selecting is not disabled
            if (!diableSelect ) {
                if(this.classList.contains("selected")){
                    this.classList.remove("selected");
                    selectedNum = null;

                }else{
                    //deselect all other numbers
                    for(let i = 0; i < 9 ; i++){
                        id("number-container").children[i].classList.remove("selected");
                    }
                    this.classList.add("selected");
                    selectedNum = this;
                    updateMove();
                }
            }

        });
    }
      //choose board difficulty
      let board;
      if (id("diff-1").checked) board = easy[0];
        else if (id("diff-2").checked) board = medium[0];
        else board = hard[0];

        //set lives to 3 and enable selecting numbers
        lives = 10;
        diableSelect = false;
        id("lives").textContent = "Életek száma: 10";

        score = 0;
        id("score").textContent = "Pontszám: 0";


        //creates board based on dificultry

        generateBoard(board);
      
        id("number-container").classList.remove("hidden");
        id("top_list").classList.remove("toplista");
        id("newlist").classList.remove("ujtoplista");

        //Starts the timer
        startTimer();
        //Sets theme based on input
      
 

    }
    function startTimer(){
        //Sets time remaining 
        if (id("time-1").checked) timeRemaining = 5;
        else if(id("time-2").checked) timeRemaining = 300;
        else timeRemaining = 600;
        //Sets timer for first secong
        id ("timer").textContent = timeConversion(timeRemaining);
        //Sets timer to update every second
        timer = setInterval(function(){
            timeRemaining --;
            //if no time remaining eng the game
            if(timeRemaining ===0) endGame();
            
           id("timer").textContent = timeConversion(timeRemaining);

        }, 1000)
       

    }



    function stopTimer(){
        clearTimeout(timer);
    }

    function timeConversion(time){
        let minutes = Math.floor(time/60);
        if(minutes < 10) minutes = "0" + minutes;
        let seconds = time % 60;
        if (seconds < 10) seconds = "0" + seconds;
        return minutes + ":" + seconds;
    }
    function generateBoard(board){
        //Clear previous board
        clearPrevious();

        //let used to incement tile ids
        let idCount = 0;
        
        //creat 81 tiles
        for(let i = 0; i < 81; i++) {
            //creat a new paragraph element
            let tile = document.createElement("a");
           /*  console.log("p") */
            // if the tile is not supposed to be blank
             if (board.charAt(i) != "-") {
            //set tile text to correct number
            tile.textContent = board.charAt(i);
            }   else {
                //Add click event listener to tile
               tile.addEventListener("click", function() {
                //If selecting not disabled 
                if(!diableSelect){
                    //If the tile is already  selected
                    if(tile.classList.contains("selected")){
                        //then remove selection
                        tile.classList.remove("selected");
                        selectedTile = null;
                    }else{
                        //deselect all othet tiles 
                        for(let i = 0; i < 81; i++){
                            qsa(".tile")[i].classList.remove("selected");
                        }
                        tile.classList.add("selected");
                        selectedTile = tile;
                        updateMove();
                    }
                }
               });
               
            } 
            //Assign tile id
            tile.id = idCount;
           
            //Increment for next tile
            idCount ++;
            //Add tile class to all tiles
            tile.classList.add("tile");
            if((tile.id > 17 && tile.id < 27) || (tile.id > 44 & tile.id < 54)) {
                tile.classList.add("bottomBorder");
            }
            if((tile.id + 1) % 9 == 3 || (tile.id + 1) % 9 == 6) {
                tile.classList.add("rightBorder");
            }
            //Add tile to board
            id("board").appendChild(tile); 
           /*  console.log(tile) */
        }
         
    }

    function updateMove() {
        // if a tile and a number is seeceted
        if (selectedTile && selectedNum){
            //Set the tile to the corect number
            selectedTile.textContent = selectedNum.textContent;
          // tf the numer matches the corresponding number in the solution key
          if(checkCorrect(selectedTile)){
              // Deselects the tile
              selectedTile.classList.remove("selected");
              selectedNum.classList.remove("selected");
              //Clear the selected variables
              selectedNum = null;
              selectedTile = null;
              score++;
              id("score").textContent = "Pontszám: " + score;

              //If the number does not match the solution kell

          }else{
              //disable selecting new number for one second 
          diableSelect = true;
          selectedTile.classList.add("incorrect");
          //run in one second
          setTimeout(function(){
//subtract lives by one
lives--;
//IF NO LIVES LEFT END THE GAME
if(lives ===0) 
{endGame();}
else{
    //If lives is not equal to zero
    //Update lives text
    id("lives").textContent = "Életek száma: " + lives;
    diableSelect = false;
}
// Restore tile color and remove selected from both
 selectedTile.classList.remove("incorrect");
 selectedTile.classList.remove("selected");
 selectedNum.classList.remove("selected");
 //Clear the tiles text and clear selected variable
 selectedTile.textContent = "";
 selectedTile = null;
 selectedNum = null;
          }, 1000);
            }
        }
    }
    function checkDone(){
        let tiles = qsa(".tile");
        for(let i = 0; i < tiles.length; i++){
            if(tiles[i].textContent === "") return false;
        }
        return true; 
    } 

    function endGame(){
        //Disable moves and stop the timer
        diableSelect = true;
        clearTimeout(timer);
        //Disaplay won or loss message
        if(lives ===0 || timeRemaining ===0){
            id("lives").textContent = "Vesztettél"
        }else{
            id("lives").textContent = "Nyertél";
        }

        var person = prompt("Adja meg a nevét:", "valaki");
		// eltároljuk localStorage-ben az aktuális játékos pontszámát
		localStorage.setItem(person, Number(score)); 

        fill_toplist(); 

    }


    function checkCorrect(tile){
       //Set solution based on difficulty selectio
       let solution;
       if (id("diff-1").checked) solution = easy[1];
       else if (id("diff-2").checked) solution = medium[1];
       else solution = hard[1];

       //If tile's number is equal to solution's number
       if(solution.charAt(tile.id) === tile.textContent) return true;
       else return false;
    }

    function clearPrevious(){
        //Acces all of the tiles
        let tiles = qsa(".tile");
        //Remove each tile
        for(let i = 0; i < tiles.length; i++){
            tiles[i].remove();
        }
        // if there is a timer clear it
        if (timer) clearTimeout(timer);
        //Deselect any numbers
        for(let i = 0; i < id("number-container").children.length; i++){
            id("number-container").children[i].classList.remove("selected");
        }
        //Clear selected variables
        selectedTile = null;
        selectedNum = null;

    }

    function fill_toplist() {
        // végigmegyünk a localStorage mentett elemein és egy új tömbbe pakoljuk. asszociatív tömb
        var data = [];
        for (var i = 0; i < localStorage.length; i++) {
            data[i] = [localStorage.key(i), parseInt(localStorage.getItem(localStorage.key(i)))];
        }
        // csökkenő sorrendbe rendezzük az elemeket az elért pontszám alapján
        data.sort(function (a, b) {
            return b[1] - a[1];
        });
        // a 10 legtobb pontot elert jatekost jelezzuk ki a listan
        for (let act_data of data.keys()) {
            if (act_data < 10) {
                $('#top_list').append(data[act_data][0] + ' : ' + data[act_data][1] + '<br><hr>');
                
            }

            setTimeout(function(){ history.go(0); },3000); 

        
        } 
   
     
       
    }
  


  function id(id){
      return document.getElementById(id);
  }

  function qs(selector){
      return document.querySelector(selector);

  }

  function qsa(selector){
      return document.querySelectorAll(selector);
  }

  
  

