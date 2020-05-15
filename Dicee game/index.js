var randomNumber1 ,randomNumber2;
randomNumber1 = Math.floor(1 + Math.random()*6);
randomNumber2 = Math.floor(1+Math.random()*6);

document.querySelectorAll("img")[0].setAttribute("src" ,"images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src" ,"images/dice"+randomNumber2+".png");

if(randomNumber1 > randomNumber2)
{
    document.querySelector("h1").textContent = "Player 1 wins";
}
else if(randomNumber2 == randomNumber1)
{
    document.querySelector("h1").textContent = "Draw";
}
else
{
    document.querySelector("h1").textContent = "Player 2 wins";
}