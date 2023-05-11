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
	let lowerCaseStr = str.toLowerCase();
	return fruits.filter(fruit => { //returns array of fruits that contain the substring
		let lowerCaseFruit = fruit.toLowerCase();
		return (lowerCaseFruit.indexOf(lowerCaseStr) != -1);
	});
}

//Boldens the portion of the suggestion that matches the entered string
function boldenMatchingLetters(results, str) {
	let lowerCaseStr = str.toLowerCase();
	return results.map(fruit => { //iterate through fruits array
			let index = fruit.toLowerCase().indexOf(lowerCaseStr);
			let piece = fruit.slice(index, index + str.length); //portion of string to bolden
			return fruit.replace(piece, `<b>${piece}</b>`);
	});
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
	showSuggestions(boldenMatchingLetters(results, input.value), input.value);
}

/**
 * This function takes the results array returned by the search function and displays every
 * entry as a list element
 */
function showSuggestions(results) {
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

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);
