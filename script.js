const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=delhi';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'f4dfc63b30mshd4ff109b5d699c7p17600bjsnbe1ec1839bd7',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

fetch(url,options)
.then(response=> response.json())
.then((response)=>{
  console.log(response)
  // response=>document.getElementById('cloud_pct').innerHTML=response.
    document.getElementById('cloud_pct').textContent=response.cloud_pct;
    document.getElementById('feels_like').textContent=response.feels_like;
		document.getElementById('humidity').textContent=response.humidity;
		document.getElementById('max_temp').textContent=response.max_temp;
		document.getElementById('min_temp').textContent=response.min_temp;
		document.getElementById('sunrise').textContent=response.sunrise;
		document.getElementById('sunset').textContent=response.sunset;
		document.getElementById('temp').textContent=response.temp;
		document.getElementById('wind_degrees').textContent=response.wind_degrees;
		document.getElementById('wind_speed').textContent=response.wind_speed;
})
// .then()
.catch(err=>console.log(err));

    // temp.innerHTML=response.temp
    // feels_like.innerHTML=response.feels_like
    // humidity.innerHTML=response.humidity
    // min_temp.innerHTML=response.min_temp
    // max_temp.innerHTML=response.max_temp
    // wind_speed.innerHTML=response.wind_speed
    // wind_degrees.innerHTML=response.wind_degrees
    // sunrise.innerHTML=response.sunrise
    // sunset.innerHTML=response.sunset

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }