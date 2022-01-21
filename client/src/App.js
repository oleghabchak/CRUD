import './App.css';
import React, {useState, useEffect} from "react";
import Axios from "axios";

function App() {
  const [city1, setCity1] = useState("");
  const [city2, setCity2] = useState("");
  const [departure, setDeparture] = useState("");
  const [arrival, setArrival] = useState("");
  const [trainsList, setTrainsList] = useState([]);


  useEffect(()=>{
    Axios.get('http://localhost:3005/api/get').then((response)=>{
      setTrainsList(response.data)
      // console.log(response.data);
    })
  });

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

const deleteTrain = (arrival) => {
  Axios.delete(`http://localhost:3005/api/delete/${arrival}`);
};

const a = "lviv"; 
  return (
    <div className="App-header">
      
        <div className="Add-train">
          <h1>Search:</h1>
          <h3>Add new Train</h3>
    
          <input
          placeholder="From:"
          type="text"
          name='city1'
          onChange={(e)=>{setCity1(e.target.value)}}  />
        
          <input
          placeholder="to:"
          type="text"
          name='city2'
          onChange={(e)=>{setCity2(e.target.value)}}  />
          
          
          <input
          placeholder="Departure time"
          type="text"
          name='departure'
          onChange={(e)=>{setDeparture(e.target.value)}}  />
          
          
          <input
          placeholder="Arrival time"
          type="text"
          name='arrival'
          onChange={(e)=>{setArrival(e.target.value)}}  />
          <button className='btn-grad' onClick={addTrain}>Submit</button>
        </div>


        <div className='trains-list'>
            <h1>Trains List:</h1>
              {trainsList.map((val,pos)=>{
                //  while (val.city1 == a)
                {
                return  (
                  <div className='train-item' key={pos}> 
                      <h5>From: {val.city1.toUpperCase()}  {val.departure} &nbsp;&nbsp; 
                        to: {val.city2.toUpperCase()}  {val.arrival} </h5>
                      <button className='btn-delete'  onClick={()=> {deleteTrain(val.city1)}}>Delete</button>
                  </div>
                );
                }
              })
              }
        </div>
    </div>
  );
}

export default App;
