$(document).ready(function(){
	$('.add-btn').click(function(){
		var listvalue = $('.input-field').val();
		$('.shopping-items').append('<li><p>' + listvalue + '</p></li>');
	});

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