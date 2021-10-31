import "./App.css";
import Button from "./components/Button";
import Display from "./components/Display";
import Header from "./components/Header";
import React from "react";

function App() {
  const [gif, setGif] = React.useState({});

  const getGiphy = async () => {
    const apiKey = "aAF3zjr1sBfmWDzMeivMUtvzhLTSVqe6";
    const gif = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

    const response = await fetch(gif);

    const data = await response.json();

    setGif(data.data);
  };

  return (
    <div className="App">
      <Header />
      <Button randomGif={getGiphy} />
      <Display gif={gif} />
    </div>
  );
}

export default App;
