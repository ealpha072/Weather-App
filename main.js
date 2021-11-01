//DOM ELEMENTS
const search = document.getElementById('search');
const msg = document.querySelector('.error-message');
const form  = document.querySelector('.form form');

const apiKey = '5ed29308b431d4ab2d33d5b101687671';

form.addEventListener('submit',e=>{
	e.preventDefault();
	const rowDiv = document.querySelector('.row')
	const inputValue = document.getElementById('value').value
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
	fetch(url).then(function(response){
		return response.json()
	}).then(function(data){
		const {main, name, sys, weather} = data;
		const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

		const card = 
		`
			<div class="card">
				<div class="card-header">
					<h5 class="city-name" data-name="${name},${sys.country}"><span>${name}</span></h2>
				</div>
				<div class="card-body">
					${Math.round(main.temp)}<sup>°C</sup>
					<figure>
						<img class="city-icon" src="${icon}" alt="${weather[0]["main"]}">
					</figure>
				</div>
				<div class="card-footer">
					<figcaption><h5>${weather[0]["description"]}</h5></figcaption>
				</div>
			</div>
		` 
		/*
		const ul = document.createElement('ul');
		const listItem = document.createElement('li');
			listItem.setAttribute('class','city');
		const colDiv = document.createElement('div');
			colDiv.setAttribute("class","col-6 col-md-2 col-sm-4 col-xs-6 weather-card")
			//col-6 col-md-2 col-sm-4 col-xs-6
		const listContent =
		`	<h2 class="city-name" data-name="${name},${sys.country}">
				<span>${name}</span>
			</h2>
			<div class="temp">
				${Math.round(main.temp)}<sup>°C</sup>
			</div>
			<figure>
				<img class="city-icon" src="${icon}" alt="${weather[0]["main"]}">
				<figcaption><h5>${weather[0]["description"]}</h5></figcaption>
			</figure>
		`;

		listItem.innerHTML = listContent;
		ul.appendChild(listItem);
		colDiv.appendChild(ul);*/

		rowDiv.appendChild(card);	
		msg.innerHTML = "";
		form.reset();
		//input.focus();	
	}).catch(function(){
		msg.innerHTML = "Enter a valid city";
	})
})