

const konnyu = [
    "6------7------5-2------1---362----81--96-----71--9-4-5-2---651---78----345-------",
    "685329174971485326234761859362574981549618732718293465823946517197852643456137298"
  ];
  const kozepes = [
    "--9-------4----6-758-31----15--4-36-------4-8----9-------75----3-------1--2--3--",
    "619472583243985617587316924158247369926531478734698152891754236365829741472163895"
  ];
  const nehez = [
    "-1-5-------97-42----5----7-5---3---7-6--2-41---8--5---1-4------2-3-----9-7----8--",
    "712583694639714258845269173521436987367928415498175326184697532253841769976352841"
  ];

  var idozito;
  var idoBeallitas;
  var eletek;
  var kivalsztottSzam;
  var kivalsztottLap;
  var tiltSelect;
  var pontszam;

  

  function startSudoku(){
  
    for (let i = 0; i < id("lehetsegesszamok").children.length; i++){
        id("lehetsegesszamok").children[i].addEventListener("click", function(){
            //If selecting is not disabled
            if (!tiltSelect ) {
                if(this.classList.contains("selected")){
                    this.classList.remove("selected");
                   kivalsztottSzam= null;

                }else{
                    //deselect all other numbers
                    for(let i = 0; i < 9 ; i++){
                        id("lehetsegesszamok").children[i].classList.remove("selected");
                    }
                    this.classList.add("selected");
                    kivalsztottSzam = this;
                    updateMove();
                }
            }

        });
    }
     
      let tabla;
      if (id("nehezseg-1").checked) tabla = konnyu[0];
        else if (id("nehezseg-2").checked) tabla = kozepes[0];
        else tabla = nehez[0];

        eletek = 10;
        tiltSelect = false;
        id("eletek").textContent = "Életek száma: 10";

        pontszam = 0;
        id("pontszam").textContent = "Pontszám: 0";


        tablaLetrehozas(tabla);
      
        id("lehetsegesszamok").classList.remove("hidden");
        id("top_lista").classList.remove("toplista");
        id("newlist").classList.remove("ujtoplista");

        //Starts the timer
        startIdozito();
        //Sets theme based on input
      
 

    }
    function startIdozito(){
        if (id("ido-1").checked) idoBeallitas = 5;
        else if(id("ido-2").checked) idoBeallitas = 300;
        else idoBeallitas = 600;
        id ("idozito").textContent = timeConversion(idoBeallitas);
        idozito = setInterval(function(){
            idoBeallitas --;
            if(idoBeallitas ===0) endGame();
        id("idozito").textContent = timeConversion(idoBeallitas);

        }, 1000)
       
    }



    function stopIdozito(){
        clearTimeout(idozito);
    }

    function timeConversion(ido){
        let minutes = Math.floor(ido/60);
        if(minutes < 10) minutes = "0" + minutes;
        let seconds = ido % 60;
        if (seconds < 10) seconds = "0" + seconds;
        return minutes + ":" + seconds;
    }
    function tablaLetrehozas(tabla){
        //Clear previous board
        clearPrevious();

        //let used to incement tile ids
        let idCount = 0;
        
        //creat 81 tiles
        for(let i = 0; i < 81; i++) {
            //creat a new paragraph element
            let lap = document.createElement("a");
           /*  console.log("p") */
            // if the tile is not supposed to be blank
             if (tabla.charAt(i) != "-") {
            //set tile text to correct number
            lap.textContent = tabla.charAt(i);
            }   else {
                //Add click event listener to tile
               lap.addEventListener("click", function() {
                //If selecting not disabled 
                if(!tiltSelect){
                    //If the tile is already  selected
                    if(lap.classList.contains("selected")){
                        //then remove selection
                        lap.classList.remove("selected");
                        kivalsztottLap = null;
                    }else{
                        //deselect all othet tiles 
                        for(let i = 0; i < 81; i++){
                            qsa(".lap")[i].classList.remove("selected");
                        }
                    lap.classList.add("selected");
                    kivalsztottLap = lap;
                        updateMove();
                    }
                }
               });
               
            } 
            //Assign tile id
            lap.id = idCount;
           
            //Increment for next tile
            idCount ++;
            //Add tile class to all tiles
            lap.classList.add("lap");
            if((lap.id > 17 && lap.id < 27) || (lap.id > 44 & lap.id < 54)) {
                lap.classList.add("bottomBorder");
            }
            if((lap.id + 1) % 9 == 3 || (lap.id + 1) % 9 == 6) {
                lap.classList.add("rightBorder");
            }
            //Add tile to board
            id("tabla").appendChild(lap); 
           /*  console.log(tile) */
        }
         
    }

    function updateMove() {
        // if a tile and a number is seeceted
        if (kivalsztottLap && kivalsztottSzam){
            //Set the tile to the corect number
            kivalsztottLap.textContent = kivalsztottSzam.textContent;
          // tf the numer matches the corresponding number in the solution key
          if(checkCorrect(kivalsztottLap)){
              // Deselects the tile
              kivalsztottLap.classList.remove("selected");
              kivalsztottSzam.classList.remove("selected");
              //Clear the selected variables
              kivalsztottSzam = null;
              kivalsztottLap = null;
              pontszam++;
              id("pontszam").textContent = "Pontszám: " + pontszam;

              //If the number does not match the solution kell

          }else{
              //disable selecting new number for one second 
              tiltSelect = true;
              kivalsztottLap.classList.add("incorrect");
          //run in one second
          setTimeout(function(){
//subtract lives by one
eletek--;
//IF NO LIVES LEFT END THE GAME
if(eletek ===0) 
{endGame();}
else{
    //If lives is not equal to zero
    //Update lives text
    id("eletek").textContent = "Életek száma: " + eletek;
    tiltSelect = false;
}
// Restore tile color and remove selected from both
kivalsztottLap.classList.remove("incorrect");
kivalsztottLap.classList.remove("selected");
 kivalsztottSzam.classList.remove("selected");
 //Clear the tiles text and clear selected variable
 kivalsztottLap.textContent = "";
 kivalsztottLap = null;
 kivalsztottSzam = null;
          }, 1000);
            }
        }
    }
    function checkDone(){
        let lapok = qsa(".lap");
        for(let i = 0; i < lapok.length; i++){
            if(lapok[i].textContent === "") return false;
        }
        return true; 
    } 

    function endGame(){
        
        tiltSelect = true;
        clearTimeout(idozito);
     
        if(eletek ===0 || idoBeallitas ===0){
            id("eletek").textContent = "Vesztettél"
        }else{
            id("eletek").textContent = "Nyertél";
        }

        var person = prompt("Adja meg a nevét:", "valaki");
		localStorage.setItem(person, Number(pontszam)); 

        toplista(); 

    }


    function checkCorrect(lap){
       //Set solution based on difficulty selectio
       let solution;
       if (id("nehezseg-1").checked) solution = konnyu[1];
       else if (id("nehezseg-2").checked) solution = kozepes[1];
       else solution = nehez[1];

       //If tile's number is equal to solution's number
       if(solution.charAt(lap.id) === lap.textContent) return true;
       else return false;
    }

    function clearPrevious(){
        //Acces all of the tiles
        let lapok = qsa(".lap");
        //Remove each tile
        for(let i = 0; i < lapok.length; i++){
            lapok[i].remove();
        }
        // if there is a timer clear it
        if (idozito) clearTimeout(idozito);
        //Deselect any numbers
        for(let i = 0; i < id("lehetsegesszamok").children.length; i++){
            id("lehetsegesszamok").children[i].classList.remove("selected");
        }
        //Clear selected variables
        kivalsztottLap = null;
        kivalsztottSzam = null;

    }

    function toplista() {
      var data = [];
        for (var i = 0; i < localStorage.length; i++) {
            data[i] = [localStorage.key(i), parseInt(localStorage.getItem(localStorage.key(i)))];
        }        
        data.sort(function (a, b) {
            return b[1] - a[1];
        });
        for (let act_data of data.keys()) {
            if (act_data < 10) {
                $('#top_lista').append(data[act_data][0] + ' : ' + data[act_data][1] + '<br><hr>');
                
            }
            setTimeout(function(){ history.go(0); },3000); 
        } 
         // végigmegyünk a localStorage mentett elemein és egy új tömbbe pakoljuk. asszociatív tömb
   // csökkenő sorrendbe rendezzük az elemeket az elért pontszám alapján
          // a 10 legtobb pontot elert jatekost jelezzuk ki a listan
     
       
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

  
  

