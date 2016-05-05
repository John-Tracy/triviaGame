var game = { 
	time: 0,
	timerNum: 30,
	qArray : [

	{question : "Which has the proper JavaScript syntax for creating an \"on click\" function?",
		answers : ["$(\"#id\").on(\"click\", function(){...});",
					"$(onclick){...}",
					"$(\'#id\").on(\"click\", function(){...});",
					"$(\"#id\").on(\"click\", function(){...})" ] },

	{question : "placeholder text 2",
		answers : ["dsljfldsj",
					"blah blah",
					"kkkkkkkkkkk",
					"dddddddd"]},

	{question : "placeholder text 3",
		answers : ["fffff",
					"dsase",
					"mdjfjub",
					"dalk;jiog"]},

	{question:	"placeholder text 4",
		answers : ["ddddddddd",
					"eeeeeeee",
					"aseevsr",
					"ekib;one"]},

	{question : "placeholder text 5",
		answers : ["helloo",
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
		$('#theTime').empty();
		game.timerNum = 30;
		game.gamePlay(1);
	},
	timeCount: function(){
		game.timerNum--;
		$('#theTime').html(game.timerNum);
		if(game.timerNum == 0){
			game.timeStop();
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


	game.gamePlay(0);
	






});

});











