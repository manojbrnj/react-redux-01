import Search from './components/Search';
import { useState } from 'react';
import '../src/index.css';
import ImageList from './components/ImageList';
import axios from 'axios';
function App() {
  const [ListOfImages, setListOfImages] = useState([]);
  const images = async (text) => {
    const result = await searchResult(text);
    setListOfImages(result.data.results);
    console.log(result);
    return result;
  };

  const searchResult = async (text) => {
    const res = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID itBlfDQSl2iGXYwLTpHsgbLXLPMAr4a3F3tWlISocOw',
        AccessControlAllowOrigin: '*',
      },
      params: {
        query: text,
      },
    });

    return res;
  };
  return (
    <div className="App">
      <Search searchText={images}></Search>
      <ImageList listOfImages={ListOfImages}></ImageList>
    </div>
  );
}

export default App;
