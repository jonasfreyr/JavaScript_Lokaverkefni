let request = new XMLHttpRequest();
let texts = ['dateOfShow', 'eventDateName', 'eventHallName', 'name', 'userGroupName'];

request.open("GET", 'http://apis.is/concerts', true);

function sort_by_date(list){
	let sorted = list.sort(function(a, b){
		if(a.dateOfShow > b.dateOfShow){
			return -1;
		}

		else{
			return 1;
		}
	});

	return sorted;
}

function empty_screen(data){
		document.body.innerHTML = "";
		
}

function display_data(data){
	empty_screen();
	let div, img, p, text;
	for(let a of data){
		//console.log(a);
		
		div = document.createElement('div');

		img = document.createElement('img');

		for(let b of texts){
			p = document.createElement('p');

			text = document.createTextNode(a[b]);

			p.append(text);

			div.append(p);
		}

		img.src = a.imageSource;

		div.append(img);

		document.body.append(div);

	}
}

request.onload = function(){

	let raw = JSON.parse(this.response);

	let data = raw.results;

	document.body.addEventListener("click", function(){
		data = sort_by_date(data);
		display_data(data);
	});

	//data = sort_by_date(data);

	console.log(data);

	display_data(data);
}

request.send();
