import "./App.css";
import Form from "./components/Form";
import ProgressBar from "./components/ProgressBar";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from './components/Nav';

function App() {
  const [progressValue, setProgressValue] = useState(50);

  async function onClickHandler(data) {
    let dataObject = { points: data };

    await fetch("https://bae.onrender.com/api/points/1", {
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
      <Header/>
      <ProgressBar progressValue={progressValue}></ProgressBar>
      <Form onClickHandler={onClickHandler} />
      <Footer />
    </div>
  );
}

export default App;
