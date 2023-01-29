import "../styles/SearchBar.css";

function SearchBar() {
  return (
    <div className="container">
      <input type="text" className="input" />
      <button className="button">Search</button>
    </div>
  );
}

export default SearchBar;
