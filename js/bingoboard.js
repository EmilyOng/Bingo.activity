var boardNumbers =[];
var getNumber = [];

var checker = [];
var getChecker = [];

var clickColor;
var fillColor;

var restartCount = 0;

var numberOfClicks = 0;

for (var p = 1; p <= 75; p++){
	boardNumbers.push(p);
	checker.push(p);
}

function in_array(array, el) {
   for(var i = 0 ; i < array.length; i++) 
       if(array[i] == el) return true;
   return false;
}

function get_rand(array) {
    var rand = array[Math.floor(Math.random()*array.length)];
    if(!in_array(getNumber, rand)) {
       getNumber.push(rand); 
       return rand;
   	}
    return get_rand(array);
}

function get_num(array) {
    var rand = array[Math.floor(Math.random()*array.length)];
    if(!in_array(getChecker, rand)) {
       getChecker.push(rand); 
       return rand;
   	}
    return get_num(array);
}

function checkNumber (clicked_id){
	return clicked_id;
}

function boardColors(xocolor){
	for (var i = 1; i <= 25; i++){
		document.getElementById("button"+i).innerHTML = get_rand(boardNumbers);
		document.getElementById("button"+i).style.backgroundColor = xocolor.fill;
	}
	clickColor = xocolor.stroke;
	fillColor = xocolor.fill;
	if (clickColor == fillColor){
		clickColor = "black";
	}
}

var countdowntimer = 5;

function offOverlay() {
	document.getElementById("overlay").style.display = "none";
}

var countdownInterval;
var showBingoNumber;

function startTimer(){
	countdownInterval = setInterval(function(){
		countdowntimer--;
		document.getElementById("countdown").innerHTML = countdowntimer;
		if (countdowntimer == 1){
			countdowntimer = 6;
		}
	}, 1000);
}

function bingoNumber(){
	showBingoNumber = setInterval(function(){
		document.getElementById("bingoNumber").innerHTML = get_num(checker);
	}, 5000);
}

startTimer();
bingoNumber();

var newTimer = 5;

function restart() {
	var newTimer = 5;
	restartCount++;
	boardNumbers =[];
	getNumber = [];

	checker = [];
	getChecker = [];

	for (var p = 1; p <= 75; p++){
		boardNumbers.push(p);
		checker.push(p);
	}

	for (var i = 1; i <= 25; i++){
		document.getElementById("button"+i).innerHTML = get_rand(boardNumbers);
		document.getElementById("button"+i).style.backgroundColor = fillColor;
	}
	if (restartCount==1){
		clearInterval(countdownInterval);
		clearInterval(showBingoNumber);
		document.getElementById("countdown").innerHTML = 5;
		document.getElementById("bingoNumber").innerHTML = null;
		newcountdownInterval = setInterval(function(){
			newTimer--;
			document.getElementById("countdown").innerHTML = newTimer;
			if (newTimer == 1){
				newTimer = 6;
			}
		}, 1000);
		newshowBingoNumber = setInterval(function(){
			document.getElementById("bingoNumber").innerHTML = get_num(checker);
		}, 5000);
	}
	else if (restartCount>1){
		clearInterval(newcountdownInterval);
		clearInterval(newshowBingoNumber);
		document.getElementById("countdown").innerHTML = 5;
		document.getElementById("bingoNumber").innerHTML = null;
		newcountdownInterval = setInterval(function(){
			newTimer--;
			document.getElementById("countdown").innerHTML = newTimer;
			if (newTimer == 1){
				newTimer = 6;
			}
		}, 1000);
		newshowBingoNumber = setInterval(function(){
			document.getElementById("bingoNumber").innerHTML = get_num(checker);
		}, 5000);
	}
}

function checkNumber(clicked_id){
	if (document.getElementById(clicked_id).innerHTML == document.getElementById("bingoNumber").innerHTML){
		document.getElementById(clicked_id).style.backgroundColor = clickColor;
		document.getElementById(clicked_id).value = 1;
		numberOfClicks++;

		var winHOne = 
			document.getElementById("button1").value +
			document.getElementById("button2").value + 
			document.getElementById("button3").value +
			document.getElementById("button4").value + 
			document.getElementById("button5").value
		;
		var winHTwo = 
			document.getElementById("button6").value +
			document.getElementById("button7").value + 
			document.getElementById("button8").value + 
			document.getElementById("button9").value + 
			document.getElementById("button10").value
		;
		var winHThree = 
			document.getElementById("button11").value + 
			document.getElementById("button12").value +
			document.getElementById("button13").value +
			document.getElementById("button14").value +
			document.getElementById("button15").value 
		;
		var winHFour = 
			document.getElementById("button16").value +  
			document.getElementById("button17").value +  
			document.getElementById("button18").value +  
			document.getElementById("button19").value + 
			document.getElementById("button20").value
		;
		var winHFive = 
			document.getElementById("button21").value + 
			document.getElementById("button22").value + 
			document.getElementById("button23").value + 
			document.getElementById("button24").value + 
			document.getElementById("button25").value
		;
		var winVOne = 
			document.getElementById("button1").value + 
			document.getElementById("button6").value + 
			document.getElementById("button11").value + 
			document.getElementById("button16").value + 
			document.getElementById("button21").value 
		;
		var winVTwo = 
			document.getElementById("button2").value +
			document.getElementById("button7").value +
			document.getElementById("button12").value +
			document.getElementById("button17").value +
			document.getElementById("button22").value
		;
		var winVThree = 
			document.getElementById("button3").value +
			document.getElementById("button8").value +
			document.getElementById("button13").value +
			document.getElementById("button18").value +
			document.getElementById("button23").value
		;
		var winVFour = 
			document.getElementById("button4").value +
			document.getElementById("button9").value +
			document.getElementById("button14").value +
			document.getElementById("button19").value +
			document.getElementById("button24").value 
		;
		var winVFive = 
			document.getElementById("button5").value +
			document.getElementById("button10").value +
			document.getElementById("button15").value +
			document.getElementById("button20").value +
			document.getElementById("button25").value
		;
		var winDOne = 
			document.getElementById("button1").value +
			document.getElementById("button7").value +
			document.getElementById("button13").value +
			document.getElementById("button19").value +
			document.getElementById("button25").value
		;
		var winDTwo = 
			document.getElementById("button5").value +
			document.getElementById("button9").value +
			document.getElementById("button13").value +
			document.getElementById("button17").value +
			document.getElementById("button21").value 
		;

		var winList =
		[
			winHOne,
			winHTwo,
			winHThree,
			winHFour,
			winHFive,
			winVOne,
			winVTwo,
			winVThree,
			winVFour,
			winVFive,
			winDOne,
			winDTwo
		];

		for (var n = 0; n < winList.length; n++){
			if (winList[n] == 11111){
				document.getElementById("text").innerHTML = "BINGO! You used " + numberOfClicks + " moves";
				document.getElementById("overlay").style.display = "block";
				for (var g = 1; g <= 25; g++){
					document.getElementById("button"+g).value = 0;
				}
				numberOfClicks = 0;
			}
		}
	}
}
