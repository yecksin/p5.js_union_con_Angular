import { Component, OnInit } from '@angular/core';
import 'p5/lib/addons/p5';
import 'p5/lib/addons/p5.sound';
declare var p5: any;
var numero=99;
@Component({
  selector: 'app-scope',
  templateUrl: './scope.component.html',
  styleUrls: ['./scope.component.scss']
})
export class ScopeComponent implements OnInit {
  private p5Init: any;
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
  private createCanvas() {
    const doodleArea = (p:any) => {
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
      this.valorpaneo++;

      console.log(numero);
      console.log("hola");
      if (song.isPlaying()) {
        song.pause(); // .play() continuará la reproducción desde la posición definida por .pause()
        p.background(255, 0, 0);
      } else {
        song.play();
        p.background(0, 255, 0);
      }
    };
    // s.setup = () => {
    //   let canvas = s.createCanvas(s.windowWidth - 440, s.windowHeight - 200);
    //   canvas.parent("doodle-area");
    //   s.draw = () => {

    //   };
    //   // s.keyPressed = () => {
    //   // if (s.key === 'c') {
    //   //   window.location.reload();
    //   // }}
    //   ;};
    };
    this.p5Init = new p5(doodleArea);
  }



}
