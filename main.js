//DOM ELEMENTS
/*
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
		

		rowDiv.appendChild(card);	
		msg.innerHTML = "";
		form.reset();
		//input.focus();	
	}).catch(function(){
		msg.innerHTML = "Enter a valid city";
	})
})*/
const apiKey = '5ed29308b431d4ab2d33d5b101687671';
let resultsHolder = $('#search-results')


$(function(){

	$("form").submit((e)=>{
		e.preventDefault()
		let inputValue = $('input').val()
		const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}&units=metric`
		fetch(url).then((response)=>{
			return response.json()
		}).then(data=>{
			console.log(data)
			const {main, name, sys, weather} = data
			const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`

			let card = `<div class="card col-lg-2 col-md-3 col-sm-4 col-6 mb-2 ">
				<div class="card-title">
					<h4 class="city-name">${name +', '+sys.country}</h4>
				</div>
				<div class="card-body">
					<h6>${Math.round(main.temp)}<sup>°C</sup></h6>
					<figure>
						<img src="${icon}" alt="${weather[0]["main"]}">
						<figcaption>
							${weather[0]["description"]}
						</figcaption>
					</figure>
				</div>
			</div>`
			resultsHolder.append(card)
		}).catch(()=>{
			$('.error-div').html('<h6 class="text-danger">Enter a valid city name</h6>')
		})
	})
})
