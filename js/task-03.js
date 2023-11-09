const images = [
	{
		url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "White and Black Long Fur Cat",
	},
	{
		url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Orange and White Koi Fish Near Yellow Koi Fish",
	},
	{
		url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
		alt: "Group of Horses Running",
	},
];

const galleryElement = document.querySelector(".gallery");

// Generate HTML markup for the gallery
const galleryMarkup = images
	.map(
		(image) => `
  <li class="gallery-item">
    <img src="${image.url}" alt="${image.alt}" class="gallery-image">
  </li>
`
	)
	.join("");

// Add the gallery markup to the DOM in one insert operation
galleryElement.insertAdjacentHTML("beforeend", galleryMarkup);

const styles = `
  .gallery {
    display: flex;
    list-style: none;
    padding: 0;
  }

  .gallery-item {
    margin: 10px;
    border: 5px solid orange;
  }

  .gallery-image {
    width: 100%;
    height: auto;
  }
`;

const styleElement = document.createElement("style");
styleElement.textContent = styles;

// Append the style element to the document's head
document.head.appendChild(styleElement);
