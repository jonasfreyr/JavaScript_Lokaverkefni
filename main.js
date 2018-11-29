let request = new XMLHttpRequest();

request.open("GET", 'http://apis.is/concerts', true);

request.onload = function(){

	let raw = JSON.parse(this.response);

	let data = raw.results;
}

request.send();
