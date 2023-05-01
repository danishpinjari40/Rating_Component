// submit button
let submit_btn = document.getElementById(`submit_btn`);

// Get all <p> elements with class "num"
const ratingNums = document.querySelectorAll('.num');

const num_rating = document.querySelectorAll('.num_rating');

let selectedNum = null; // To keep track of the selected number

// Add event listener to each <p> element
num_rating.forEach((num) => {
	num.addEventListener('click', () => {
		if (selectedNum) {
			selectedNum.style.backgroundColor = 'hsl(214, 20%, 25%)'; // Remove background color from previously selected number
		}
		num.style.backgroundColor = 'hsl(25, 97%, 53%)'; // Set background color of clicked number
		selectedNum = num; // Update the selected number
	});
});

// Add event listener to each <p> element
ratingNums.forEach((num) => {
	num.addEventListener('click', () => {
		// Get the number text content
		const numValue = num.textContent;

		// Save the number to local storage
		localStorage.setItem('rating', numValue);
	});
});

submit_btn.addEventListener('click', (e) => {
	e.preventDefault();

	window.location.href = './thankyou.html';
});
