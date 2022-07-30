// Define elements
const searchBar = document.querySelector('#searchBar');
const searchBtn = document.querySelector('#searchBtn');

const locationDisplay = document.querySelector('#location');

const date = document.querySelector('#date');
const weather = document.querySelector('#weatherStateMain');
const temperature = document.querySelector('#temperatureMain');
const tempFeel = document.querySelector('#feel');
const humidity = document.querySelector('#humidityMain');
const wind = document.querySelector('#windSpeedMain');
const pressure = document.querySelector('#pressureMain');

const weather1 = document.querySelector('#weatherStateDay1');
const temp1 = document.querySelector('#temperatureDay1');
const humidity1 = document.querySelector('#humidityDay1');
const weather2 = document.querySelector('#weatherStateDay2');
const temp2 = document.querySelector('#temperatureDay2');
const humidity2 = document.querySelector('#humidityDay2');
const weather3 = document.querySelector('#weatherStateDay3');
const temp3 = document.querySelector('#temperatureDay3');
const humidity3 = document.querySelector('#humidityDay3');
const weather4 = document.querySelector('#weatherStateDay4');
const temp4 = document.querySelector('#temperatureDay4');
const humidity4 = document.querySelector('#humidityDay4');
const weather5 = document.querySelector('#weatherStateDay5');
const temp5 = document.querySelector('#temperatureDay5');
const humidity5 = document.querySelector('#humidityDay5');

let mode = 'celsius';

// On click
searchBtn.onclick = () => renderData(searchBar.value);

async function getData(value) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=REPLACE_WITH_YOUR_OWN_KEY`;
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
  console.log(res);
}

async function renderData(value) {
  let data = await getData(value);
  console.log(data);

  todayString = `${new Date()}`;
  today = new Date();

  locationDisplay.innerHTML = `${data.name}, ${data.sys.country}`;
  date.innerHTML = `${todayString.slice(0, 3)} ${today.getDate()}.${
    today.getMonth() + 1
  }.${today.getFullYear()}.`;

  weather.innerHTML = `${data.weather[0].main}`;

  if (mode == 'celsius') {
    temperature.innerHTML = `${ktoc(data.main.temp)}&#176;C`;
    tempFeel.innerHTML = `Feels Like: ${ktoc(data.main.feels_like)}&#176;C`;
    wind.innerHTML = `Wind: ${Math.round(
      (data.wind.speed * 3.6 * 10) / 10
    )} km/h`;
  } else if (mode == 'farenheit') {
    temperature.innerHTML = `${ktof(data.main.temp)}&#176;F`;
    tempFeel.innerHTML = `Feels Like: ${ktof(data.main.feels_like)}&#176;F`;
    wind.innerHTML = `Wind: ${data.wind.speed} m/s`;
  }
  humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
  pressure.innerHTML = `Pressure: ${data.main.pressure} hPa`;
}

function ktof(temp) {
  return Math.round((1.8 * (temp - 273) + 32) * 10) / 10;
}

function ktoc(temp) {
  return Math.round((temp - 273.15) * 10) / 10;
}
