var view = [];

function storeNumber(value) {
	view.push(value);
	var newView = view.join("");
	console.log(newView);
	document.getElementById('display').value=newView;
}
function removeNumber() {
	view.pop();
	var newView = view.join("");
	console.log(newView);
	document.getElementById('display').value=newView;
}
function callNumber() {
	if(view.length == 10) {
		if(view[0] == 7 || view[0] == 8 || view[0] == 9) {
			alert("Calling " + view.join(""));
		} else {
			alert("Number should start from 7 or 8 or 9");
		}
	} else {
		alert("Please enter 10 digit number");
	}
}