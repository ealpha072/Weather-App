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
			
		}).catch(()=>{
			$('.error-div').html()
		})
	})
})