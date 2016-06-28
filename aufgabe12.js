

$("#tab-git").DataTable({
	"ajax" : "aufgabe12.json"
});



$(document).ready(function() {
	$('.tooltip').tooltipster();
});


$("#tt-clone").tooltipster({
	content: $("#tt-clone-content").detach()
});

$("#tt-add").tooltipster({
	content: $("#tt-add-content").detach()
});

$("#tt-commit").tooltipster({
	content: $("#tt-commit-content").detach()
});

$("#tt-push").tooltipster({
	content: $("#tt-push-content").detach()
});

$("#tt-pull").tooltipster({
	content: $("#tt-pull-content").detach()
});

