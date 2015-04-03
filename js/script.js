$(document).ready(function(){
	var shoppingList = $(".shopping-items");
	var checkmarkBox = "<div class='checkmark'><img class='check' src='images/checkmark.png'></div>";
	var delBtn = "<button class='del-btn' type='button'>DEL</button>";

	//When the Add Button is clicked, a list item with the input field's value is added to the page.
	$(".add-btn").click(function(){
		var listvalue = $(".input-field").val();
		shoppingList.append("<li>" + checkmarkBox + "<p class='item'>" + listvalue + "</p>" + delBtn + "</li>");
	});

	//When a list item is clicked, the checkmark image toggles on and the selected class is added to the paragraph text. If the toggle is clicked off the selected class is removed.
	//1. Only apply .selected class to the toggled .item class.
	//2. Remove list items.

	shoppingList.on("click", ".checkmark", function(event){
		$(this).find(".check").toggle();
		if ($(".check").is(":visible")) {
			$(this).closest("li").find(".item").addClass("selected");
		} 
		else {
			$(this).closest("li").find(".item").removeClass("selected");
		} 
	});

	// shoppingList.on("click", ".checkmark", function(event){
	// 	$(this).find(".check").toggle();
	// 	if ($(".check").is(":visible")) {
	// 		$("li").find(".item").addClass("selected");
	// 	} 
	// 	else {
	// 		$("li").find(".item").removeClass("selected");
	// 	} 
	// });

	//Add the same functionality as the add button above, but with the enter key.
	//After everything is working clean up the code by adding everything into a function and passing the function to each event.
	//Also, make the code more efficient by making jQuery objects into variables and using the variables.
	$(document).keydown(function(event){
		var listitem = $('.input-field').val();
		if (event.which == 13) {
			alert(listitem);
		}
	});
});