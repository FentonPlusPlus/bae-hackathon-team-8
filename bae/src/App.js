import './App.css';
import Form from './components/Form';

function App() {

  async function onClickHandler(data){
    let dataObject = {points: data} 
    
    await fetch('https://bae.onrender.com/api/points/1' , {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObject),
    })
  }


import ProgressBar from './components/ProgressBar';
import { useState } from 'react';

function App() {
  const [progressValue, setProgressValue] = useState(50);
  
  return (
    <div className="App">
      <ProgressBar progressValue={progressValue}></ProgressBar>

    </div>
  );
}

export default App;
