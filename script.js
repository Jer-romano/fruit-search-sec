const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let lcString = str.toLowerCase();
	let results = [];
	fruits.forEach(fruit => {
		let lcFruit = fruit.toLowerCase();
		let index = lcFruit.indexOf(lcString);
		if(index != -1) {
			let piece = fruit.slice(index, index + str.length);
			let hFruit = fruit.replace(piece, `<b>${piece}</b>`);
			results.push(hFruit);
		}
	})
	return results;
}

function searchHandler(e) {
	if(input.value == ""){
		clearSuggestions();
		return;
	} 
	let results = search(input.value);
	//console.log(input.value);
	showSuggestions(results, input.value);
}

function showSuggestions(results, inputVal) {
	clearSuggestions();
	//console.log("Child count: ", suggestions.childElementCount);
	for(let fruit of results) {
		let li = document.createElement("li");
		li.innerHTML = fruit;
		suggestions.append(li);
	}
}

function useSuggestion(e) {
	input.value = e.target.innerText;
	suggestions.innerHTML = "";
}

function clearSuggestions() {
	suggestions.innerHTML = "";
}
function highlightSuggestion(e) {
	e.target.classList.add("hover")
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);

console.log("bilberry".indexOf("ba"));