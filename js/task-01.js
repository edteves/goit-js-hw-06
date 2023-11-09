const categoriesElements = document.querySelectorAll(".item");
console.log("Number of categories:", categoriesElements.length);

categoriesElements.forEach((el) => {
	const categoryName = el.firstElementChild.textContent;
	console.log("Category:", categoryName);

	const categoryTypesList = el.lastElementChild;
	const categoryTypesLenght = categoryTypesList.children.length;
	console.log("Elements", categoryTypesLenght);
});

// const list = document.querySelectorAll("#categories");
// const listChildrenCount = list.children.length;

// console.log(`Number of categories:', ${listChildrenCount}`);

// const listItems = document.querySelectorAll(".item");

// listItems.forEach((listItem) => {
// 	console.log(`Category: ${listItem.firstElementChild.textContent}`);
// 	console.log(`Elements: ${listItem.lastElementChild.childElementCount}`);
// });
