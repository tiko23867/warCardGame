var points1 = 0;
var points2 = 0;
var i = 1;
var c1 = 0,
c2 = 0;

window.onload = function() {
  start();
};
//This expires in 2 weeks
var deckId = '1kxx9naho1bf';

function start()
{
	$.get("https://deckofcardsapi.com/api/deck/" + deckId + "/shuffle/",function(data){
		getCards();
	});
}

function getCards()
{
	$.get("https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=2", function(data){

		if (i === 26)
		{
			document.getElementById("get").onclick = end;
			$("#get").html("See Who Won!");
		}

	c1 = data.cards[0].value;
	c2 = data.cards[1].value;

c1 = c1 === 'JACK' ? 11 :
				c1 === 'QUEEN' ? 12 :
				c1 === 'KING' ? 13 :
				c1 === 'ACE' ? 14 :
				c1;

c2 = c2 === 'JACK' ? 11 :
				c2 === 'QUEEN' ? 12 :
				c2 === 'KING' ? 13 :
				c2 === 'ACE' ? 14 :
				c2;

next();

var im1 = data.cards[0].image;
var im2 = data.cards[1].image;

document.getElementById("card1").src = im1;
document.getElementById("card2").src = im2;


console.log(data.remaining);

	});
}

//Functions
function next()
{
	$("#turn").html("Turn: " + i);
	i++;
}

function compare()
{
	console.log(c1 + " vs " + c2);
	var num1 = parseInt(c1);
	var num2 = parseInt(c2);

	if (num1 > num2)
	{
		points1++;
		swal({
		  title: "Player 1 wins!",
		  text: '<i class="fa fa-heart" aria-hidden="true"></i>',
		  html: true
		});
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
	var x = points1 > points2 ? "Player 1 wins with " + points1 + " points" :
				points1 < points2 ? "Player 2 wins with " + points2 + " points" :
				"Tie!" + points1 + " vs " + points2;

	swal({
	  title: x,
	  text: '<i class="fa fa-heart" aria-hidden="true"></i>',
	  html: true
	});

	document.getElementById("get").onclick = restart;
	$("#get").html("Restart!");
}

function restart()
{
	i = 1;
	points1 = 0;
	points2 = 0;
	document.getElementById("get").onclick = getCards;
	$("#get").html("Get Cards!");
	start();
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
