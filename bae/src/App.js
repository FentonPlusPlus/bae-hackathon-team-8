import './App.css';
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
