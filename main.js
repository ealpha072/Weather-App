
const search = document.getElementById('search');
const msg = document.querySelector('.message');
const form  = document.querySelector('.form form')
//get weather info


const apiKey = '5ed29308b431d4ab2d33d5b101687671';
//const url =`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`

form.addEventListener('submit',e=>{
	e.preventDefault();
	const inputValue = document.getElementById('value').value
	const url =`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${apiKey}`
	fetch(url).then(function(response){
		return response.json()
	}).then(function(data){
		console.log(data)
	}).catch(function(){
		msg.innerHTML = "Enter a valid city";
	})
})
