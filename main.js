var points1 = 0;
var points2 = 0;
var i = 1;

//This expires in 2 weeks
var deckId = '1kxx9naho1bf';

$.get("https://deckofcardsapi.com/api/deck/" + deckId + "/shuffle/",function(data){
	getCards();
});

function getCards()
{
	$.get("https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=2", function(data){

		if (i === 27)
		{
			end();
		}

	var c1 = data.cards[0].value;
	var c2 = data.cards[1].value;

var pres1 = c1 === 'JACK' ? 11 :
				c1 === 'QUEEN' ? 12 :
				c1 === 'KING' ? 13 :
				c1 === 'ACE' ? 14 :
				c1;

var pres2 = c2 === 'JACK' ? 11 :
				c2 === 'QUEEN' ? 12 :
				c2 === 'KING' ? 13 :
				c2 === 'ACE' ? 14 :
				c2;


next(pres1, pres2);


var im1 = data.cards[0].image;
var im2 = data.cards[1].image;

document.getElementById("card1").src = im1;
document.getElementById("card2").src = im2;

console.log(data.remaining);

/*
if (data.remaining === 0)
{
	end();
}*/

	});
}

//Functions
function next(c1, c2)
{
	$("#p1").html(c1);
	$("#p2").html(c2);

	$("#turn").html(i);
	i++;
}

function compare(num1, num2)
{
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	if (num1 > num2)
	{
		points1++;
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

}

function end()
{
	var x = points1 > points2 ? "Player 1 wins with " + points1 + "s" :
				points1 < points2 ? "Player 2 wins with " + points2 + "s" :
				"Tie!" + points1 + "vs" + points2;

	alert(x);
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
