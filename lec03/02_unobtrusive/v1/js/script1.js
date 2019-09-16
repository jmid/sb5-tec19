/* eslint-env es6, browser */
/* eslint no-console: 0 */
window.onload = () => {
	let button = document.getElementById("theButton");
	button.addEventListener("click", () => {
		document.getElementById("theOutput").innerHTML += "<br/>Button clicked.";
		console.log("Button clicked.");
	});
};