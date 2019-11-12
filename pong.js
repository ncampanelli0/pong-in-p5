//canvas variables
cWidth = 800;
cHeight = 550;

//ball variables
var ballX = cWidth/2;
var ballY = cHeight/2;
var ballSize = 15;
var ballRadius = ballSize/2;
var ballSpeedX = -5;
var ballSpeedY = 5;

//paddle variables
var pWidth = 15;
var pHeight = 150;
var p1X = 5;
var p1Y = 150;
var p2X = cWidth-20;
var p2Y = 150;
var paddleSpeed = 8;

//score variables
var p1Score = 0;
var p1ScoreX = 40;
var p1ScoreY = 40;
var p2Score = 0;
var p2ScoreX = cWidth-70;
var p2ScoreY = 40;
var scoreCheck = 120;


function setup()
{
  createCanvas(cWidth, cHeight);
}

function draw()
{
  background(0);
  //ball
  fill(255);
  ellipse(ballX, ballY, ballSize, ballSize);
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  //player 1
  fill(255);
  rect(p1X, p1Y, pWidth, pHeight);
  textSize(20);
  text(p1Score,p1ScoreX,p1ScoreY);

  //player 2
  fill(255);
  rect(p2X, p2Y, pWidth, pHeight);
  textSize(20);
  text(p2Score,p2ScoreX,p2ScoreY);

  //ball collision detection top and bottom
  if (ballY > cHeight-ballRadius || ballY < ballRadius)
  {
  	ballSpeedY = -ballSpeedY;
  }

  //ball collision detection left and right + score
  if (ballX > cWidth+scoreCheck) //right check
  {
    p1Score += 1;
    ballX = cWidth/2;
    ballY = cHeight/2;
    ballSpeedX = -ballSpeedX;
  }
  else if (ballX < ballRadius-scoreCheck) //left check
  {
    p2Score += 1;
    ballX = cWidth/2;
    ballY = cHeight/2;
    ballSpeedX = -ballSpeedX;
  }

  //NOTE: player 1 and player 2 movements interfere with each other

  //player 1 movement
  if (keyIsPressed == true)
  {
    if (keyCode == 87 && p1Y >= 0) //w
    {
      p1Y -= paddleSpeed;
    }
    else if (keyCode == 83 && p1Y <= cHeight-pHeight) //s
    {
      p1Y += paddleSpeed;
    }

    if (keyCode == 73 && p2Y >= 0) //i
    {
      p2Y -= paddleSpeed;
    }
    else if (keyCode == 75 && p2Y <= cHeight-pHeight) //k
    {
      p2Y += paddleSpeed;
    }
  }

  //player 1 collision detection
  if (collideRectCircle(p1X, p1Y, pWidth, pHeight, ballX, ballY, ballSize))
  {
    print("player 1 collision detected");
    ballSpeedX = -ballSpeedX;
  }

  //player 2 collision detection
  if (collideRectCircle(p2X, p2Y, pWidth, pHeight, ballX, ballY, ballSize))
  {
    print("player 2 collision detected");
    ballSpeedX = -ballSpeedX;
  }
}


//legacy code
/*
//ai movement
if (!(p2Y <= 0))
{
  p2Y = ballY;
}
else if (p2Y >= cHeight)
{
  p2Y = ballY;
}
*/


//collison variables
//var p1Det = dist(p1X, p1Y, ballX, ballY);
//var p2Det = dist(p2X, p2Y, ballX, ballY);

//orginal movement
//player 1 movement
/*
if (keyCode === 87 && keyIsPressed === true) //w = 87
{
  p1Y -= paddleSpeed;
}
else if (keyCode === 83 && keyIsPressed === true) //s = 87
{
  p1Y += paddleSpeed;
}

//player 2 movement
if (keyCode === 73 && keyIsPressed === true) //i = 73
{
  p2Y -= paddleSpeed;
}
else if (keyCode === 75 && keyIsPressed === true) //k = 75
{
  p2Y += paddleSpeed;
}
*/
