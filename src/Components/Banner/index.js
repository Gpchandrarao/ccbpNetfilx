import React, { useEffect, useState } from "react";
import "./index.css";
import axios from "../Axios";
import requests from "../Requst";
const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetcheData = async () => {
      const response = await axios.get(requests.fetchNetfilxOriginals);
      const data = await response.data.results;
      const randomData = data[Math.floor(Math.random() * data.length - 1)];
      console.log(randomData);
      setMovie(randomData);
    };
    fetcheData();
  }, []);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  //   const bg = movie.backdrop_path;
  //   console.log(bg)
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-dis">{truncate(movie?.overview, 50)}</h1>
      </div>
      <div className="banner-fadeBottom" />
    </header>
  );
};

export default Banner;
