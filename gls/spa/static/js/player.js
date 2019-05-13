$.getJSON("{% static  'json/guide.json' %}", function(data) {
	for (var i=0;i<data.steps.length;i++){
		$(data.steps[i].selector).addClass('tooltipped');
		$(data.steps[i].selector).attr('data-toggle', 'tooltip');
		$(data.steps[i].selector).attr('title', data.steps[i].content);
	}

});


$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});
