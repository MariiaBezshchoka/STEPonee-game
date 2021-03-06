"use strict";

var pjs = new PointJS(1920, 1080, {
  Background: '#fff'
});
var game = pjs.game;
var key = pjs.keyControl;
var k = key.isDown;
var brush = pjs.brush.drawText;
var p = pjs.vector.point;
var mouse = pjs.mouseControl;
var ss = pjs.system;
var WH = game.getWH();
key.initControl();
var width = WH.w;
var height = WH.h;

pjs.system.setSmoothing(true); 
mouse.initControl();
ss.initFullScreen();
if (mouse.isPress('RIGHT') && ss.initFullScreen() == true) ss.exitFullScreen();
var Cam = pjs.camera;
var psC = {
 x: (ss.isFullScreen() == true) ? Cam.getPositionC() : window.screen.width/2, //var point = obj.getPositionC(); 
 y: (ss.isFullScreen() == true) ? Cam.getPositionC() : window.screen.height/2,
};
var timer =0;
var nn = 0;
var nz = 5;
var link = ["0","1","2","3","4","https://youtu.be/kxyOvTpe_gI","https://youtu.be/jD-hLQGdfcY","https://youtu.be/EcIVfes5CkM","https://youtu.be/n8SlTKaAmYo","https://youtu.be/z2KMxSb4GIo","https://youtu.be/qomCKkKcwn4","https://youtu.be/hzzbFTzVSbA","https://youtu.be/X7d6Dt17yHk","https://youtu.be/LlQEKB2H7z4","https://youtu.be/GHJyfokY5Dw","https://youtu.be/wTowEKjDGkU","https://youtu.be/H8kqPkEXP_E","https://youtu.be/kYt8gxlthWs","https://youtu.be/0NihLoLlUaE","https://youtu.be/DZEOt4pQXXk","https://youtu.be/zLrWIgkvoB0","https://youtu.be/rZAkkGtntbQ","https://youtu.be/-2X-pL06628","https://youtu.be/AQt4K08L_m8","https://youtu.be/FQRnJvbLTAo","https://youtu.be/WvBB06_QGqg","https://youtu.be/hKN3Mt0-hjk","https://youtu.be/2WLtAOR5vlE","https://youtu.be/2EjxIQXBhlc","https://youtu.be/2EZPimjM9Q8","https://youtu.be/cUAsTQUU3xk","https://youtu.be/WzcjCrmKBqg","https://youtu.be/PSYRbJjIT6U","https://youtu.be/XRq7bl8auzc","https://youtu.be/qdOZZspN7dw","https://youtu.be/_AkDWAIkeSQ","https://youtu.be/57n4dZAPxNY","https://youtu.be/7uxu4Z2HAnA","https://youtu.be/ZEuuKdy-YdQ","https://youtu.be/jeI992mvlEY","https://youtu.be/zRI-1QVfhGo","https://youtu.be/4GaVYO2x2Us","https://youtu.be/t6Bi_0q_17Y","https://youtu.be/oFnpToshtp8","https://youtu.be/_Gb94N1GWA8","https://youtu.be/RGnLdUJbYmQ","https://youtu.be/6nBMo5LJ888","https://youtu.be/7D2v0x8YPJk","https://youtu.be/zFf5__U0uZg","https://youtu.be/EhrFmgeqo6k","https://youtu.be/jjCBYlzwaY8","https://youtu.be/sz2Dmo1_BjM","https://youtu.be/DOBjwlfIZdE","https://youtu.be/dYQr7NfefkA","https://youtu.be/yY13X0BKaUw","https://youtu.be/PjRRR94WbOE","https://youtu.be/MvqB6JsRbsc","https://youtu.be/D_6QmL6rExk","https://youtu.be/M9pADzWga1c","https://youtu.be/2cTZTqBU1Rc","https://youtu.be/ZuQCFhGtNY4","https://youtu.be/YqAP4M_5XCs","https://youtu.be/B-izrXbgfCI","https://youtu.be/MZ4JGye4dQU","https://youtu.be/2OjCMR8DGLg","https://youtu.be/h41Rrk_6rzs","https://youtu.be/yGO84ZoYXts"];


var txt = ["static/image/01.png", "static/image/02.png", "static/image/03.png", "static/image/04.png", "static/image/05.png", "static/image/06.png", "static/image/07.png", "static/image/08.png", "static/image/09.png", "static/image/10.png", "static/image/11.png", "static/image/12.png", "static/image/13.png", "static/image/14.png", "static/image/15.png", "static/image/16.png", "static/image/17.png", "static/image/18.png", "static/image/19.png", "static/image/20.png", "static/image/21.png", "static/image/22.png", "static/image/23.png", "static/image/24.png", "static/image/25.png", "static/image/26.png", "static/image/27.png", "static/image/28.png", "static/image/29.png", "static/image/30.png", "static/image/31.png", "static/image/32.png", "static/image/33.png", "static/image/34.png", "static/image/35.png", "static/image/36.png", "static/image/37.png", "static/image/38.png", "static/image/39.png", "static/image/40.png", "static/image/41.png", "static/image/42.png", "static/image/43.png", "static/image/44.png", "static/image/45.png", "static/image/46.png", "static/image/47.png", "static/image/48.png", "static/image/49.png", "static/image/50.png", "static/image/51.png", "static/image/52.png", "static/image/53.png", "static/image/54.png", "static/image/55.png", "static/image/56.png", "static/image/57.png", "static/image/58.png", "static/image/59.png", "static/image/60.png", "static/image/61.png", "static/image/62.png" ];
var numb_1_35 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35', '36', '37'];

var back = game.newBackgroundObject({
  x: 0,
  y: 0,
  w: 1980,
  h: 1080,
  countX: 1,
  countY: 1,
  file: "static/image/fon.png"
});

var back1 = game.newBackgroundObject({
  x: 0,
  y: 0,
  w: 1980,
  h: 1080,
  countX: 1,
  countY: 1,
  file: "static/image/fon1.png"
});
var button = game.newImageObject({
  file: "static/image/button.png",
  x: psC.x + 200, //width - WH.h / 2 + 200,
  y: psC.y - 50,//height - WH.w / 2 - 50,
  w: 200,
  h: 200 //scale : 0.5, // ?????????????????? ???????????????? ?? 2 ????????, ???????? ???? ???????????? ???????????? ?? ????????????

});
var button1 = game.newImageObject({
  x: width - WH.h / 2 + 200,
  y: height - WH.w / 2 - 50,
  w: 200,
  h: 200,
  file: "static/image/button1.png",
  alpha: 0 //scale : 0.5, // ?????????????????? ???????????????? ?? 2 ????????, ???????? ???? ???????????? ???????????? ?? ????????????

});
var field = game.newImageObject({
  file: "static/image/field.png",
  x: 0,//psC.x, 
  y: 0,//psC.y,
  w: 1300, 
  h: 930,
  shadowColor: "#333333",
  shadowBlur: 5,
  alpha: 0,
 // scale: 1, // ?????????????????? ???????????????? ?? 2 ????????, ???????? ???? ???????????? ???????????? ?? ????????????

}); //???????? ?????????? e7fbff

field.x = psC.x - field.w/2 - 50;
field.y = psC.y - field.h/2;

var field_smoke = game.newImageObject({
  file: "static/image/field_smoke.png",
  x: field.x,// ?????? ???????? 671,
  y: field.y,// ?????? ???????? 398.5,
  // w : 200, 
  //h : 200,
  shadowColor: "#333333",
  shadowBlur: 5,
  alpha: 0,
  scale: 1 // ?????????????????? ???????????????? ?? 2 ????????, ???????? ???? ???????????? ???????????? ?? ????????????

});

var field_smoke_back = game.newBackgroundObject({
  x: 0,
  y: 0,
  w: 1980,
  h: 1080,
  countX: 1,
  countY: 1,
  file: "static/image/field_smoke_back.png"
});

var s = 180,s2 = 180,card = [];
for (var file = 0; file < 60; file++) {
  for (var x = 0; x < 10; x++) {
    for (var y = 0; y < 6; y++) {
      card.push(game.newImageObject({
        file: txt[file++],
        x: back1.x + 50 + s * x, // 60 + s * x
        y: back1.y + 10 + s2 * y,
        w: s - 15,
        h: s2 - 15,
        alpha: 0,
        box: {
          offset: {
            x: -5,
            y: -5
          },
          size: {
            w: -10,
            h: -10
          }}
      }));
    }
  }
}

;
var s = 180,s2 = 180,logo = [];
for (var x = 0; x < 10; x++) {
  for (var y = 0; y < 6; y++) {
    
    logo.push(game.newImageObject({
      file: "static/image/LOGO.png",
      x: back1.x + 50 + s * x, // 60 + s * x
      y: back1.y + 10 + s2 * y,
      w: s - 15,
      h: s2 - 15,
      alpha: 0,
      box: {
        offset: {
          x: -5,
          y: -5
        },
        size: {
          w: -10,
          h: -10
        }
      } //scale : 0.5, // ?????????????????? ???????????????? ?? 2 ????????, ???????? ???? ???????????? ???????????? ?? ????????????

    }));
  }
}

;
var s = 180,s2 = 180,fon3 = [];
for (var x = 0; x < 7; x++) {
  for (var y = 0; y < 5; y++) {
    fon3.push(game.newRectObject({
      x: (field.x + 25) + s * x, //292 + s * x
      y: (field.y + 20) + s2 * y,
      w: s - 10,
      h: s2 - 10,
      fillColor: 0,
      shadowColor: 0,
      strokeColor: "#322b26",
      strokeWidth: 3,
      shadowBlur: 5,
      alpha: 0,
      box: {
        offset: {
          x: -110,
          y: -110
        },
        size: {
          w: 0,
          h: 0
        }
      }
    }));
  }
};

var s = 180,s2 = 180,numb = [];
for (var file = 0; file < 36; file++) {
  for (var x = 0; x < 7; x++) {
    for (var y = 0; y < 5; y++) {	
    numb.push(game.newTextObject(   { 
     x: (field.x + 35) + s * x, //292 + s * x
     y: (field.y + 30) + s2 * y, 
     text : numb_1_35[file++], 
     size : 90, 
     padding : 15, 
     color : "#ffef3e", 
     strokeColor : "#000000", 
     strokeWidth : 0, 
     strokeColorText : "#000000",
     strokeWidthText : 1,
   }))}}};
   
  // numb.splice(33,2);

 //var music = pjs.wAudio.newAudio("audio/Eric_Nam_-_I_Don't_Know_You_Anymore.mp3", 0.5);
// music.play();

var alp = 0.0005;
var alp1 = 0.05;
var p1 = p(1650, 825);
var p2 = p(800, 405);
var p3 = p(292, 90);
var x1 = 17;
var y1 = 15;
var x2 = 22;
var y2 = 18;
var koloda = game.newBaseObject(   { 
     x : 1670, 
     y : 845, 
     w : 10, 
     h : 10,
     alpha : 0, 
     box : {
      offset: {
        x: 0,
        y: 0
      },
      size: {
        w: 0,
        h: 0
      }
     }
   });

var the_first = () => {

 if (timer>=0 && timer<20 && card[59].alpha<1) {
  timer++;
  for (var i in card) {
    if (card[i].alpha<1 && timer==10) {
    timer=0;
    do {card[i].alpha += alp} while (card[i].alpha<1);
    if (card[59].alpha==1) timer=0;
      
  }}}
};
var the_first_1 = function(){
  if (timer>=0 && timer<20 && card[59].alpha>0) {
    timer++;
    for (var i in card) {
      if (card[i].alpha>0 && timer==10) {
        timer=0;
      do {card[i].alpha -= alp1; logo[i].alpha += alp} while (card[i].alpha>0);
      card[i].alpha=0;
      logo[i].alpha=1;
      
    }}}

  if (card[59].alpha==0 && card[0].x<1640 && card[0].y<820) {
    for (var i in card) {   
      card[i].moveTo(p1, x1, y1); 
      logo[i].moveTo(p1, x1, y1);
    
  if (card[i].isIntersect(koloda) == true){
  card[i].setPosition(p1);
  logo[i].setPosition(p1);
}
  }

}};

var the_first_2 = () => {
  if (logo[0].isStaticIntersect(fon3[0].getStaticBox()) !== true) {
  for (var i in card, fon3) {
    card[i].moveTo(p(fon3[i].x, fon3[i].y), x1, y1); 
    logo[i].moveTo(p(fon3[i].x, fon3[i].y), x1, y1);

    if (logo[i].isStaticIntersect(fon3[i].getStaticBox()) == true) {
      card[i].setPosition(p(fon3[i].x, fon3[i].y));
      logo[i].setPosition(p(fon3[i].x, fon3[i].y))
    }}

  }
}



var the_second = function(){
  for (var i in logo) {
    if (logo[i].x==1650 && logo[i].y==825) {
    do {logo[i].alpha -= alp} while (logo[i].alpha>0);
    logo[i].alpha=0;
  }}
};


game.newLoop('start', function () {
  if(ss.isFullScreen()==true){
  
    if (mouse.isPeekObject('LEFT', button)) {
      button1.alpha = 1;
      game.setLoop('myGame');
    }; 
  if (mouse.isPress('RIGHT') && ss.isFullScreen()==true) ss.exitFullScreen();
  if (mouse.isPress('RIGHT') && ss.isFullScreen()==false) ss.initFullScreen();
  
  };
  var wh = game.getWH();
  var WIDTH = wh.w;
  var HEIGHT = wh.h;
  if (WIDTH != width) width = wh.w;
  if (HEIGHT != height) height = wh.h;
  button.setPositionS(p(width - wh.w / 2 + 350, height - wh.h / 2 ));
  button1.setPositionS(p(width - wh.w / 2 + 350, height - wh.h / 2 )); //texlogo[0].setPositionS(p(width-wh.w/2-100, height-wh.h/2-50));
  //mouse.isPeekObject( "LEFT", button)

// else {button1.visible = false};
  //texlogo[0].draw();

  back.draw();
  button.draw();
  button1.draw();
}); // game.newLoop('start', function () {

game.setLoop('start');
game.newLoop('myGame', function () {


  if(ss.isFullScreen()==true){
    
  
    the_first();

  if (mouse.isPress('RIGHT') && ss.isFullScreen()==true) ss.exitFullScreen();
  if (mouse.isPress('RIGHT') && ss.isFullScreen()==false) ss.initFullScreen();
  
  };

  back1.draw(); 

  for (var i in card) {
    card[i].draw()} ;

  for (var i in logo) {
    logo[i].draw()};

  if (key.isPress('SPACE') && card[59].alpha >= 1) {
    game.setLoop('myGame1');
  }
}); //game.newLoop('myGame', function

game.newLoop('myGame1', function () {
  
  if (ss.isFullScreen()==true){
    
    the_first_1();

    if (key.isPress('SPACE') && card[0].isIntersect(koloda) == true) {
      game.setLoop('myGame2');
    }
  
  if (mouse.isPress('RIGHT') && ss.isFullScreen()==true) ss.exitFullScreen();
  if (mouse.isPress('RIGHT') && ss.isFullScreen()==false) ss.initFullScreen();
  
  };


  back1.draw();

  for (var i in card) {
    card[i].draw();
  };

  for (var i in logo) {
    logo[i].draw();
  };
  koloda.draw();

}); //game.newLoop('myGame', function

game.newLoop('myGame2', function () {
  if(ss.isFullScreen()==true){  
    


  if (field.alpha < 1) {
    field.alpha += 0.05;
    field_smoke.alpha +=0.05;
    field_smoke_back.alpha +=0.05;
    fon3.forEach(function (item) {
      item.alpha += 0.05;
    });

    if (field.alpha >= 1) {
      card.pop();
      pjs.math.randomFY(card);
    }
  }

  if (field.alpha >= 1 && key.isPress('SPACE')) {
    game.setLoop('myGame3');
  }

  
  if (mouse.isPress('RIGHT') && ss.isFullScreen()==true) ss.exitFullScreen();
  if (mouse.isPress('RIGHT') && ss.isFullScreen()==false) ss.initFullScreen();
  
  };

  back1.draw();
  field_smoke_back.draw(); field.draw();

  for (var i in card) {
    card[i].draw();
  };

  for (var i in logo) {
    logo[i].draw();
  };

  for (var i in fon3) {
    fon3[i].draw();
  };
  
  field_smoke.draw();

});
game.newLoop('myGame3', function () {

  if(ss.isFullScreen()==true){
    
  if (field.alpha >= 1) {

    the_first_2();

    if (field.alpha > 1 && card[0].isIntersect(fon3[0].getStaticBox()) == true)   {
    for (var i in numb) {
      numb[i].draw();
    }};

      if (logo[0].isStaticIntersect(fon3[0].getStaticBox()) == true) {
        the_second();
        game.setLoop('myGame4');
      }
    }
  

  if (mouse.isPress('RIGHT') && ss.isFullScreen()==true) ss.exitFullScreen();
  if (mouse.isPress('RIGHT') && ss.isFullScreen()==false) ss.initFullScreen();
  
  };


  back1.draw();
  field_smoke_back.draw(); field.draw();
  
  for (var i in fon3) {
    fon3[i].draw();
  };
  field_smoke.draw();

  for (var i in card) {
    card[i].draw();
  };

  for (var i in logo) {
    logo[i].draw();
  };


});

game.newLoop('myGame4', function () {
  if(ss.isFullScreen()==true){

  if (mouse.isPeekObject("LEFT", logo[0])) {
    nn=0; 
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[1])) {
    nn=1; 
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[2])) {
    nn=2; 
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[3])) {
    nn=3; 
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[4])) {
    nn=4; 
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[5])) {
    nn=5; 
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[6])) {
    nn=6; 
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[7])) {
    nn=7; 
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[8])) {
    nn=8;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[9])) {
    nn=9;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[10])) {
    nn=10;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[11])) {
    nn=11;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[12])) {
    nn=12;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[13])) {
    nn=13;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[14])) {
    nn=14;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[15])) {
    nn=15;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[16])) {
    nn=16;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[17])) {
    nn=17;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[18])) {
    nn=18;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[19])) {
    nn=19;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[20])) {
    nn=20;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[21])) {
    nn=21;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[22])) {
    nn=22;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[23])) {
    nn=23;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[24])) {
    nn=24;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[25])) {
    nn=25;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[26])) {
    nn=26;
    game.setLoop('doska');
  }

  if (mouse.isPeekObject("LEFT", logo[27])) {
    nn=27;
    game.setLoop('doska');
  }
  if (mouse.isPeekObject("LEFT", logo[28])) {
    nn=28; 
    game.setLoop('doska');

  }
  if (mouse.isPeekObject("LEFT", logo[29])) {
    nn=29; 
    game.setLoop('doska');

  }
  if (mouse.isPeekObject("LEFT", logo[30])) {
    nn=30; 
    game.setLoop('doska');

  }
  if (mouse.isPeekObject("LEFT", logo[31])) {
    nn=31; 
    game.setLoop('doska');

  }
  if (mouse.isPeekObject("LEFT", logo[32])) {
    nn=32; 
    game.setLoop('doska');

  }
  if (mouse.isPeekObject("LEFT", logo[33])) {
    nn=33; 
    game.setLoop('doska');

  }
  if (mouse.isPeekObject("LEFT", logo[34])) {
    nn=34; 
    game.setLoop('doska');

  }


  if (mouse.isPress('RIGHT') && ss.isFullScreen()==true) ss.exitFullScreen();
  if (mouse.isPress('RIGHT') && ss.isFullScreen()==false) ss.initFullScreen();
  
  };

  back1.draw();
  field_smoke_back.draw(); field.draw(); 

  for (var i in fon3) {
    fon3[i].draw();
  };
  field_smoke.draw();

  for (var i in card) {
    card[i].draw();
  };

  for (var i in logo) {
    logo[i].draw();
  };

  for (var i in numb) {
    numb[i].draw();
  };
 
});

game.newLoop("doska", function(){
  if(ss.isFullScreen()==true){
  koloda.x=850; 
  koloda.y=480;
  numb[nn].alpha=0;  

if(logo[nn].isIntersect(koloda)==false && card[nn].w <256 && card[nn].x<1600){

  logo[nn].moveTo(p2, x1, y1); 
  card[nn].moveTo(p2, x1, y1); 
 // Cam.scale(+alp1,+alp1)
}
if(logo[nn].isIntersect(koloda)==true){
  logo[nn].setPosition(p2);
  card[nn].setPosition(p2);
  card[nn].w = 256; 
  card[nn].h = 256;
  logo[nn].w = 256;
  logo[nn].h = 256; 
 // Cam.scale(2,2)

}

if (mouse.isPeekStatic("LEFT", card[nn].getStaticBox()) && card[nn].alpha == 1 ) {
 // card[nn].setPosition(p(1700, 14+nn));
 // card[nn].w = 100;
 // card[nn].h = 100; 
 card[nn].w=165; card[nn].h=165;
 card[nn].setPosition(fon3[nn].getPosition());

  game.setLoop('myGame4');
}

if (mouse.isPeekStatic("LEFT", logo[nn].getStaticBox()) && logo[nn].visible==true && card[nn].w==256) {
  logo[nn].visible=false;
  card[nn].alpha=1
  logo[nn].setPosition(p(1700, 14+nn));
} 
if (mouse.isPeekStatic("MIDDLE", card[nn].getStaticBox()) && card[nn].alpha==1){
  nz=card[nn].getID();
  window.open(link[nz]);
}
}
if (mouse.isPress('RIGHT') && ss.isFullScreen()==true) ss.exitFullScreen();
if (mouse.isPress('RIGHT') && ss.isFullScreen()==false) ss.initFullScreen();



  back1.draw();
  field_smoke_back.draw(); field.draw();
  
  for (var i in fon3) {
    fon3[i].draw();
  };
  field_smoke.draw();

  for (var i in card) {
    card[i].draw();
  };

  for (var i in logo) {
    logo[i].draw();
  };

  for (var i in numb) {
    numb[i].draw();
  };
  card[nn].draw();
  logo[nn].draw();
});

game.start();