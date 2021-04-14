canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


car1_width = 120;
car1_height = 70;
car1_image = "car1.jpg";
car1_x = 10;
car1_y = 10;

car2_width = 120;
car2_height = 70;
car2_image = "car(2).jpg";
car2_x = 10;
car2_y = 100;

var background_img_array = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg"];
random_number = Math.floor(Math.random()*4);
//background_img = background_img_array[random_number];

background_img = "bg1.png";
rover_img = "rover.png";

function add(){
    background_img_tag = new Image();
    background_img_tag.onload = uploadBackground;
background_img_tag.src = background_img;


rover_img_tag = new Image();
rover_img_tag.onload = uploadRover;
rover_img_tag.src = rover_img;
}

function uploadBackground(){
    ctx.drawImage(background_img_tag, 0,0,canvas.width,canvas.height);
}

function uploadCar1(){
    ctx.drawImage(car1_img, car1_x, car1_y, car1_width, car1_height);
}

function uploadCar2(){
    ctx.drawImage(car2_img, car2_x, car2_y, car2_width, car2_height);
}
window.addEventListener("keydown",my_keydown);

function add(){
background_imgTag = new Image(); //defining a new variable with a new image
background_imgTag.onload = uploadBackground; // setting a function, onlaoding this variable
background_imgTag.src = background_img; //load image

car1_imgTag = new Image(); //defining a new variable with a new image
car1_imgTag.onload = uploadCar1; // setting a function, onlaoding this variable
car1_imgTag.src = car1_img; //load image

car2_imgTag = new Image(); //defining a new variable with a new image
car2_imgTag.onload = uploadCar2; // setting a function, onlaoding this variable
car2_imgTag.src = car1_img; //load image
}


function my_keydown_car_1(e){
keyPressed = e.keyCode;
console.log(keyPressed);
if(keyPressed == '37'){
    car1left();
    console.log("left")
}
if(keyPressed == '38'){
    car1up();
    console.log("up")
}
if(keyPressed == '39'){
    car1right();
    console.log("right")
}
if(keyPressed == '40'){
    car1down();
    console.log("down")
}
}


function my_keydown_car_2(e){
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '37'){
        car2left();
        console.log("left")
    }
    if(keyPressed == '38'){
        car2up();
        console.log("up")
    }
    if(keyPressed == '39'){
        car2right();
        console.log("right")
    }
    if(keyPressed == '40'){
        car2down();
        console.log("down")
    }
    }

function car1left(){
    if(car1_x > 0){
        car1_x = car1_x-10;
        uploadBackground();
        uploadRover();
    }
}
function car1right(){
    if(car1_x < 700){
        car1_x = car1_x + 10;
        uploadBackground();
        uploadRover();
    }
}
function car1up(){
    if(car1_y > 0){
        car1_y = car1_y - 10;
        uploadBackground();
        uploadRover();
    }
}
function car1down(){
    if(car1_y < 500){
        car1_y = car1_y + 10;
        uploadBackground();
        uploadRover();
    }
}

function car2left(){
    if(car2_x > 0){
        car2_x = car2_x-10;
        uploadBackground();
        uploadRover();
    }
}
function car2right(){
    if(car2_x < 700){
        car2_x = car2_x + 10;
        uploadBackground();
        uploadRover();
    }
}
function car2up(){
    if(car2_y > 0){
        car2_y = car2_y - 10;
        uploadBackground();
        uploadRover();
    }
}
function car2down(){
    if(car2_y < 500){
        car2_y = car2_y + 10;
        uploadBackground();
        uploadRover();
    }
}