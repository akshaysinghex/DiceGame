var randomNumber1 = Math.floor(Math.random()*6+1);
var randomDiceImage1 = "images/"+"dice"+randomNumber1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceImage1);

var randomNumber2 = Math.floor(Math.random()*6+1);
var randomDiceImage2 = "images/"+"dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceImage2);

var randomNumber3 = Math.floor(Math.random()*6+1);
var randomDiceImage3 = "images/"+"dice"+randomNumber3+".png";
var image3 = document.querySelectorAll("img")[2];
image3.setAttribute("src",randomDiceImage3);

var randomNumber4 = Math.floor(Math.random()*6+1);
var randomDiceImage4 = "images/"+"dice"+randomNumber4+".png";
var image4 = document.querySelectorAll("img")[3];
image4.setAttribute("src", randomDiceImage4);
