images = [
  "img/Julia_portrait_2.jpeg",
  "img/Julia_portrait_3.jpeg",
  "img/Julia_portrait_4.jpeg",
  "img/Julia_portrait_6.jpeg"
];

window.onload = function() {
  var imagenumber = 4 ;
  var randomnumber = Math.random() ;
  var rand1 = Math.floor(imagenumber * randomnumber);
  bodyelem = document.getElementById('foobar');
  console.log(rand1);
  bodyelem.style.backgroundImage = "url(" +images[rand1] + ")";
  document.body.style.backgroundImage = images[rand1];
  //drawTheSet(bodyelem);
}

function drawTheSet(canvas) {
  var canvas=document.getElementById("myCanvas");
  var ctx=canvas.getContext("2d");
  var imgData=ctx.createImageData(600,600);
  for (var i=0;i<imgData.data.length;i+=4) {
    imgData.data[i+0]=0;
    imgData.data[i+1]=0;
    imgData.data[i+2]=255;
    imgData.data[i+3]=255;
  }
  ctx.putImageData(imgData,20,50);
}

