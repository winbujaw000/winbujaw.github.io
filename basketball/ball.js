
var paddle;
var paddle2;
var ball;
var game;
var box;
var character;
var output;

function checkCollisions() {
    
    if(box.collidesWith(character)){
        output.innerHTML = "COLLISION";
        character.dx *= -1;
        character.dy *= -1;
    }
    else{
        output.innerHTML = "NO COLLISON";
        //character.followMouse();
        }
        
        //Distance Collision
        dist = paddle.distanceTo(character);
        output.innerHTML = dist;
        if(dist - character.width/2 - paddle.width/2 < 0){
            output.innerHTML = dist;
        character.dx *= -1;
        character.dy *= -1;
        }else{
         output.innerHTML = "NO COLLISON";
        character.followMouse();

        }

}

function Paddle() {
    tPaddle = new Sprite(scene, "court.png", 200, 200);
    tPaddle.setAngle(180);
     tPaddle.setSpeed(0);

    tPaddle.checkKeys = function() {
        if (keysDown[K_DOWN]) {
            this.changeYby(CHANGE);
            if (this.y - this.width / 2 < 0) {
                this.setY(this.width / 2);
            }
        }

        if (keysUp[K_UP]) {
            this.changeYby(-CHANGE);
            if (this.y + this.width / 2 > scene.height) {
                this.setY(scene.height - this.width / 2);
            }
        }
    }

    return tPaddle
}


function init() {
    
    
    game = new Scene();
     
    game.setSize(700,400);
    paddle = new Paddle();
    paddle2 = new Paddle();
    paddle2.setSpeed(10);
    
    paddle2.setBoundAction(BOUNCE);
    /*character.followMouse = function(){
        this.setX(document.mouseX);
        this.setY(document.mouseY);
    }*/
    
    output = document.getElementById("output");
    
    paddle.setPosition(15, scene.height / 2);
    paddle2.setPosition(scene.width - 20, scene.height / 2);
    ball = new Sprite(scene, "ball.png" ,200, 200);
    ball.setMoveAngle(60);
    ball.setSpeed(8);
    ball.setBoundAction(BOUNCE);
    /*character.followMouse = function(){
        this.setX(document.mouseX);
        this.setY(document.mouseY);
    }*/
    
    
    scene.start();
    EPICMUSIC.play();
    paddle = new Sprite(game, "court.png", 100, 100);
    paddle.setSpeed(0);
    paddle.setPosition(game.width/2, game.height/2);
    
    
    character.setSpeed(5);
    character.setMoveAngle(30);
    character.setBoundAction(BOUNCE);
  
    
    
    
    
    game.start();
}



function update() {
    game.clear();
    paddle.checkKeys();
    ball.update();
    
    paddle.update();
    paddle2.update();
   
    
    character.update();
    checkCollisions();
    //character.followMouse();
}