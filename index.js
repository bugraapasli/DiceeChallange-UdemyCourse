var randomNumber1 = Math.floor(Math.random()*6) + 1;  // random number genarating for dice between 1-6.
var randomNumber2 = Math.floor(Math.random()*6) + 1; // random number genarating for dice between 1-6.

var gettingElements = document.querySelectorAll("img");  

var image1 = "dice" + randomNumber1 + ".png";  // dice1-dice6.png
var image2 = "dice" + randomNumber2 + ".png";

gettingElements[0].setAttribute("src",image1);
gettingElements[1].setAttribute("src", image2);

if(image1 === image2){                                             // condition parts for changing the website
    document.querySelector("h1").textContent = "Draw Game!";
}
else if(image1 > image2){
    document.querySelector("h1").innerHTML = "<img src='https://cdn-icons-png.flaticon.com/512/1021/1021212.png' style = 'width: 20%;' alt='flag'> Player1 Wins!";
}
else{
    document.querySelector("h1").innerHTML = "Player2 Wins! <img src='https://cdn-icons-png.flaticon.com/512/1021/1021212.png' style = 'width: 20%;' alt='flag'>";
}
