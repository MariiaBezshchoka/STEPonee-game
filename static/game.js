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

var socket = io();
socket.on('message', function(data) {
    console.log(data);
});
var WH_x_1090 = WH.h - 1020;
var WH_y_1910 = WH.w - 1910;
mouse.initControl();
ss.initFullScreen();
if (mouse.isPress('RIGHT') && ss.initFullScreen() == true) ss.exitFullScreen();
var psC = pjs.camera.getPositionC(); //var point = obj.getPositionC();
var timer =0;
var nn = 0;
var nz = 5;
var link = ["0","1","2","3","4","https://youtu.be/kxyOvTpe_gI","https://youtu.be/jD-hLQGdfcY","https://youtu.be/EcIVfes5CkM","https://youtu.be/n8SlTKaAmYo","https://youtu.be/z2KMxSb4GIo","https://youtu.be/qomCKkKcwn4","https://youtu.be/hzzbFTzVSbA","https://youtu.be/X7d6Dt17yHk","https://youtu.be/LlQEKB2H7z4","https://youtu.be/GHJyfokY5Dw","https://youtu.be/wTowEKjDGkU","https://youtu.be/H8kqPkEXP_E","https://youtu.be/kYt8gxlthWs","https://youtu.be/0NihLoLlUaE","https://youtu.be/DZEOt4pQXXk","https://youtu.be/zLrWIgkvoB0","https://youtu.be/rZAkkGtntbQ","https://youtu.be/-2X-pL06628","https://youtu.be/AQt4K08L_m8","https://youtu.be/FQRnJvbLTAo","https://youtu.be/WvBB06_QGqg","https://youtu.be/hKN3Mt0-hjk","https://youtu.be/2WLtAOR5vlE","https://youtu.be/2EjxIQXBhlc","https://youtu.be/2EZPimjM9Q8","https://youtu.be/cUAsTQUU3xk","https://youtu.be/WzcjCrmKBqg","https://youtu.be/PSYRbJjIT6U","https://youtu.be/XRq7bl8auzc","https://youtu.be/qdOZZspN7dw","https://youtu.be/_AkDWAIkeSQ","https://youtu.be/57n4dZAPxNY","https://youtu.be/7uxu4Z2HAnA","https://youtu.be/ZEuuKdy-YdQ","https://youtu.be/jeI992mvlEY","https://youtu.be/zRI-1QVfhGo","https://youtu.be/4GaVYO2x2Us","https://youtu.be/t6Bi_0q_17Y","https://youtu.be/oFnpToshtp8","https://youtu.be/_Gb94N1GWA8","https://youtu.be/RGnLdUJbYmQ","https://youtu.be/6nBMo5LJ888","https://youtu.be/7D2v0x8YPJk","https://youtu.be/zFf5__U0uZg","https://youtu.be/EhrFmgeqo6k","https://youtu.be/jjCBYlzwaY8","https://youtu.be/sz2Dmo1_BjM","https://youtu.be/DOBjwlfIZdE","https://youtu.be/dYQr7NfefkA","https://youtu.be/yY13X0BKaUw","https://youtu.be/PjRRR94WbOE","https://youtu.be/MvqB6JsRbsc","https://youtu.be/D_6QmL6rExk","https://youtu.be/M9pADzWga1c","https://youtu.be/2cTZTqBU1Rc","https://youtu.be/ZuQCFhGtNY4","https://youtu.be/YqAP4M_5XCs","https://youtu.be/B-izrXbgfCI","https://youtu.be/MZ4JGye4dQU","https://youtu.be/2OjCMR8DGLg","https://youtu.be/h41Rrk_6rzs","https://youtu.be/yGO84ZoYXts"];


var txt = ["image/01.png", "image/02.png", "image/03.png", "image/04.png", "image/05.png", "image/06.png", "image/07.png", "image/08.png", "image/09.png", "image/10.png", "image/11.png", "image/12.png", "image/13.png", "image/14.png", "image/15.png", "image/16.png", "image/17.png", "image/18.png", "image/19.png", "image/20.png", "image/21.png", "image/22.png", "image/23.png", "image/24.png", "image/25.png", "image/26.png", "image/27.png", "image/28.png", "image/29.png", "image/30.png", "image/31.png", "image/32.png", "image/33.png", "image/34.png", "image/35.png", "image/36.png", "image/37.png", "image/38.png", "image/39.png", "image/40.png", "image/41.png", "image/42.png", "image/43.png", "image/44.png", "image/45.png", "image/46.png", "image/47.png", "image/48.png", "image/49.png", "image/50.png", "image/51.png", "image/52.png", "image/53.png", "image/54.png", "image/55.png", "image/56.png", "image/57.png", "image/58.png", "image/59.png", "image/60.png", "image/61.png", "image/62.png" ];
var numb_1_35 = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35'];

var cI = '#A0FF84'; // рубашка Маша 68d101

var cM = '#85A9FF'; // рубашка Макс 004f86

var cN = '#FFC4C4'; // рубашка Нати fc8e8e

var cO = '#FFE951'; // рубашка Общак ffc208

var cH = '#00234f'; // общая рубашка

var cF = '#FDFFDF'; //фон карточки

var cNatalya = '#C48BB5';
var cAlla = '#90D5D8';
var cCveta = '#A1FFB4';
var cDmitr = '#E15478';
var cEliza = '#A1CDFF';
var cMaksim = '#DCDCDC';
var cMixail = '#FFFF75';
var cLera = '#FFCE8D';
var cVera = '#E8A6FF';

var back = game.newBackgroundObject({
  x: 0,
  y: 0,
  w: 1980,
  h: 1080,
  countX: 1,
  countY: 1,
  file: "image/fon.png"
});

var back1 = game.newBackgroundObject({
  x: 0,
  y: 0,
  w: 1980,
  h: 1080,
  countX: 1,
  countY: 1,
  file: "image/fon1.png"
});
var button = game.newImageObject({
  file: "image/button.png",
  x: psC.x + 200, //width - WH.h / 2 + 200,
  y: psC.y - 50,//height - WH.w / 2 - 50,
  w: 200,
  h: 200 //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота

});
var button1 = game.newImageObject({
  x: width - WH.h / 2 + 200,
  y: height - WH.w / 2 - 50,
  w: 200,
  h: 200,
  file: "image/button1.png",
  alpha: 0 //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота

});
var field = game.newImageObject({
  file: "image/field.png",
  x: psC.x - 695, 
  y: psC.y - 372,
  // w : 200, 
  //h : 200,
  shadowColor: "#333333",
  shadowBlur: 5,
  alpha: 0,
  scale: 1 // уменьшить картинку в 2 раза, если не заданы ширина и высота

}); //цвет канта e7fbff

var field_smoke = game.newImageObject({
  file: "image/field_smoke.png",
  x: psC.x - 695,// для меня 671,
  y: psC.y -  372,// для меня 398.5,
  // w : 200, 
  //h : 200,
  shadowColor: "#333333",
  shadowBlur: 5,
  alpha: 0,
  scale: 1 // уменьшить картинку в 2 раза, если не заданы ширина и высота

});

var field_smoke_back = game.newBackgroundObject({
  x: 0,
  y: 0,
  w: 1980,
  h: 1080,
  countX: 1,
  countY: 1,
  file: "image/field_smoke_back.png"
});

var s = 180,s2 = 180,card = [];
for (var file = 0; file < 60; file++) {
  for (var x = 0; x < 10; x++) {
    for (var y = 0; y < 6; y++) {
      card.push(game.newImageObject({
        file: txt[file++],
        x: WH_x_1090 + s * x, // 60 + s * x
        y: WH_y_1910 + s2 * y,
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
      file: "image/LOGO.png",
      x: WH_x_1090 + s * x, // 60 + s * x
      y: WH_y_1910 + s2 * y,
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
      } //scale : 0.5, // уменьшить картинку в 2 раза, если не заданы ширина и высота

    }));
  }
}

;
var s = 180,s2 = 180,fon3 = [];
for (var x = 0; x < 7; x++) {
  for (var y = 0; y < 5; y++) {
    fon3.push(game.newRectObject({
      x: (WH.h - 788) + s * x, //292 + s * x
      y: (WH.w - 1830) + s2 * y,
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
  for (var y = 0; y < 5; y++) {
    for (var x = 0; x < 7; x++) {	
    numb.push(game.newTextObject(   { 
     x: (WH.h - 788) + s * x, //292 + s * x
     y: (WH.w - 1830) + s2 * y, 
     text : numb_1_35[file++], 
     size : 90, 
     padding : 15, 
     color : "#ffef3e", 
     strokeColor : "#000000", 
     strokeWidth : 0, 
     strokeColorText : "#000000",
     strokeWidthText : 1,
   }))}}};
   
   numb.splice(33,2);

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

var the_first = function(){

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

    if (logo[0].alpha >= 1) {
      card[0].moveTo(p(295, 92), x2, y2);
      logo[0].moveTo(p(295, 92), x2, y2);
    }

    if (logo[0].isStaticIntersect(fon3[0].getStaticBox()) == true) {
      card[0].setPosition(p(295, 92));
      logo[0].setPosition(p(295, 92));
      card[1].moveTo(p(295 + 180, 92), x2, y2);
      logo[1].moveTo(p(295 + 180, 92), x2, y2);
    }

    if (logo[1].isStaticIntersect(fon3[5].getStaticBox()) == true) {
      card[1].setPosition(p(295 + 180, 92));
      logo[1].setPosition(p(295 + 180, 92));
      card[2].moveTo(p(295 + 180 * 2, 92), x2, y2);
      logo[2].moveTo(p(295 + 180 * 2, 92), x2, y2);
    }

    if (logo[2].isStaticIntersect(fon3[10].getStaticBox()) == true) {
      card[2].setPosition(p(295 + 180 * 2, 92), x2, y2);
      logo[2].setPosition(p(295 + 180 * 2, 92), x2, y2);
      card[3].moveTo(p(295 + 180 * 3, 92), x2, y2);
      logo[3].moveTo(p(295 + 180 * 3, 92), x2, y2);
    }

    if (logo[3].isStaticIntersect(fon3[15].getStaticBox()) == true) {
      card[3].setPosition(p(295 + 180 * 3, 92), x2, y2);
      logo[3].setPosition(p(295 + 180 * 3, 92), x2, y2);
      card[4].moveTo(p(295 + 180 * 4, 92), x2, y2);
      logo[4].moveTo(p(295 + 180 * 4, 92), x2, y2);
    }

    if (logo[4].isStaticIntersect(fon3[20].getStaticBox()) == true) {
      card[4].setPosition(p(295 + 180 * 4, 92), x2, y2);
      logo[4].setPosition(p(295 + 180 * 4, 92), x2, y2);
      card[5].moveTo(p(295 + 180 * 5, 92), x2, y2);
      logo[5].moveTo(p(295 + 180 * 5, 92), x2, y2);
    }

    if (logo[5].isStaticIntersect(fon3[25].getStaticBox()) == true) {
      card[5].setPosition(p(295 + 180 * 5, 92), x2, y2);
      logo[5].setPosition(p(295 + 180 * 5, 92), x2, y2);
      card[6].moveTo(p(295 + 180 * 6, 92), x2, y2);
      logo[6].moveTo(p(295 + 180 * 6, 92), x2, y2);
    }

    if (logo[6].isStaticIntersect(fon3[30].getStaticBox()) == true) {
      card[6].setPosition(p(295 + 180 * 6, 92), x2, y2);
      logo[6].setPosition(p(295 + 180 * 6, 92), x2, y2);
      card[7].moveTo(p(295, 92+180), x2, y2);
      logo[7].moveTo(p(295, 92+180), x2, y2);
    }

    if (logo[7].isStaticIntersect(fon3[1].getStaticBox()) == true) {
      card[7].setPosition(p(295, 92+180), x2, y2);
      logo[7].setPosition(p(295, 92+180), x2, y2);
      card[8].moveTo(p(295 + 180, 92+180), x2, y2);
      logo[8].moveTo(p(295 + 180, 92+180), x2, y2);
    }

    if (logo[8].isStaticIntersect(fon3[6].getStaticBox()) == true) {
      card[8].setPosition(p(295 + 180, 92+180), x2, y2);
      logo[8].setPosition(p(295 + 180, 92+180), x2, y2);
      card[9].moveTo(p(295 + 180 * 2, 92+180), x2, y2);
      logo[9].moveTo(p(295 + 180 * 2, 92+180), x2, y2);
    }

    if (logo[9].isStaticIntersect(fon3[11].getStaticBox()) == true) {
      card[9].setPosition(p(295 + 180 * 2, 92+180), x2, y2);
      logo[9].setPosition(p(295 + 180 * 2, 92+180), x2, y2);
      card[10].moveTo(p(295 + 180 * 3, 92+180), x2, y2);
      logo[10].moveTo(p(295 + 180 * 3, 92+180), x2, y2);
    }

    if (logo[10].isStaticIntersect(fon3[16].getStaticBox()) == true) {
      card[10].setPosition(p(295 + 180 * 3, 92+180), x2, y2);
      logo[10].setPosition(p(295 + 180 * 3, 92+180), x2, y2);
      card[11].moveTo(p(295 + 180 * 4, 92+180), x2, y2);
      logo[11].moveTo(p(295 + 180 * 4, 92+180), x2, y2);
   }

    if (logo[11].isStaticIntersect(fon3[21].getStaticBox()) == true) {
      card[11].setPosition(p(295 + 180 * 4, 92+180), x2, y2);
      logo[11].setPosition(p(295 + 180 * 4, 92+180), x2, y2);
      card[12].moveTo(p(295 + 180 * 5, 92+180), x2, y2);
      logo[12].moveTo(p(295 + 180 * 5, 92+180), x2, y2);
    }

    if (logo[12].isStaticIntersect(fon3[26].getStaticBox()) == true) {
      card[12].setPosition(p(295 + 180 * 5, 92+180), x2, y2);
      logo[12].setPosition(p(295 + 180 * 5, 92+180), x2, y2);
      card[13].moveTo(p(295 + 180 * 6, 92+180), x2, y2);
      logo[13].moveTo(p(295 + 180 * 6, 92+180), x2, y2);
    }

    if (logo[13].isStaticIntersect(fon3[31].getStaticBox()) == true) {
      card[13].setPosition(p(295 + 180 * 6, 92+180), x2, y2);
      logo[13].setPosition(p(295 + 180 * 6, 92+180), x2, y2);
      card[14].moveTo(p(295, 92+180 + 180), x2, y2);
      logo[14].moveTo(p(295, 92+180 + 180), x2, y2);
    }

    if (logo[14].isStaticIntersect(fon3[2].getStaticBox()) == true) {
      card[14].setPosition(p(295, 92+180 + 180), x2, y2);
      logo[14].setPosition(p(295, 92+180 + 180), x2, y2);
      card[15].moveTo(p(295 + 180, 92+180 + 180), x2, y2);
      logo[15].moveTo(p(295 + 180, 92+180 + 180), x2, y2);
    }

    if (logo[15].isStaticIntersect(fon3[7].getStaticBox()) == true) {
      card[15].setPosition(p(295 + 180, 92+180 + 180), x2, y2);
      logo[15].setPosition(p(295 + 180, 92+180 + 180), x2, y2);
      card[16].moveTo(p(295 + 180 * 2, 92+180 + 180), x2, y2);
      logo[16].moveTo(p(295 + 180 * 2, 92+180 + 180), x2, y2);
    }

    if (logo[16].isStaticIntersect(fon3[12].getStaticBox()) == true) {
      card[16].setPosition(p(295 + 180 * 2, 92+180 + 180), x2, y2);
      logo[16].setPosition(p(295 + 180 * 2, 92+180 + 180), x2, y2);
      card[17].moveTo(p(295 + 180 * 3, 92+180 + 180), x2, y2);
      logo[17].moveTo(p(295 + 180 * 3, 92+180 + 180), x2, y2);
    }

    if (logo[17].isStaticIntersect(fon3[17].getStaticBox()) == true) {
      card[17].setPosition(p(295 + 180 * 3, 92+180 + 180), x2, y2);
      logo[17].setPosition(p(295 + 180 * 3, 92+180 + 180), x2, y2);
      card[18].moveTo(p(295 + 180 * 4, 92+180 + 180), x2, y2);
      logo[18].moveTo(p(295 + 180 * 4, 92+180 + 180), x2, y2);
    }

    if (logo[18].isStaticIntersect(fon3[22].getStaticBox()) == true) {
      card[18].setPosition(p(295 + 180 * 4, 92+180 + 180), x2, y2);
      logo[18].setPosition(p(295 + 180 * 4, 92+180 + 180), x2, y2);
      card[19].moveTo(p(295 + 180 * 5, 92+180 + 180), x2, y2);
      logo[19].moveTo(p(295 + 180 * 5, 92+180 + 180), x2, y2);
    }

    if (logo[19].isStaticIntersect(fon3[27].getStaticBox()) == true) {
      card[19].setPosition(p(295 + 180 * 5, 92+180 + 180), x2, y2);
      logo[19].setPosition(p(295 + 180 * 5, 92+180 + 180), x2, y2);
      card[20].moveTo(p(295 + 180 * 6, 92+180 + 180), x2, y2);
      logo[20].moveTo(p(295 + 180 * 6, 92+180 + 180), x2, y2);
    }

    if (logo[20].isStaticIntersect(fon3[32].getStaticBox()) == true) {
      card[20].setPosition(p(295 + 180 * 6, 92+180 + 180), x2, y2);
      logo[20].setPosition(p(295 + 180 * 6, 92+180 + 180), x2, y2);
      card[21].moveTo(p(295, 92+180 + 180 * 2), x2, y2);
      logo[21].moveTo(p(295, 92+180 + 180 * 2), x2, y2);
    }

    if (logo[21].isStaticIntersect(fon3[3].getStaticBox()) == true) {
      card[21].setPosition(p(295, 92+180 + 180 * 2), x2, y2);
      logo[21].setPosition(p(295, 92+180 + 180 * 2), x2, y2);
      card[22].moveTo(p(295 + 180, 92+180 + 180 * 2), x2, y2);
      logo[22].moveTo(p(295 + 180, 92+180 + 180 * 2), x2, y2);
    }

    if (logo[22].isStaticIntersect(fon3[8].getStaticBox()) == true) {
      card[22].setPosition(p(295 + 180, 92+180 + 180 * 2), x2, y2);
      logo[22].setPosition(p(295 + 180, 92+180 + 180 * 2), x2, y2);
      card[23].moveTo(p(295 + 180 * 2, 92+180 + 180 * 2), x2, y2);
      logo[23].moveTo(p(295 + 180 * 2, 92+180 + 180 * 2), x2, y2);
    }

    if (logo[23].isStaticIntersect(fon3[13].getStaticBox()) == true) {
      card[23].setPosition(p(295 + 180 * 2, 92+180 + 180 * 2), x2, y2);
      logo[23].setPosition(p(295 + 180 * 2, 92+180 + 180 * 2), x2, y2);
      card[24].moveTo(p(295 + 180 * 3, 92+180 + 180 * 2), x2, y2);
      logo[24].moveTo(p(295 + 180 * 3, 92+180 + 180 * 2), x2, y2);
    }

    if (logo[24].isStaticIntersect(fon3[18].getStaticBox()) == true) {
      card[24].setPosition(p(295 + 180 * 3, 92+180 + 180 * 2), x2, y2);
      logo[24].setPosition(p(295 + 180 * 3, 92+180 + 180 * 2), x2, y2);
      card[25].moveTo(p(295 + 180 * 4, 92+180 + 180 * 2), x2, y2);
      logo[25].moveTo(p(295 + 180 * 4, 92+180 + 180 * 2), x2, y2);
    }

    if (logo[25].isStaticIntersect(fon3[23].getStaticBox()) == true) {
      card[25].setPosition(p(295 + 180 * 4, 92+180 + 180 * 2), x2, y2);
      logo[25].setPosition(p(295 + 180 * 4, 92+180 + 180 * 2), x2, y2);
      card[26].moveTo(p(295 + 180 * 5, 92+180 + 180 * 2), x2, y2);
      logo[26].moveTo(p(295 + 180 * 5, 92+180 + 180 * 2), x2, y2);
    }

    if (logo[26].isStaticIntersect(fon3[28].getStaticBox()) == true) {
      card[26].setPosition(p(295 + 180 * 5, 92+180 + 180 * 2), x2, y2);
      logo[26].setPosition(p(295 + 180 * 5, 92+180 + 180 * 2), x2, y2);
      card[27].moveTo(p(295 + 180 * 6, 92+180 + 180 * 2), x2, y2);
      logo[27].moveTo(p(295 + 180 * 6, 92+180 + 180 * 2), x2, y2);
    }

    if (logo[27].isStaticIntersect(fon3[33].getStaticBox()) == true) {
      card[27].setPosition(p(295 + 180 * 6, 92+180 + 180 * 2), x2, y2);
      logo[27].setPosition(p(295 + 180 * 6, 92+180 + 180 * 2), x2, y2);
      card[28].moveTo(p(295, 92+180 + 180 * 3), x2, y2);
      logo[28].moveTo(p(295, 92+180 + 180 * 3), x2, y2);
    }

    if (logo[28].isStaticIntersect(fon3[4].getStaticBox()) == true) {
      card[28].setPosition(p(295, 92+180 + 180 * 3), x2, y2);
      logo[28].setPosition(p(295, 92+180 + 180 * 3), x2, y2);
      card[29].moveTo(p(295 + 180, 92+180 + 180 * 3), x2, y2);
      logo[29].moveTo(p(295 + 180, 92+180 + 180 * 3), x2, y2);
    }

    if (logo[29].isStaticIntersect(fon3[9].getStaticBox()) == true) {
      card[29].setPosition(p(295 + 180, 92+180 + 180 * 3), x2, y2);
      logo[29].setPosition(p(295 + 180, 92+180 + 180 * 3), x2, y2);
      card[30].moveTo(p(295 + 180*2, 92+180 + 180 * 3), x2, y2);
      logo[30].moveTo(p(295 + 180*2, 92+180 + 180 * 3), x2, y2);
    }

    if (logo[30].isStaticIntersect(fon3[14].getStaticBox()) == true) {
      card[30].setPosition(p(295 + 180*2, 92+180 + 180 * 3), x2, y2);
      logo[30].setPosition(p(295 + 180*2, 92+180 + 180 * 3), x2, y2);
      card[31].moveTo(p(295 + 180*3, 92+180 + 180 * 3), x2, y2);
      logo[31].moveTo(p(295 + 180*3, 92+180 + 180 * 3), x2, y2);
    }

    if (logo[31].isStaticIntersect(fon3[19].getStaticBox()) == true) {
      card[31].setPosition(p(295 + 180*3, 92+180 + 180 * 3), x2, y2);
      logo[31].setPosition(p(295 + 180*3, 92+180 + 180 * 3), x2, y2);
      card[32].moveTo(p(295 + 180*4, 92+180 + 180 * 3), x2, y2);
      logo[32].moveTo(p(295 + 180*4, 92+180 + 180 * 3), x2, y2);
    }

    if (logo[32].isStaticIntersect(fon3[24].getStaticBox()) == true) {
      card[32].setPosition(p(295 + 180*4, 92+180 + 180 * 3), x2, y2);
      logo[32].setPosition(p(295 + 180*4, 92+180 + 180 * 3), x2, y2)
    }

    if (field.alpha > 1 && card[32].x == 655)   {
    for (var i in numb) {
      numb[i].draw();
    }};

      if (logo[32].isStaticIntersect(fon3[24].getStaticBox()) == true) {
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
  card[nn].moveTo(p2, x1, y1)
}
if(logo[nn].isIntersect(koloda)==true){
  logo[nn].setPosition(p2);
  card[nn].setPosition(p2);
  card[nn].w = 256; 
  card[nn].h = 256;
  logo[nn].w = 256;
  logo[nn].h = 256; 

}

if (mouse.isPeekStatic("LEFT", card[nn].getStaticBox()) && card[nn].alpha == 1 ) {
 // card[nn].setPosition(p(1700, 14+nn));
 // card[nn].w = 100;
 // card[nn].h = 100;
 card[nn].w=165; card[nn].h=165;
 if (nn==0) {card[nn].setPosition(p(295, 92))}
 if (nn==1) {card[nn].setPosition(p(295 + 180, 92))}
 if (nn==2) {card[nn].setPosition(p(295 + 180 * 2, 92))}
 if (nn==3) {card[nn].setPosition(p(295 + 180 * 3, 92))}
 if (nn==4) {card[nn].setPosition(p(295 + 180 * 4, 92))}
 if (nn==5) {card[nn].setPosition(p(295 + 180 * 5, 92))}
 if (nn==6) {card[nn].setPosition(p(295 + 180 * 6, 92))}
 if (nn==7) {card[nn].setPosition(p(295, 92 + 180))}
 if (nn==8) {card[nn].setPosition(p(295 + 180, 92 + 180))}
 if (nn==9) {card[nn].setPosition(p(295 + 180 * 2, 92 + 180))}
 if (nn==10) {card[nn].setPosition(p(295 + 180 * 3, 92 + 180))}
 if (nn==11) {card[nn].setPosition(p(295 + 180 * 4, 92 + 180))}
 if (nn==12) {card[nn].setPosition(p(295 + 180 * 5, 92 + 180))}
 if (nn==13) {card[nn].setPosition(p(295 + 180 * 6, 92 + 180))}
 if (nn==14) {card[nn].setPosition(p(295, 92 + 180 * 2))}
 if (nn==15) {card[nn].setPosition(p(295 + 180, 92 + 180 * 2))}
 if (nn==16) {card[nn].setPosition(p(295 + 180 * 2, 92 + 180 * 2))}
 if (nn==17) {card[nn].setPosition(p(295 + 180 * 3, 92 + 180 * 2))}
 if (nn==18) {card[nn].setPosition(p(295 + 180 * 4, 92 + 180 * 2))}
 if (nn==19) {card[nn].setPosition(p(295 + 180 * 5, 92 + 180 * 2))}
 if (nn==20) {card[nn].setPosition(p(295 + 180 * 6, 92 + 180 * 2))}
 if (nn==21) {card[nn].setPosition(p(295, 92 + 180 * 3))}
 if (nn==22) {card[nn].setPosition(p(295 + 180, 92 + 180 * 3))}
 if (nn==23) {card[nn].setPosition(p(295 + 180 * 2, 92 + 180 * 3))}
 if (nn==24) {card[nn].setPosition(p(295 + 180 * 3, 92 + 180 * 3))}
 if (nn==25) {card[nn].setPosition(p(295 + 180 * 4, 92 + 180 * 3))}
 if (nn==26) {card[nn].setPosition(p(295 + 180 * 5, 92 + 180 * 3))}
 if (nn==27) {card[nn].setPosition(p(295 + 180 * 6, 92 + 180 * 3))}
 if (nn==28) {card[nn].setPosition(p(295, 92 + 180 * 4))}
 if (nn==29) {card[nn].setPosition(p(295 + 180, 92 + 180 * 4))}
 if (nn==30) {card[nn].setPosition(p(295 + 180 * 2, 92 + 180 * 4))}
 if (nn==31) {card[nn].setPosition(p(295 + 180 * 3, 92 + 180 * 4))}
 if (nn==32) {card[nn].setPosition(p(295 + 180 * 4, 92 + 180 * 4))}
 if (nn==33) {card[nn].setPosition(p(295 + 180 * 5, 92 + 180 * 4))}
 if (nn==34) {card[nn].setPosition(p(295 + 180 * 6, 92 + 180 * 4))}
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