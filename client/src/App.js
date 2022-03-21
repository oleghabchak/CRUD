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
      console.log(trainsList[1].city1);
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

const [searchTerm, setSearchTerm] = useState(""); 
  return (
    <div className="App-header">
      
        <div className="Add-train">
          
          <h1>Add New Train</h1>
    
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
          <h2>Search train:</h2>
          <input 
          onChange={(e)=>{
            setSearchTerm(e.target.value)
          }}
          placeholder='From:'
           type="text" />
          <input
          onChange={(e)=>{
            setSearchTerm(e.target.value)
          }}
          placeholder='To:' 
           type="text" />
            <h2>Trains List:</h2>

              {trainsList.filter((val)=> {
                if (searchTerm == '') {
                  return val
                } else if( val.city1.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                } else if( val.city2.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val
                }
              }).map((val,pos)=>{
                //  while (val.city1 == a)
                {
                return  (
                  <div className='train-item' key={pos}> 
                      <h5>From: {val.city1.toUpperCase()}  {val.departure} &nbsp;&nbsp; 
                        to: {val.city2.toUpperCase()}  {val.arrival} </h5>
                      <button className='btn-delete'  onClick={()=> {deleteTrain(val.arrival)}}>Delete</button>
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
