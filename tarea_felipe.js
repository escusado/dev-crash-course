$(document).ready(function(){
	$('#get').click(function(){
		var object = {
			first: $('#first').val(),
			last: $('#last').val(),
			age: $('#age').val(),
			gender: $('#gender').val()
		};
		console.log(object);
	});
});