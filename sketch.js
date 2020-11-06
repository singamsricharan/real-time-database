var hypnoticball;

function setup(){
    database=firebase.database();
    console.log(database);
    createCanvas(500,500);

    hypnoticball = createSprite(250,250,10,10);
    hypnoticball.shapeColor = "red";

    var hypnoticBallposition =database.ref("ball/position");
    hypnoticBallposition.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(position!==unidefined){
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}
}
function writePositon(x,y){
database.ref("ball/positon").set({
    'x':positon.x+x,
    'y':positon.y+y
})
}
function readPosition(data){
    position=data.val();
    hypnoticball.x = hypnoticball.x + x;
    hypnoticball.y = hypnoticball.y + y;
}
