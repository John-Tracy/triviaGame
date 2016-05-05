var game = { 
	questionCounter: 0,
	time: 0,
	timerNum: 30,
	rights: 0,
	wrongs: 0,
	qArray : [

	{question : "Which has the proper JavaScript syntax for creating an \"on click\" function?",
		answers : ["$(\"#id\").on(\"click\", function(){...});",
					"$(onclick){...}",
					"$(\'#id\").on(\"click\", function(){...});",
					"$(\"#id\").on(\"click\", function(){...})" ] },

	{question : "placeholder text 2",
		answers : ["dsljfldsj",
					"blah blah",
					"right answer",
					"dddddddd"]},

	{question : "placeholder text 3",
		answers : ["fffff",
					"dsase",
					"mdjfjub",
					"right answer"]},

	{question:	"placeholder text 4",
		answers : ["ddddddddd",
					"right answer",
					"aseevsr",
					"ekib;one"]},

	{question : "placeholder text 5",
		answers : ["rightanswer",
					"bbbb",
					"ccc",
					"dddddddd"]}

		],

	timeStart: function(){
		$('#theTime').html(game.timerNum)
		time = setInterval(game.timeCount,1000);
	},
	timeStop: function(){
		clearInterval(time);
		return;
	},
	timeCount: function(){
		game.timerNum--;
		$('#theTime').html(game.timerNum);

		if(game.timerNum == 0){
			game.wrongs++;
			game.questionCounter++;
			game.timerNum = 30;
			$('#theTime').empty();
			game.timeStop();
			alert('You are Incorrect!');
			game.gamePlay(game.questionCounter)
			console.log(game.wrongs);
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
}

};

$(document).ready(function() {


$('#startGame').on('click', function(){


	game.gamePlay(game.questionCounter);
	
	$('.ansHolder').on('click', function(){
		var index = $(this).data('index');
		console.log(index);
	// for all instances of a correct answer
		if(index == 0 && game.questionCounter == 0){
			game.rights++;
			game.questionCounter++;
			alert('You are correct!');
			console.log(game.rights);
			console.log(game.wrongs);
			game.timeStop();
			game.gamePlay(game.questionCounter);
		}
		else if(index == 2 && game.questionCounter == 1){
			game.rights++;
			game.questionCounter++;
			alert('You are correct!');
			console.log('rights ' + game.rights);
			console.log('wrongs' + game.wrongs);
			game.timeStop();
			game.gamePlay(game.questionCounter);
		}
		else if(index == 3 && game.questionCounter == 2){
			game.rights++;
			game.questionCounter++;
			alert('You are correct!');
			console.log(game.rights);
			console.log(game.wrongs);
			game.timeStop();
			game.gamePlay(game.questionCounter);
		}
		else if(index == 1 && game.questionCounter == 3){
			game.rights++;
			game.questionCounter++;
			alert('You are correct!');
			console.log(game.rights);
			console.log(game.wrongs);
			game.timeStop();
			game.gamePlay(game.questionCounter);
		}
		else if(index == 0 && game.questionCounter == 4){
			game.rights++;
			game.questionCounter++;
			alert('You are correct!');
			console.log(game.rights);
			console.log(game.wrongs);
			game.timeStop();
			game.gamePlay(game.questionCounter);
		}
	// for incorrect answers
		else if(game.questionCounter <= 4) {
			if((index != 0 && game.questionCounter == 4) || (index != 1 && game.questionCounter == 3) || (index != 3 && game.questionCounter == 2) || (index != 2 && game.questionCounter == 1) || (index != 0 && game.questionCounter == 0))
			{
			game.wrongs++;
			alert('You are Incorrect!');
			console.log(game.rights);
			console.log(game.wrongs);
			game.timeStop();


				if(game.questionCounter < 4){
				game.questionCounter++;
				game.gamePlay(game.questionCounter);
				}
			}
		}
	//	for incorrect guess when the game is on the final answer.
		else if()
		

	});





});

});











