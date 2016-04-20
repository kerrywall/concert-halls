var quiz = {};

// EDIT THIS.
// The answers should be IDENTICAL to the correct answer as you coded it in the HTML. This means punctuation and all. 

quiz.answers = {
	1: 'De Doelen, Rotterdam',
	2: 'Romanian Athenaeum, Bucharest',
	3: "Palau de la Música Concert Hall, Barcelona",
	4: "Walt Disney Concert Hall, L.A.",
	5: "Tchaikovsky Concert Hall, Moscow",
	6: "Koncerthuset, Copenhagen",
	7: "Sydney Opera House",
	8: "Koerner Hall, Toronto",
	9: "Konzerthaus Berlin",
	10: "Carnegie Hall, New York"
	// if you need to add more answers, do it using this format. DO NOT include a comma after the last one.
}

quiz.photos = {
	1: 'https://www.flickr.com/photos/snofla/1719131/',
	2: 'https://www.flickr.com/photos/fusion_of_horizons/16247905539/',
	3: 'https://www.flickr.com/photos/ok-apartment/8956873595/',
	4: 'https://www.flickr.com/photos/dwhartwig/10920365386/',
	5: 'https://www.flickr.com/photos/witlessbird/3271820838/',
	6: 'https://www.flickr.com/photos/jonathanrieke/8845589072/',
	7: 'https://www.flickr.com/photos/sidneiensis/13964018008/',
	8: 'https://www.flickr.com/photos/silkcut/3993318564/',
	9: 'https://www.flickr.com/photos/simsullen/1482678647',
	10: 'https://www.flickr.com/photos/36302473@N03/8457145287'
}

// STOP EDITING

quiz.thisQ = 1;
quiz.quizLength = $('.question').length;
quiz.score = 0;

quiz.init = function() {
	$('.question').hide();
	$('.answers').hide();
	$('.q1').show();
}

quiz.engine = function(e) {
	response = e.target.innerHTML;
	if (response == quiz.answers[quiz.thisQ]) {
		$('#result').html("Correct. ").removeClass().addClass('right');
		quiz.score++;
	} else {
		$('#result').html("Nope. The right answer is " + quiz.answers[quiz.thisQ] + ". ").removeClass().addClass('wrong');
	}
	$('#result').append("Your score is " + quiz.score + "/" + quiz.thisQ + ".");
	$('.q'+quiz.thisQ).hide();
	quiz.thisQ++;
	
	if (quiz.thisQ <= quiz.quizLength) {
		$('.q' + quiz.thisQ).show();
	} else {
		$('.answers').show();
		for (i = 0; i <= quiz.quizLength; i++) {
			$('.a' + i).html("A: <a href='" + quiz.photos[i] + "' target='_blank'>"+ quiz.answers[i] + "</a>");
		}
	}
}

// make it go
$('document').ready(function() {
	quiz.init();
});

$('li').on('click', function(e) {
	quiz.engine(e);
});

$('.toggle').on('click', function() {
	$('.fine-print').slideToggle();
	$('.toggle').toggleClass('open');
	if ($('.toggle').hasClass('open')) {
		$('.toggle').text('Hide the fine print');
	} else {
		$('.toggle').text('Read the fine print');
	}
});