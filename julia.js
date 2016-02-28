images = [
  "img/Julia_portrait_2.jpeg",
  "img/Julia_portrait_3.jpeg",
  "img/Julia_portrait_4.jpeg",
  "img/Julia_portrait_6.jpeg"
];

cWidth = 600;
cHeight = 400;

var c_real = -0.4;0.2;
var c_img = 0.6;-0.01;

var zReal = new Array(cWidth);
var zImg = new Array(cWidth);

function initialize_arr() {
  for (var i=0;i < zReal.length; i++) {
     zReal[i] = new Array(cHeight);
     zImg[i] = new Array(cHeight);
  };
  for (var y=0; y < cHeight; y++) {
    for (var x=0; x < cWidth; x++) {
      zReal[x][y] = x/cWidth;
      zImg[x][y] = y/cHeight;
    }
  }
}

window.onload = function() {
  var imagenumber = 4 ;
  var randomnumber = Math.random() ;
  var rand1 = Math.floor(imagenumber * randomnumber);
  bodyelem = document.getElementById('foobar');
  console.log(rand1);
  bodyelem.style.backgroundImage = "url(" +images[rand1] + ")";
  document.body.style.backgroundImage = images[rand1];
  //initialize_arr();
  //drawTheSet(bodyelem);
}

function drawTheSet1(canvas) {
  var canvas=document.getElementById("myCanvas");
  var ctx=canvas.getContext("2d");
  var imgData=ctx.createImageData(cWidth, cHeight);
  for (var y=0; y < cHeight; y++) {
    for (var x=0; x < cWidth; x++) {
      var i = (y*cWidth + x)*4;
      imgData.data[i+0]=0;
      imgData.data[i+1]=0;
      imgData.data[i+2]=x % 100;
      imgData.data[i+3]=255;
    }
  }
  ctx.putImageData(imgData,10,10);
}

function getCDist(x,y,cx,cy) {
  var val_r = x - cx;
  var val_i = y - cy;
  return Math.sqrt(val_r*val_r + val_i*val_i);
}

function drawTheSet(canvas) {
  var canvas=document.getElementById("myCanvas");
  var ctx=canvas.getContext("2d");
  var imgData=ctx.createImageData(cWidth, cHeight);
  for (var j=0; j < 100;j++) {
    for (var y=0; y < cHeight; y++) {
      for (var x=0; x < cWidth; x++) {
        var i = (y*cWidth + x)*4;
        var z_real = zReal[x][y];
        var z_img = zImg[x][y];
        var val_r = z_real*z_real - z_img*z_img + c_real;
        var val_i = 2*z_real*z_img + c_img;
        var z_dist = getCDist(val_r, val_i, c_real, c_img);
        zReal[x][y] = val_r;
        zImg[x][y] = val_i;
        imgData.data[i+0]=0;
        imgData.data[i+1]=0;
        imgData.data[i+2]= z_dist < 0.2 ? 255 : 0;
        imgData.data[i+3]=255;
      }
    }
  }
  ctx.putImageData(imgData,10,10);
}
