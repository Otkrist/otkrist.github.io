images = [
  "img/Julia_portrait_2.jpeg",
  "img/Julia_portrait_3.jpeg",
  "img/Julia_portrait_4.jpeg",
  "img/Julia_portrait_6.jpeg"
];

window.onload = function() {
  var imagenumber = 4 ;
  var randomnumber = Math.random() ;
  var rand1 = Math.round((imagenumber-1) * randomnumber) +  1;
  bodyelem = document.getElementById('foobar');
  bodyelem.style.backgroundImage = "url(" +images[rand1] + ")";
  document.body.style.backgroundImage = images[rand1];
}

