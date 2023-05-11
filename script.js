const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

/**
 * This search function uses the forEach method to iterate through the fruits array. It finds the
 * fruits that contain the string parameter (str) and then boldens that portion of the fruit string
 * @param {*} str 
 * @returns results array
 */
function search(str) {
	let lcString = str.toLowerCase();
	let results = [];
	fruits.forEach(fruit => { //iterate through fruits array
		let lcFruit = fruit.toLowerCase();
		let index = lcFruit.indexOf(lcString); //check if fruit contains substring
		if(index != -1) {
			let piece = fruit.slice(index, index + str.length); //portion of string to bolden
			results.push(fruit.replace(piece, `<b>${piece}</b>`));
		}
	});
	return results;
}

/**
 * This callback function is run every time a character is added or deleted in the search bar
 */
function searchHandler(e) {
	if(input.value == ""){
		clearSuggestions();
		return;
	} 
	let results = search(input.value);
	showSuggestions(results, input.value);
}

/**
 * This function takes the results array returned by the search function and displays every
 * entry as a list element
 */
function showSuggestions(results, inputVal) {
	clearSuggestions(); //clear suggestions from previous keyup 
	for(let fruit of results) { //create an li for every matching fruit
		let li = document.createElement("li");
		li.innerHTML = fruit; //innerHTML because of bold tags
		suggestions.append(li);
	}
}

//replaces the text in the search bar with the suggestion that the user clicks on
function useSuggestion(e) {
	input.value = e.target.innerText; //sets text of search bar
	suggestions.innerHTML = ""; //clears suggestion list
}

//clears the search bar
function clearSuggestions() {
	suggestions.innerHTML = "";
}
//highlights a suggestion when a user hovers over it
function highlightSuggestion(e) {
	e.target.classList.add("hover")
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
