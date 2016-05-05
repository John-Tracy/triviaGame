var game = { 
	questionCounter: 0,
	time: 0,
	timerNum: 30,
	rights: 0,
	wrongs: 0,
	qArray : [

	{question : "Which has the proper JavaScript syntax for creating an \"on click\" function?",
		answers : [ "$(\"#id\").on(\"click\", function(){...});",
					"$(onclick){...}",
					"$(\'#id\").on(\"click\", function(){...});",
					"$(\"#id\").on(\"click\", function(){...})" ] },

	{question : "What was the first Programming language created?",
		answers : [ "C++",
					"PHP",
					"Plankalkül",
					"Objective-C"]},

	{question : "Which is an example of the \"strictly equals\" operator in JavaScript?",
		answers : [ "==",
					"=",
					"&&&",
					"==="]},

	{question:	"What is PHP used for?",
		answers : [ "client side programming",
					"Server side programming.",
					"FaceBook's website only.",
					"I dont know."]},

	{question : "what is a recursive function?",
		answers : [ "A function that calls itself until... it doesn't anymore",
					"A function that curses.",
					"A function within a function.",
					"Nothing."]}

		],

	timeStart: function(){
		$('#theTime').html(game.timerNum)
		game.time = setInterval(game.timeCount,1000);
	},
	timeStop: function(){
		clearInterval(game.time);
		game.timerNum = 30;
		return;
	},
	timeCount: function(){
		game.timerNum--;
		$('#theTime').html(game.timerNum);

		if(game.timerNum == 0){
			
		  if(game.questionCounter < 4){
			game.wrongs++;
			game.questionCounter++;
			game.timerNum = 30;
			$('#theTime').empty();
			game.timeStop();
			alert('You Ran out of time, next question!');
			game.gamePlay(game.questionCounter);
		  }
		  else {
		  	game.gameOver();
		  }
	
			// calls function that shows times up, and displays correct answer. then resets browers with new Q and A.
		}
	},
	gamePlay: function(i){
	// displays question
	$('#quesHolderp').html(game.qArray[i].question);
	// css for answer blocks and question block
	$('.ansHolder').css('border', '1px dashed blue');
	$('.ansHolder').css('margin', '5%');
	$('.ansHolder').css('padding', '5%');
	$('.quesHolderp').css('padding\-top', '5%');
	// displays correct and incorrect.
	$('#correct').html('Correct: ' + game.rights);
	$('#incorrect').html('Incorrect ' + game.wrongs);
	// displays answers
	$('#box1').html(game.qArray[i].answers[0]);
	$('#box2').html(game.qArray[i].answers[1]);
	$('#box3').html(game.qArray[i].answers[2]);
	$('#box4').html(game.qArray[i].answers[3]);
	// starts timer.
	game.timeStart();
	},
	gameOver: function(){
		$('#quesHolderp').empty();
		$('.ansHolder').empty();
		$('.ansHolder').css('border', 'none');
		$('#correct').html('Correct: ' + game.rights);
		$('#incorrect').html('Incorrect: ' + game.wrongs);
	}

};

$(document).ready(function() {


$('#startGame').on('click', function(){


	game.gamePlay(game.questionCounter);
	
	$('.ansHolder').on('click', function(){
		var index = $(this).data('index');
	// for all instances of a correct answer
		if(index == 0 && game.questionCounter == 0){
			game.rights++;
			game.questionCounter++;
			alert('You are correct!');
			game.timeStop();
			game.gamePlay(game.questionCounter);
		}
		else if(index == 2 && game.questionCounter == 1){
			game.rights++;
			game.questionCounter++;
			alert('You are correct!');
			game.timeStop();
			game.gamePlay(game.questionCounter);
		}
		else if(index == 3 && game.questionCounter == 2){
			game.rights++;
			game.questionCounter++;
			alert('You are correct!');
			game.timeStop();
			game.gamePlay(game.questionCounter);
		}
		else if(index == 1 && game.questionCounter == 3){
			game.rights++;
			game.questionCounter++;
			alert('You are correct!');
			game.timeStop();
			game.gamePlay(game.questionCounter);
		}
		else if(index == 0 && game.questionCounter == 4){
			game.rights++;
			game.timeStop();
			alert('You are correct, the Game is over!');
			game.gameOver();
		}
	// for incorrect answers before last question.
		else if(game.questionCounter < 4) {
			if((index != 1 && game.questionCounter == 3) || (index != 3 && game.questionCounter == 2) || (index != 2 && game.questionCounter == 1) || (index != 0 && game.questionCounter == 0))
			{
			game.wrongs++;
			game.questionCounter++;
			alert('You are Incorrect!');
			game.timeStop();
			game.gamePlay(game.questionCounter);
			}
		}
	//	for incorrect guess when the game is on the final answer.
		else if(index != 0 && game.questionCounter == 4){
			game.timeStop();
			game.wrongs++;
			alert('You are Incorrect, Game Over!');
			game.gameOver();
		}
			

	});
		





});

});











