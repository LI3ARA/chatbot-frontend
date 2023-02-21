/**
 * Returns the current datetime for the message creation.
 */
function getCurrentTimestamp() {
	return new Date();
}

/**
 * Renders a message on the chat screen based on the given arguments.
 * This is called from the `showUserMessage` and `showBotMessage`.
 */
function renderMessageToScreen(args) {
	// local variables
	let displayDate = (args.time || getCurrentTimestamp()).toLocaleString('en-IN', {
		month: 'short',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
	});
	let messagesContainer = $('.messages');

	// init element
	let message = $(`
	<li class="message ${args.message_side}">
		<div class="avatar"></div>
		<div class="text_wrapper">
			<div class="text">${args.text}</div>
			<div class="timestamp">${displayDate}</div>
		</div>
	</li>
	`);

	// add to parent
	messagesContainer.append(message);

	// animations
	setTimeout(function () {
		message.addClass('appeared');
	}, 0);
	messagesContainer.animate({ scrollTop: messagesContainer.prop('scrollHeight') }, 300);
}

/**
 * Displays the user message on the chat screen. This is the right side message.
 */
function showUserMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'right',
	});
}

/**
 * Displays the chatbot message on the chat screen. This is the left side message.
 */
function showBotMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		message_side: 'left',
	});
}
function showBotLessonMessage(message, datetime) {
	renderMessageToScreen({
		text: message,
		time: datetime,
		message_side: 'left',
	});
}
let papers;
let /**
 * Get input from user and show it on screen on button click.
 */
$('#send_button').on('click', function (e) {
	//Store the user value
	papers =$('#msg_input').val();


	// get and show message and reset input
	showUserMessage($('#msg_input').val());
	$('#msg_input').val('');

	// show bot message
	setTimeout(function () {
		console.log(typeof papers)
		showBotMessage(randomstring());t
	}, 300);
});

function generateAListOfLessons(){
	let listOfLessons = [];
	if (papers === '1'){
		listOfLessons.concat('introduction to computer')
	}
}

/**
 * Returns a random string. Just to specify bot message to the user.
 */
function randomstring(length = 20) {
	let output = '';

	// magic function
	var randomchar = function () {
		var n = Math.floor(Math.random() * 62);
		if (n < 10) return n;
		if (n < 36) return String.fromCharCode(n + 55);
		return String.fromCharCode(n + 61);
	};

	while (output.length < length) output += randomchar();
	return output;
}

//A function to display buttons to the user
function showBotMessageButton(){
}

/**
 * Set initial bot message to the screen for the user.
 */
$(window).on('load', function () {
	showBotLessonMessage("Hello there! Please select the lessons you want questions from<br>1. introduction to computer<br>2. concept of it<br>3. data representation<br>4. data communication and networking<br>5. database management<br>6. system analysis and design<br>7. web programming<br>8. computer operating system<br>9. programming fundamentals<br>10. fundamental of digital circuits it in business<br>11. new trends and future directions of it<br>12. internet of things<br>13. web development<br>14. fundamentals of digital circuits");
});
