import { Component, OnInit } from '@angular/core';
// import 'p5/lib/p5.js';
// import 'p5/lib/p5';
import 'p5/lib/addons/p5';
import 'p5/lib/addons/p5.sound';
declare var p5: any;
var numero=99;

// import "p5/lib/addons/p5.dom";
@Component({
  selector: 'app-sound-place',
  templateUrl: './sound-place.component.html',
  styleUrls: ['./sound-place.component.scss'],
})
export class SoundPlaceComponent implements OnInit {
  // song:any;
  p5: any;
  valorpaneo=0;
  
  constructor() {
    console.log(numero);
    this.valorpaneo=numero;
  }

  ngOnInit() {
    this.createCanvas();
  }

   createCanvas() {
    this.p5 = new p5(this.sketch);
  }
  hpta(){
    console.log("hola");
  }
   sketch(p: any,hola:number) {
    //  console.log(this.valorpaneo);
    let song: any;
   
    p.preload = () => {
      song = p.loadSound('assets/audio.mp3');
    };

    p.setup = () => {
      p.createCanvas(710, 200);
      song.loop(); // la canción está lista para ser reproducida durante setup() porque fue cargada durante preload()
      p.background(0, 255, 0);
    };

    p.mousePressed = () => {
     
      numero++;
      var element:any = document.getElementById('fieldVar');
      element.value = numero;
      
      // fieldVar
      console.log(numero);
      console.log("hola");
      if (song.isPlaying()) {
        // .isPlaying() retorna una variable booleana
        song.pause(); // .play() continuará la reproducción desde la posición definida por .pause()
        p.background(255, 0, 0);
      } else {
        song.play();
        p.background(0, 255, 0);
      }
    };
  }
}
