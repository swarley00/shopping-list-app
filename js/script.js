$(document).ready(function(){
	var shoppingList = $(".shopping-items");
	var checkmark = "<img src='images/checkmark.png'>";
	var checkmarkBox = "<div class='checkmark'></div>";

	$(".add-btn").click(function(){
		var listvalue = $(".input-field").val();
		var delBtn = "<button class='del-btn' type='button'>DEL</button>";
		shoppingList.append("<li>" + checkmarkBox + "<p class='item'>" + listvalue + "</p>" + delBtn + "</li>");
	});

	// shoppingList.on("click", checkmarkBox, function(event){
	// 	checkmarkBox.append(checkmark);
	// }

	$(document).keydown(function(event){
		var listitem = $('.input-field').val();
		if (event.which == 13) {
			alert(listitem);
		}
	});
});



//Things I've tried for the click function
// var listitem = $('<li><div class="checkmark"><img src="images/checkmark.png"></div>
// 			      <p class="item selected">' + listvalue + '</p><button class="del-btn" type="button">DEL</button>
// 				  </li>');
// $('.shopping-items').append(listitem);
// alert(listitem);


//Things I've tried for the keydown function
// e.preventDefault();
// $('.shopping-items').append("<li><p>" + listitem + "</p></li>");