function validation(){
	var input_text = document.querySelector("#input_text");
	var input_password = document.querySelector("#input_password");
	var error_msg = document.querySelector(".error_msg");

	if(input_text.value.length <= 4 || input_password.value.length <= 4 ){
		error_msg.style.display = "inline-block";
		input_text.style.border = "1px solid #e61616";
		input_password.style.border = "1px solid #910404";
		return false;
	}
	else{
		return true;
	}
	
}
/* the validation function is used for validating the string for the the length check and with the regex, if it follows that.
the text field color will be changed if the validation function returns false or any condition get unmatched.
so the password validation depends on the size of the string and whether it passes from the regex */

var input_fields = document.querySelectorAll(".input");
var login_btn = document.querySelector("#login_btn");

input_fields.forEach(function(input_item){
	input_item.addEventListener("input", function(){
		if(input_item.value.length > 3){
			login_btn.disabled = false;
			login_btn.className = "btn enabled"
		}
	})
})
