$(document).ready(function(){
	var shoppingList = $(".shopping-items");
	var checkmarkBox = "<div class='checkmark'><img class='check' src='images/checkmark.png'></div>";
	var delBtn = "<button class='del-btn' type='button'>DEL</button>";
	var addBtn = $(".add-btn");

	//When the Add Button is clicked, a list item with the input field's value is added to the page.
	addBtn.click(function(){
		addItem();
	});

	//When a list item is clicked, the checkmark image toggles on and the selected class is added to the paragraph text. If the toggle is clicked off the selected class is removed.
	shoppingList.on("click", ".checkmark", function(event){
		$(this).find(".check").toggle();
		if ($(".check").is(":visible")) {
			$(this).closest("li").find(".item").addClass("selected");
		} 
		else {
			$(this).closest("li").find(".item").removeClass("selected");
		} 
	});

	//When the Delete Button is clicked on a list item remove that list item.
	shoppingList.on("click", ".del-btn", function(event){
		$(this).closest("li").remove();
	});

	//When the Enter Key is pressed a new list item is created with the input field's value.
	$(document).keydown(function(event){
		var listitem = $('.input-field').val();
		if (event.which == 13) {
			event.preventDefault();
			addItem();
		}
	});
});

//When called above, adds the list item with the input field's value.
function addItem() {
	var shoppingList = $(".shopping-items");
	var checkmarkBox = "<div class='checkmark'><img class='check' src='images/checkmark.png'></div>";
	var delBtn = "<button class='del-btn' type='button'>DEL</button>";
	var listvalue = $(".input-field").val();
	shoppingList.append("<li>" + checkmarkBox + "<p class='item'>" + listvalue + "</p>" + delBtn + "</li>");
}