/* js goes here */


var body_object = document.body;

body_object.addEventListener('mousemove', check_dimension);

function check_dimension(evt){
  var winW = window.innerWidth;
  var winH = window.innerHeight;
  var mouseX = evt.clientX;
  var mouseY = evt.clientY;

  var hue = (mouseY / winH) * 360;
  var lum = (mouseX / winW) * 100;
  body_object.style.backgroundColor = 'hsla('+ hue +', 50%,'+ lum +'%, 1)';
  //console.log('width: ' + winW + ', height: ' + winH + ', mouseX: ' + mouseX + ', mouseY: ' + mouseY);
}

