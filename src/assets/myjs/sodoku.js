

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
  var kivalaszttilt;
  var pontszam;

  

  function startSudoku(){
  
    for (let i = 0; i < id("lehetsegesszamok").children.length; i++){
        id("lehetsegesszamok").children[i].addEventListener("click", function(){
         
            if (!kivalaszttilt ) {
                if(this.classList.contains("kivalasztott")){
                    this.classList.remove("kivalasztott");
                   kivalsztottSzam= null;

                }else{
                   
                    for(let i = 0; i < 9 ; i++){
                        id("lehetsegesszamok").children[i].classList.remove("kivalasztott");
                    }
                    this.classList.add("kivalasztott");
                    kivalsztottSzam = this;
                    frissites();
                }
            }
            //If selecting is not disabled
             //deselect all other numbers

        });
    }
     
      let tabla;
      if (id("nehezseg-1").checked) tabla = konnyu[0];
        else if (id("nehezseg-2").checked) tabla = kozepes[0];
        else tabla = nehez[0];

        eletek = 10;
        kivalaszttilt = false;
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
        if (id("ido-1").checked) idoBeallitas = 180;
        else if(id("ido-2").checked) idoBeallitas = 300;
        else idoBeallitas = 600;
        id ("idozito").textContent = idoKonvertalas(idoBeallitas);
        idozito = setInterval(function(){
            idoBeallitas --;
            if(idoBeallitas ===0) endGame();
        id("idozito").textContent = idoKonvertalas(idoBeallitas);

        }, 1000)
       
        
    }



    function stopIdozito(){
        clearTimeout(idozito);
    }

    function idoKonvertalas(ido){
        let minutes = Math.floor(ido/60);
        if(minutes < 10) minutes = "0" + minutes;
        let seconds = ido % 60;
        if (seconds < 10) seconds = "0" + seconds;
        return minutes + ":" + seconds;
    }
    function tablaLetrehozas(tabla){
        
        osszesTablaTorles();
        let idCount = 0;
        for(let i = 0; i < 81; i++) {
           let lap = document.createElement("a");
           if (tabla.charAt(i) != "-") {
            lap.textContent = tabla.charAt(i);
            }   else {
                 lap.addEventListener("click", function() {
                    if(!kivalaszttilt){
                    if(lap.classList.contains("kivalasztott")){
                       lap.classList.remove("kivalasztott");
                        kivalsztottLap = null;
                    }else{
                       for(let i = 0; i < 81; i++){
                       qsa(".lap")[i].classList.remove("kivalasztott");
                        }
                    lap.classList.add("kivalasztott");
                    kivalsztottLap = lap;
                    frissites();
                    }
                }
               });
               
            } 
            lap.id = idCount;
            idCount ++;
           lap.classList.add("lap");
            if((lap.id > 17 && lap.id < 27) || (lap.id > 44 & lap.id < 54)) {
                lap.classList.add("alsoSzegely");
            }
            if((lap.id + 1) % 9 == 3 || (lap.id + 1) % 9 == 6) {
                lap.classList.add("jobbSzegely");
            }
           id("tabla").appendChild(lap); 
               }
         
    }

    function frissites() {
            if (kivalsztottLap && kivalsztottSzam){
            kivalsztottLap.textContent = kivalsztottSzam.textContent;
          if(checkCorrect(kivalsztottLap)){
              kivalsztottLap.classList.remove("kivalasztott");
              kivalsztottSzam.classList.remove("kivalasztott");
              kivalsztottSzam = null;
              kivalsztottLap = null;
              pontszam++;
              id("pontszam").textContent = "Pontszám: " + pontszam;

            }else{
              kivalaszttilt = true;
              kivalsztottLap.classList.add("incorrect");
             setTimeout(function(){
            eletek--;
            if(eletek ===0) 
    {endGame();}
    else{
    
    id("eletek").textContent = "Életek száma: " + eletek;
    kivalaszttilt = false;
}

    kivalsztottLap.classList.remove("incorrect");
    kivalsztottLap.classList.remove("kivalasztott");
    kivalsztottSzam.classList.remove("kivalasztott");
 
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
        
        kivalaszttilt = true;
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

    function osszesTablaTorles(){
        
        let lapok = qsa(".lap");
        for(let i = 0; i < lapok.length; i++){
            lapok[i].remove();
        }
        if (idozito) clearTimeout(idozito);
        for(let i = 0; i < id("lehetsegesszamok").children.length; i++){
            id("lehetsegesszamok").children[i].classList.remove("kivalasztott");
        }
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

  function qs(selector){össz
      return document.querySelector(selector);

  }

  function qsa(selector){
      return document.querySelectorAll(selector);
  }

  
  

