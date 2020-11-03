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
			listItem.setAttribute('class':'city');

		const content =`
			<h2 class='text-center'></h2>

		`
	}).catch(function(){
		msg.innerHTML = "Enter a valid city";
	})
})
 
