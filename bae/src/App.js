import logo from './logo.svg';
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

  return (
    <div className="App">
      <Form onClickHandler={onClickHandler}/>
    </div>
  );
}

export default App;
