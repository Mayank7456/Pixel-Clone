import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Saved from './components/Saved';
import axios from 'axios';

const App = () => {
  const [images, setImages] = useState([]);
  const [search, setSearch] = useState("Nature");
  const [loader, setLoader] = useState(true);
  const [saved, setSaved] = useState([]);


  const API_KEY = `POkSSjQ6QSjvgVEARNprKquGjwzZqTUp1W9LQr7puaEBy3dtWsDMsVon`;

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(
          `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
          {
            headers: {
              Authorization: API_KEY,
            },
          }
        );
        setImages(res.data.photos);
        setLoader(false);
        console.log("Response From API:", res.data.photos);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImage();
  }, [search]);

  console.log('image saved',saved);



  return (
    <Router>
      <Navbar setSearch={setSearch} />
      <Routes>
        <Route path="/" 
        element={<Home 
        images={images}
         loader={loader}
          saved={saved}
           setSaved={setSaved} />} />
        <Route path="/saved" element={<Saved  saved={saved} loader={loader} />} />
      </Routes>
    </Router>
  );
};

export default App;
