import { useState } from 'react';
import SearchBar from './componets/SearchBar';
import ImageList from './componets/ImageList';
import searchImages from './api';


function App() {
    const [images, setImages] = useState([]);

    const handleSubmit = async (term) => {
       const result = await searchImages(term); //use async and await to tell the browser to wait for the images to load first


       setImages(result);
    };

    return (
        <div>
            <SearchBar onSubmit={handleSubmit} />
            <ImageList images={images} />
        </div>
    )
}

export default App;