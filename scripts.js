var img;
function preload() {
  img = loadImage(IMAGE.jpg);
}

function setup() {
  createCanvas(400,400);

  image(img,0,0);
  if (mouseIsPressed) filter(BLUR,3);
  else image(img,0,0);
}


