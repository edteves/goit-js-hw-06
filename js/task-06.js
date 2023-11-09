const validationInput = document.getElementById("validation-input");

validationInput.addEventListener("blur", function () {
	const enteredValue = validationInput.value.trim();
	const dataLength = parseInt(validationInput.getAttribute("data-length"), 10);

	if (enteredValue.length === dataLength) {
		validationInput.classList.add("valid");
		validationInput.classList.remove("invalid");
	} else {
		validationInput.classList.add("invalid");
		validationInput.classList.remove("valid");
	}
});
