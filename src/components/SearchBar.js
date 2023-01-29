import "../styles/SearchBar.css";
import axios from "axios";

let lat = 0;
let lon = 0;

async function fetchCityGeolocation() {
  try {
    const res = await axios({ method: "get", url: `http://api.openweathermap.org/geo/1.0/direct?q=Zagreb&limit=1&appid=${process.env.REACT_APP_API_KEY}` });
    lat = res.data[0].lat;
    lon = res.data[0].lon;
  } catch (e) {
    console.error(e);
  }
}

async function fetchWeather() {
  try {
    await fetchCityGeolocation();
    const res = await axios({
      method: "get",
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`,
    });
    console.log(res.data);
  } catch (e) {
    console.log(e);
  }
}

function SearchBar() {
  return (
    <div className="container">
      <input type="text" className="input" />
      <button className="button" onClick={fetchWeather}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
