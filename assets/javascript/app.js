var game = { 
	time: 0,
	timerNum: 30,
	qArray : [

	{question : "placeholder text 1",
		answers : ["ans1","ans2","ans3","ans4"] },

	{question : "placeholder text 2",
		answers : ["","","",""]},

	{question : "placeholder text 3",
		answers : ["","","",""]},

	{question:	"placeholder text 4",
		answers : ["","","",""]},

	{question : "placeholder text 5",
		answers : ["","","",""]}

		],

	timeStart: function(){
		$('#theTime').html(game.timerNum)
		time = setInterval(game.timeCount,1000);
	},
	timeStop: function(){
		clearInterval(time);
	},
	timeCount: function(){
		game.timerNum--;
		$('#theTime').html(game.timerNum);
		if(game.timerNum == 0){
			game.timeStop();
		}
	}

}





$(document).ready(function() {

$('#startGame').on('click', function(){
	// displays question
	$('#quesHolder').html(game.qArray[0].question);
	// displays answers
	$('#box1').html(game.qArray[0].answers[0]);
	$('#box2').html(game.qArray[0].answers[1]);
	$('#box3').html(game.qArray[0].answers[2]);
	$('#box4').html(game.qArray[0].answers[3]);
	// starts timer.
	game.timeStart();






})

});