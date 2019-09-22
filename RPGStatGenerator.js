var max = 100;
var min = 1;

var classMax = 6;
var classMin = 1;

var className = document.getElementById('class-name');

var hPoints = document.getElementById('hnum');
var mPoints = document.getElementById('mnum');

var healthChoice = Math.floor(Math.random() * (max - min)) + min;
var magicChoice = Math.floor(Math.random() * (max - min)) + min;

mPoints.innerHTML = `${magicChoice} / 100`;
hPoints.innerHTML = `${healthChoice} / 100`;

const summonerImg = document.getElementById('summoner-img');
const warriorImg = document.getElementById('warrior-img');
const paladinImg = document.getElementById('paladin-img');
const archerImg = document.getElementById('archer-img');
const rogueImg = document.getElementById('rogue-img');
const healerImg = document.getElementById('healer-img');

var strWidth = Math.floor(Math.random() * (max - min)) + min;
var dexWidth = Math.floor(Math.random() * (max - min)) + min;
var intWidth = Math.floor(Math.random() * (max - min)) + min;
var constWidth = Math.floor(Math.random() * (max - min)) + min;
var charWidth = Math.floor(Math.random() * (max - min)) + min;
var wisdomWidth = Math.floor(Math.random() * (max - min)) + min;
var cunningWidth = Math.floor(Math.random() * (max - min) + min);
var perWidth = Math.floor(Math.random() * (max - min) + min);
var endWidth = Math.floor(Math.random() * (max - min) + min);

var classChoice = Math.floor(Math.random() * (classMax - classMin)) + classMin;

if (classChoice == 1) {
    summonerImg.style.display = "block";
    className.innerHTML = "Summoner";
} else if (classChoice == 2) {
    warriorImg.style.display = "block";
    className.innerHTML = "Warrior";
} else if (classChoice == 3) {
    paladinImg.style.display = "block";
    className.innerHTML = "Paladin";
} else if (classChoice == 4) {
    archerImg.style.display = "block";
    className.innerHTML = "Archer";
} else if (classChoice == 5) {
    rogueImg.style.display = "block";
    className.innerHTML = "Rogue";
} else {
    healerImg.style.display = "block";
    className.innerHTML = "Healer";
}

var strBar = document.getElementById('str-bar');
var dexBar = document.getElementById('dex-bar');
var intBar = document.getElementById('int-bar');
var constBar = document.getElementById('const-bar');
var charBar = document.getElementById('char-bar');
var wisdomBar = document.getElementById('wisdom-bar');
var cunningBar = document.getElementById('cunning-bar');
var perBar = document.getElementById('per-bar');
var endBar = document.getElementById('end-bar');

strBar.style.width = strWidth + '%';
dexBar.style.width = dexWidth + '%';
intBar.style.width = intWidth + '%';
constBar.style.width = constWidth + '%';
charBar.style.width = charWidth + '%';
wisdomBar.style.width = wisdomWidth + '%';
cunningBar.style.width = cunningWidth + '%';
perBar.style.width = perWidth + '%';
endBar.style.width = endWidth + '%';

strBar.innerHTML = strWidth + '%';
dexBar.innerHTML = dexWidth + '%';
intBar.innerHTML = intWidth + '%';
constBar.innerHTML = constWidth + '%';
charBar.innerHTML = charWidth + '%';
wisdomBar.innerHTML = wisdomWidth + '%';
cunningBar.innerHTML = cunningWidth + '%';
perBar.innerHTML = perWidth + '%';
endBar.innerHTML = endWidth + '%';