// Define elements
const searchBar = document.querySelector('#searchBar');
const searchBtn = document.querySelector('#searchBtn');

const locationDisplay = document.querySelector('#location');

const date = document.querySelector('#date');
const weather = document.querySelector('#weatherStateMain');
const temperature = document.querySelector('#temperatureMain');
const wind = document.querySelector('#windSpeedMain');

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

// On click
searchBtn.onclick = () => renderData(searchBar.value);

async function getData(value) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=35889e2acf3220fd70ceb15b0d5d0601`;
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
  console.log(data.main.temp);
}
