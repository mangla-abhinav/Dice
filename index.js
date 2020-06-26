var randomnumber1 = Math.random();
randomnumber1 = Math.floor((randomnumber1*6)+1);
var string = "images/dice"+randomnumber1+".png";
document.querySelector("img.img1").setAttribute("src",string);

// if (randomnumber1==1)
// {
//   var left_image = document.querySelector("img.img1").setAttribute("src", "images/dice1.png");
// }
// else if(randomnumber1==2)
// {
//   var left_image = document.querySelector("img.img1").setAttribute("src", "images/dice2.png");
// }
// else if(randomnumber1==3)
// {
//   var left_image = document.querySelector("img.img1").setAttribute("src", "images/dice3.png");
// }
// else if(randomnumber1==4)
// {
//   var left_image = document.querySelector("img.img1").setAttribute("src", "images/dice4.png");
// }
// else if(randomnumber1==5)
// {
//   var left_image = document.querySelector("img.img1").setAttribute("src", "images/dice5.png");
// }
// else if(randomnumber1==6)
// {
//   var left_image = document.querySelector("img.img1").setAttribute("src", "images/dice6.png");
// }

var randomnumber2 = Math.random();
randomnumber2 = Math.floor((randomnumber2*6)+1);
var string = "images/dice"+randomnumber2+".png";
document.querySelector("img.img2").setAttribute("src",string);
// if (randomnumber2==1)
// {
//   var left_image = document.querySelector("img.img2").setAttribute("src", "images/dice1.png");
// }
// else if(randomnumber2==2)
// {
//   var left_image = document.querySelector("img.img2").setAttribute("src", "images/dice2.png");
// }
// else if(randomnumber2==3)
// {
//   var left_image = document.querySelector("img.img2").setAttribute("src", "images/dice3.png");
// }
// else if(randomnumber2==4)
// {
//   var left_image = document.querySelector("img.img2").setAttribute("src", "images/dice4.png");
// }
// else if(randomnumber2==5)
// {
//   var left_image = document.querySelector("img.img2").setAttribute("src", "images/dice5.png");
// }
// else if(randomnumber2==6)
// {
//   var left_image = document.querySelector("img.img2").setAttribute("src", "images/dice6.png");
// }

if(randomnumber1>randomnumber2)
{
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins";
}
else if(randomnumber1<randomnumber2)
{
  document.querySelector("h1").innerHTML="Player 2 Wins 🚩";
}
else if(randomnumber1==randomnumber2)
{
  document.querySelector("h1").innerHTML="🚩 Draw 🚩";
}
