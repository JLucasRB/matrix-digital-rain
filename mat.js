const size = 15;
const lines = [];
const max = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);

  textSize(size);
  spawn();
  setInterval(spawn,500);
  setInterval(update, 100);
}

function getPhrase(len){
  const chars = 'あいうえおかきくけこさしすせそたちつてと';
  let phrase = '';
  for(let i=0; i<len; i++){
    phrase+=chars.charAt(floor(random(0,chars.length)))
  }
  return phrase
}

function spawn(){
  for(var i=0; i<random(50); i++){
    if(lines.length >= max) break;
    let phrase = getPhrase(floor(windowHeight/size));
    let m = new matLine(phrase, floor(random(5,20), lines.length));
    lines.push(m);
    m.show();
  }
}

function update(){
  background(0);
  for(var i of lines){
    i.show();
    i.update();
  }
}