// For Player 1 and Dice 1
var random_no1= Math.floor(Math.random()*6+1);
document.querySelector("img").setAttribute("src","images/dice"+random_no1+".png");

// For Player 2 and Dice 2
var random_no2= Math.floor(Math.random()*5+1);
document.getElementsByClassName("img2")[0].setAttribute("src","images/dice"+random_no2+".png");

if(random_no1>random_no2)
{
  document.querySelector("h1").innerHTML="Player 1 wins";
  document.getElementsByTagName("p")[0].style.fontSize="3rem";
  document.getElementsByTagName("p")[0].innerHTML="Player 1 🤴";
}
else if(random_no1<random_no2)
{
  document.querySelector("h1").innerHTML="Player 2 wins";
  document.getElementsByTagName("p")[1].style.fontSize="3rem";
  document.getElementsByTagName("p")[1].innerHTML="Player 2 🤴";
}
else
{
  document.querySelector("h1").innerHTML="Oops! Game is Draw";
}
