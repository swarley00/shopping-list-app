$(document).ready(function(){
	// var input = $(".input-field").val();
	$(document).keydown(function(event){
		if (event.which == 13) {
			$(".shopping-items").prepend("<p>milk</p>");
		}
	});
});