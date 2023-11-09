const ingredients = [
	"Potatoes",
	"Mushrooms",
	"Garlic",
	"Tomatos",
	"Herbs",
	"Condiments",
];

const ulElement = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
	const liElement = document.createElement("li");

	liElement.textContent = ingredient;

	liElement.classList.add("item");

	ulElement.appendChild(liElement);
});

const title = document.createElement("h2");
title.textContent = "Ingredients";
title.style.textTransform = "uppercase";
ulElement.before(title);
