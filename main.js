var points1 = 0;
var points2 = 0;
//var c1 = [];
//var c2 = [];
var pres1 = 0;
var pres2 = 0;
var i = 0;

/* For making a new deck
$.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", deckId = function(data){
	var deckId = JSON.stringify(data.deck_id);
	deckId = deckId.substr(1,deckId.length - 2);

	console.log(deckId);
	*/

//This expires in 2 weeks
var deckId = '1kxx9naho1bf';

$.get("https://deckofcardsapi.com/api/deck/" + deckId + "/shuffle/",function(data){


	$.get("https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=52", deckId = function(data){
		//document.getElementById("card1").src = data.cards[0].image;
		//document.getElementById("card2").src = data.cards[1].image;
		var deckNum = data.remaining;
	//console.log(deckNum);

	var c1 = [];
	var c2 = [];
	//Makes the deck for both players
		for (var u = 0; u < 52; u++)
		{
			if (u % 2 === 0 || u === 0)
				c1.push(data.cards[u].value)

			else
				c2.push(data.cards[u].value)
		}

	var players = [c1, c2];

	var faceCards = ['JACK','QUEEN','KING','ACE'];
	var l = faceCards.length;

//Converts the Face cards
for (var x = 0; x < 26; x++)
{
	for (var j = 0; j < 2; j++)
	{
		for (var h = 0; h < l; h++)
		{
			if (players[j][x] == faceCards[h])
			{
				players[j][x] = 11 + h;
				break;
			}
		}
	}
}

//Present value
pres1 = players[0][i];
pres2 = players[1][i];

next(pres1, pres2);

//Future value
var f1next = players[0][i + 1];
var f2next = players[1][i + 1];

var im1 = data.cards[i].image;
var im2 = data.cards[i +1].image;

document.getElementById("card1").src = im1;
document.getElementById("card2").src = im2;

	});
});


//Functions

function next(c1, c2)
{
	$("#p1").html(c1);
	$("#p2").html(c2);

	$("#turn").html(i);
}

function compare(num1, num2)
{
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	if (num1 > num2)
	{
		points1;
		alert("Player 1 wins!");
	}

	else if (num1 < num2)
	{
		points2++;
		alert("Player 2 wins!");
	}

	else
	{
		alert("Draw!");
	}

	console.log(points1 + "vs" + points2);
	console.log("I is " + i);

}

//WORD OF THE DAY!
$.get("http://setgetgo.com/randomword/get.php", function(data){
						$("#something").html(data);
        });

	function sleep(milliseconds) {
	  var start = new Date().getTime();
	  for (var i = 0; i < 1e7; i++) {
	    if ((new Date().getTime() - start) > milliseconds){
	      break;
	    }
	  }
	}
