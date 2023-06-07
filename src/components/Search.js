import { useState } from 'react';

export default function Search({ searchText }) {
  const [text, settext] = useState('');
  const HandleChange = (event) => {
    settext(event.target.value);
  };

  const HandleSubmit = (event) => {
    event.preventDefault();
    searchText(text);
  };
  return (
    <div className="search-bar-container">
      <form onSubmit={HandleSubmit} className="search-bar">
        <div className="form-control">
          <input
            className="input-text"
            type="text"
            name="serach"
            id="searchBar"
            value={text}
            onChange={HandleChange}
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
