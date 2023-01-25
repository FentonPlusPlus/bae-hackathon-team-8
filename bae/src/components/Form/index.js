import "./index.css";
import { useRef, useState } from "react";

function Form({onClickHandler}) {
 const [pointsMessage, setPointsMessage] = useState()
 const activityDropDown = useRef()
  const activityArray = [
    ["closing computer screens", 100],
    ["choosing plant based meal", 200],
  ];

  function onChangeHandler(){
    setPointsMessage(activityDropDown.current.value)

  }

  return (
    <div className="form-container">
      <h1>Please select your sustainble activity here</h1>
      <select onChange={onChangeHandler}
        ref={activityDropDown}
        id="activtiy-dropdown"
        name="activity-dropdown"
     
      >
      <option>Please Select An Activity</option>
        {activityArray.map((element) => (
          <option value={element[1]}>{element[0]}</option>
        ))}
      </select>
      <div className="message">
        <p>The Amount of points you can earn for this action is: </p>
        <p>{pointsMessage}</p>
      </div>
      <button onClick={()=>onClickHandler(pointsMessage)}>Save Points</button>
    </div>
  );
}

export default Form;
