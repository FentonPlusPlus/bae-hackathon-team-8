import "./App.css";
import Form from "./components/Form";
import ProgressBar from "./components/ProgressBar/index.js";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import TeamStats from "./components/TeamStats";

function App() {
  // const [progressValue, setProgressValue] = useState(50);

  const [points, setPoints] = useState();

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch("http://localhost:3000/api/points");
    const data = await response.json();
    setPoints(data.payload[0][0].points);
  }

  async function onClickHandler(data) {
    await getData();

    let total = Number(data) + Number(points);
    setPoints(total);
    let dataObject = { points: total };

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
      <Nav />
      <Header />
      <ProgressBar points={points}></ProgressBar>
      <div className="formteam-div">
        <Form onClickHandler={onClickHandler} />
        <TeamStats points={points} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
