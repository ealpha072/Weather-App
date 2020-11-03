//DOM ELEMENTS
const search = document.getElementById('search');
const msg = document.querySelector('.error-message');
const form  = document.querySelector('.form form');


const apiKey = '5ed29308b431d4ab2d33d5b101687671';

form.addEventListener('submit',e=>{
	e.preventDefault();
	const cityList = document.querySelector('.cities');
	const inputValue = document.getElementById('value').value
	const url =`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
	fetch(url).then(function(response){
		return response.json()
	}).then(function(data){
		console.log(data);
		const {main, name, sys, weather} = data;
		const icon =
		 `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;

		const listItem = document.createElement('li');
			listItem.setAttribute('class','city');

		const listContent =
		`	<h2 class="city-name" data-name="${name},${sys.country}">
				<span>${name}</span>
				<sup>${sys.country}</sup>
			</h2>
			<div class="temp">
				${Math.round(main.temp)}<sup>°C</sup>
			</div>
			<figure>
				<img class="city-icon" src="${icon}" alt="${weather[0]["main"]}">
				<figcaption>${weather[0]["description"]}</figcaption>
			</figure>
		`;
		listItem.innerHTML = listContent;
		cityList.appendChild(listItem);
	}).catch(function(){
		msg.innerHTML = "Enter a valid city";
	})
})
 
