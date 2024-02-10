import React, { useEffect, useState } from "react";

const P = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const f = async () => {
      const react = await fetch(
        "https://api.themoviedb.org/3/movie/157336/videos?api_key=6088909e652a68d74dea929a2e71e37d"
      );
      const data = await react.json();
      console.log(data);
    };
    f();
  }, []);
  return (
    <div>
      <h1>Try</h1>
    </div>
  );
};

export default P;
