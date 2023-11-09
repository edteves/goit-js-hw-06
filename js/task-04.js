const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counterValueElement = document.getElementById("value");

let counterValue = 0;

function updateCounter() {
	counterValueElement.textContent = counterValue;
}

decrementButton.addEventListener("click", function () {
	// Decrease the counter value
	counterValue--;

	// Update the interface
	updateCounter();
});

incrementButton.addEventListener("click", function () {
	counterValue++;

	updateCounter();
});
