import './App.css';
import React, {useState, useEffect} from "react";
import Axios from "axios";

function App() {
  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [trainsList, setTrainsList] = useState([]);


  const addTrain = () => {
    Axios.post('http://localhost:3005/api/post',{
      city1:city1, 
      city2:city2,
      departure:departure, 
      arrival:arrival})
    .then(()=>{
alert("successful POST into DB")
    })
  }

useEffect(()=>{
  Axios.get('http://localhost:3005/api/get').then((response)=>{
    setTrainsList(response.data)
    // console.log(response.data);
  })
});


  return (
    <div className="App-header">
      <h1>Add new Train</h1>
        <div className="form">
          <label>From</label>
          <input 
          type="text"
          name='city1'
          onChange={(e)=>{setCity1(e.target.value)}}  />
          <label>to</label>
          <input 
          type="text"
          name='city2'
          onChange={(e)=>{setCity2(e.target.value)}}  />
          <label>departure time</label>
          <input 
          type="text"
          name='departure'
          onChange={(e)=>{setDeparture(e.target.value)}}  />
          <label>arrival time</label>
          <input 
          type="text"
          name='arrival'
          onChange={(e)=>{setArrival(e.target.value)}}  />
          <button onClick={addTrain}>Submit</button>
        </div>



      <h1>Trains:</h1>
        {trainsList.map((val,pos)=>{
          return  (
            <div key={pos}> 
             <h5>From:  {val.city1} {val.departure} </h5>
             <h6>to: {val.city2} {val.arrival} </h6>
            </div>
          );
        })
        }
  
    </div>
  );
}

export default App;
