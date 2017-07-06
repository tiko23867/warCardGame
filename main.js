var p1 = 0;
var p2 = 0;
var c1 = [];
var c2 = [];

$.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1", deckId = function(data){
	var deckId = JSON.stringify(data.deck_id);
	deckId = deckId.substr(1,deckId.length - 2);

	//var deckNum = data.remaining;
	//console.log(deckNum);


//while (deckNum != 0)
//{

	$.get("https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=52", deckId = function(data){
		//document.getElementById("card1").src = data.cards[0].image;
		//document.getElementById("card2").src = data.cards[1].image;
		var deckNum = data.remaining;
	//console.log(deckNum);

		for (var u = 0; u < 52; u++)
		{
			if (u % 2 === 0 || u === 0)
				c1.push(data.cards[u].value)

			else
				c2.push(data.cards[u].value)
		}

	//console.log(c1.length);
	//console.log(c2.length);

	var players = [c1, c2];

	var faceCards = ['JACK','QUEEN','KING','ACE'];
	var l = faceCards.length;

//Converts the Face cards
//while (c1.length + c2.length != 52)
for (var x = 0; x < 26; x++)
{
	for (var j = 0; j < 2; j++)
	{
		for (var i = 0; i < l; i++)
		{
			if (players[j] == faceCards[i])
			{
				players[j] = 11 + i;
				break;
			}
		}
	}
}

var i = 0;

while (i != 26)
{

var im1 = data.cards[i].image;
var im2 = data.cards[i +1].image;

	document.getElementById("card1").src = im1;
	document.getElementById("card2").src = im2;

	setTimeout(function() {}, 3000);

	if (players[0][i] > players[1][i])
	{
		alert("Player One wins!");
	}

	else if (players[0][i] < players[1][i])
	{
		alert("Player Two wins!");
	}

	else
	{
		alert("Tie!");
	}

	i++;
}

	});
});




$.get("http://setgetgo.com/randomword/get.php", function(data){
						word = data;
						$("#something").html(data);
        });
