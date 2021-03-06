
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import * as moment from 'moment';
import { Observable, timer } from 'rxjs';
import { SegitsegComponent } from '../segitseg/segitseg.component';

declare const stopIdozito:any; 
declare const startSudoku:any;

@Component({
  
  selector: 'app-jatek',
  templateUrl: './jatek.component.html',
  styleUrls: ['./jatek.component.scss'],  

})


export class JatekComponent  {
  title='Játék';
  show:boolean=false; /* látszik-e a zene */


  callfun(){
  /* ezzel hívom meg a sodoku játékot */
    startSudoku(); 
    
  }
 
  stop(){ /* ezzel lehet az időt megállítani */
     stopIdozito(); 
  }

  visibility(){
    this.show=!this.show
  }

  audioObj = new Audio(); /* ezek a zenére vonatkoznak */
  audioEvents = [ /*  lehetséges események*/
    "ended",
    "error",
    "play",
    "playing",
    "pause",
    "timeupdate",
    "canplay",
    "loadeledmetadata",
    "loadstart"
  ]
  files = [
  {
  url: './assets/zenek/first.mp3',
  name: 'Első zene'
  },

  {
    url: './assets/zenek/second.mp3',
    name: 'Második zene'
    },
    {
    url: './assets/zenek/third.mp3',
    name: 'Harmadik zene'
    }
];

constructor(private rout: Router, private dialog: MatDialog){}

currentTime = '00:00:00';
duration = '00:00:00';
seek = 0;


streamObserver(url:any){


  return new Observable(observe =>{

    this.audioObj.src = url;
    this.audioObj.load();
    this.audioObj.play();
    

   const  handler = (event: Event) =>{ /* kiírja hogy mennyi idő telt el a számból és mennyi osszesen a hossza */
       console.log(event);
       this.seek = this.audioObj.currentTime;
       this.duration = this.timeFormat (this.audioObj.duration);
       this.currentTime = this.timeFormat(this.audioObj.currentTime);

    }
    this.addEvent(this.audioObj, this.audioEvents, handler)
    return() => {
      this.audioObj.pause();
      this.audioObj.currentTime = 0;
      this.removeEvent(this.audioObj, this.audioEvents, handler);

    }

  });

}
addEvent(obj:any, events:any, handler:any){
  events.forEach((event: any) => {
    obj.addEventListener(event, handler)
    
  });

}
removeEvent(obj:any, events:any, handler:any){

  events.forEach((event: any) => {
    obj.removeEventListener(event, handler)
    
  });
}

setSeekTo(ev:any){
  this.audioObj.currentTime = ev.target.value;

}

setVolume(ev:any){ /* hangerő beállítás */
  this.audioObj.volume = ev.target.value;
  console.log(ev.target.value);
}

openFile(url:any){ /* betöltöm a zenét */
 this.streamObserver(url).subscribe(event =>{

 });

  console.log(url)
 
}
ngOnInit(){
  this.allj();
  this.stop();
  
  

}
  ngOnDestroy(){ 
    this.allj();
    this.stop();
    
    
  } 

  play(){ /* elindítás */
    this.audioObj.play();
    console.log('clicked play button')
    

  }
  pause(){ /* szünet */
    this.audioObj.pause();
    console.log('clicked pause button')

  }

  
  allj(){ /* leállítás */
    this.audioObj.pause();
    this.audioObj.currentTime = 0;
    console.log('clicked stop button')

  }


  timeFormat(time:any, format="HH:mm:ss"){ /* ahhoz, hogy ez müködni tudjon telepíteni kellett a momentet npm isntallal */
    const momentTime = time *1000;
    return moment.utc(momentTime).format(format);

  }


  openSegitseg(): void {
    const dialogReferenc = this.dialog.open(SegitsegComponent, {});
    // tslint:disable-next-line: deprecation
    /* dialogReferenc.afterClosed().subscribe((informacio: Informacio) => {
      console.log(informacio);
      if (informacio?.title) {
        this.service.add('informaciok', informacio);
      }
    }, err => {
      console.warn(err);
    }); */
  }

  



 
  }
  


  
