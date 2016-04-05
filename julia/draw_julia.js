var Xm = 640;
var Ym = 480;
var im = new Array(Xm);

function initialize_arr() {
  for (var i=0;i < zReal.length; i++) {
     im[i] = new Array(Ym);
  };
}


function getIterationVal(x,y,cx,cy) {
  for(var i=1;i<1000;i++) {
    if (abs(z) > 2) {
       return i;
    }
  }
  return 1000;
}

function drawTheSet() {
  var canvas=document.getElementById("myCanvas");
  var ctx=canvas.getContext("2d");
  var imgData=ctx.createImageData(Xm, Ym);
  for (var y=0; y < Ym; y++) {
    for (var x=0; x < Xm; x++) {
      var i = (y*Xm + x)*4;
      imgData.data[i+0]=0;
      imgData.data[i+1]=0;
      imgData.data[i+2]=x % 100;
      imgData.data[i+3]=255;
    }
  }
  ctx.putImageData(imgData,10,10);
}

window.onload = function() {
  drawTheSet();
}