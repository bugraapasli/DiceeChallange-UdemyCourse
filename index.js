var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;

var gettingElements = document.querySelectorAll("img");

var image1 = "dice" + randomNumber1 + ".png";
var image2 = "dice" + randomNumber2 + ".png";

gettingElements[0].setAttribute("src",image1);
gettingElements[1].setAttribute("src", image2);

if(image1 === image2){
    document.querySelector("h1").textContent = "Draw Game!";
}
else if(image1 > image2){
    document.querySelector("h1").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/1021/1021212.png' style = 'width: 20%;' alt='flag'> Player1 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Player2 Wins! <img src='https://cdn-icons-png.flaticon.com/512/1021/1021212.png' style = 'width: 20%;' alt='flag'>";
}
