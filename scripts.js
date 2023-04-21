const NUMBER_COLOR_MAPPING = {
	1: 'faded-blue',
	2: 'dark-blue',
	3: 'saturated-blue',
	4: 'dark-blue',
	5: 'saturated-blue',
	6: 'grey',
	7: 'grey',
	8: 'faded-blue',
	9: 'saturated-blue',
};

const NUMBER_ARRAY_LENGTH = 9;

let renderArray = [];

const shuffleButton = document.querySelector('button.shuffle');
const sortButton = document.querySelector('button.sort');

function createNumberCard(number) {
	const cardElement = document.createElement('div');
	cardElement.className = `card card-color-${ NUMBER_COLOR_MAPPING[number] }`;

	const cardNumberElement = document.createElement('p');
	cardNumberElement.textContent = number;

	cardElement.appendChild(cardNumberElement);

	return cardElement;
}

function renderNumbers(numberArray) {
	const cardContainer = document.querySelector('div.card-container');

	if (cardContainer.hasChildNodes()) {
		numberArray.forEach((number, index) => {
			cardContainer.replaceChild(createNumberCard(number), cardContainer.children[index]);
		});

		return;
	}

	numberArray.forEach((number) => {
		cardContainer.appendChild(createNumberCard(number));
	});
}

function renderDefault() {
	const defaultArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ];
	renderArray = [ ...defaultArray ];

	renderNumbers(renderArray);
}

shuffleButton.addEventListener('click', () => {
	// CREDITS FOR THE SHUFFLE ALGO
	// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
	let currentIndex = NUMBER_ARRAY_LENGTH;

	// While there remain elements to shuffle.
	while (currentIndex != 0) {
	  // Pick a remaining element.
	  const randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [renderArray[currentIndex], renderArray[randomIndex]] = [
		renderArray[randomIndex], renderArray[currentIndex]
	  ];
	}
  
	renderNumbers(renderArray);
});

sortButton.addEventListener('click', () => {
	renderDefault();
});

renderDefault();
