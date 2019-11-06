function throwdice1(){
var score1=Math.floor(Math.random()*6)+1;
document.querySelectorAll('img')[0].setAttribute('src','dice-'+ (score1) +'.png');
document.getElementById('score-1').textContent = score1;
var score2=Math.floor(Math.random()*6)+1;
document.querySelectorAll('img')[1].setAttribute('src','dice-'+ (score2) +'.png');
document.getElementById('score-2').textContent = score2;
if (score1 > score2) {
document.getElementById('winner').textContent ="player 1 is the winner!";
} else if (score1 < score2){
document.getElementById('winner').textContent ="player 2 is the winner!";
} else {
  document.getElementById('winner').textContent ="it is tied, try again!";
}}
