
var my_array = [];
var circle = [];
var message = "Click Anywhere!";
var print_message = true;
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
 
  
  for(var i = 0; i < 10; i++){
  
    my_array[i] = random_number();

  }
  
  for(var i = 0; i < my_array.length; i++){
    circle[i] = new Circle(i);
    circle[i].data = my_array[i];
   
  }
  
};

function draw(){
  background('gray');
  textSize(60);
  textStyle(BOLD);
  text("Bubble Sort - Visualizer [ beta ]", width/20, 1*height/8);    
  for(var i = 0; i < my_array.length; i++){
        circle[i].display();
      } 
  textSize(50);
  textAlign(CENTER);
  text(message, width/2, 3*height/4);    
}

function Circle(i) {
  
  this.y = height/3;
  this.x = map(i, 0, my_array.length, this.y/2, width);
  this.data = 0;
  this.strokethickness = 8;
  this.strokecolor = "black";
  this.display = function(){
    fill(255);
    strokeWeight(this.strokethickness)
    stroke(this.strokecolor);
    ellipse(this.x, this.y, this.y/2, this.y/2);
    fill(0);
    noStroke();
    textSize(this.y/6);
    text(this.data, this.x-this.y/20, this.y+this.y/20);
  }
};

var index = 0;
var k_level = 0;
var initialize = true;
function mousePressed(){
  if(initialize === true){
    super_active_mode(circle[index]);
    active_mode(circle[index + 1]);
    message = "";
    initialize = false;
    return;
  }
  if(k_level === my_array.length - 2){
    super_active_mode(circle[0]);
    super_active_mode(circle[1]);
    message = "Bubble Sort Complete!"
    return;
  }
  if(index === my_array.length - k_level - 1){
    index = 0;
    k_level += 1;
    
    super_active_mode(circle[index]);
    active_mode(circle[index + 1]);
    
    return;
  }
  
  if(circle[index].data > circle[index + 1].data){
    if(print_message === true){
      message = `${circle[index].data} is greater than ${circle[index + 1].data}\nHence, we need to SWAP!`;
      print_message = false;
      return;
    }
    //Swapping data
    var temp_data = circle[index].data;
    circle[index].data = circle[index + 1].data;
    circle[index + 1].data = temp_data;
    print_message = true;
    return;
  }
  
  message = "";
  
  index += 1;
  
  normal_mode(circle[index - 1]);
  super_active_mode(circle[index]);
  if(index < my_array.length - k_level - 1){
    active_mode(circle[index + 1]);
  }
  
    
};

function random_number(){
  return Math.floor(Math.random()*10); 
};


function active_mode(a){
  a.strokecolor = "red";
};

function super_active_mode(a){
  a.strokecolor = "lime";
};


function normal_mode(a){
  a.strokecolor = "black";
}
