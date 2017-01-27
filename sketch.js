var audio;
var header = 'justinharrison000@gmail.com';
var repository = 'https://soundcloud.com/harrisonjustin';

function preload() {
 audio = createAudio(['huh_2.mp3']);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  textSize(20);
  fill(255);
  textFont("Courier New");
  text("loop?", ((windowWidth/2.0) - (windowWidth * 0.05)), (windowHeight/2.0));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  text("loop?", ((windowWidth/2.0) - (windowWidth * 0.05)), (windowHeight/2.0));
}

function mousePressed(){
  var d = dist(mouseX, mouseY, (windowWidth/2.0) - (windowWidth * 0.05), (windowHeight/2.0));
  if (d< (windowWidth * 0.2)) {
    clear();
    createCanvas(windowWidth, windowHeight);
    background(0);
    audio.loop();
    
    email = createP(header);
    email.style("color", "white");
    email.style("font-family", "monospace");
    email.style("font-variant", "small-caps");
    email.style("font-size", "medium");
    email.style("padding", "5px");
    email.position(5,0);
  
    url = createA(repository, repository);
    url.style("color", "white");
    url.style("font-family", "monospace");
    url.style("font-variant", "small-caps");
    url.style("font-size", "medium");
    url.style("padding", "5px");
    url.position(5,50);
    
    return(false);
    
  }
}
