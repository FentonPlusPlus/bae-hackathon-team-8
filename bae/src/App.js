import "./App.css";
import Form from "./components/Form";
import ProgressBar from "./components/ProgressBar";
import { useState, useEffect } from "react";
import Header from "./components/Header";

function App() {
  const [progressValue, setProgressValue] = useState(50);

  const [points, setPoints] = useState(null);

  useEffect(() => {getData()}, []);

  async function getData() {
    const response = await fetch("https://bae.onrender.com/api/points");
    const data = await response.json();
    setPoints(data);
  }

  async function onClickHandler(data) {
    let dataObject = { points: Number(data) };

    await fetch("http://localhost:3000/api/points/1", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
    });
  }

  return (
    <div className="App">
      <Header />
      <ProgressBar progressValue={progressValue}></ProgressBar>
      <Form onClickHandler={onClickHandler} />
    </div>
  );
}

export default App;
