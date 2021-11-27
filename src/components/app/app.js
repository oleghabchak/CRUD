import React, { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    data:  [
      {name: "Oleg H.", salary:800, increase: false, rise: true, id:1 },
      {name: "Maria G.", salary:4800, increase: true, rise: false, id:2 },
      {name: "Marta Z.", salary:5500, increase: false, rise: false, id:3} ,
    ], tern: "a"
  }
  
  this.maxId = 4;
}
// Add and remove employees
deleteItem = (id) => {
  this.setState(({data}) => {
    const index = data.findIndex(e => e.id == id)
    
    const before =  data.slice(0, index)
    const after =  data.slice(index + 1)
    const newArr = [...before, ...after]

    return{
      data: newArr
      // data: data.filter(item=> item.id !== id)
    }
  })
}

addItem = (name, salary) => {
  const newItem = {
      name, 
      salary,
      increase: false,
      rise: false,
      id: this.maxId++
  }
  this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
          data: newArr
      }
  });
}

OnToggleIncrease = (id) => {
  
  this.setState(({data}) =>({
    data: data.map(item =>{
      if (item.id === id){
      return{...item, increase: !item.increase}
      }
      return item;
    })
  }))
}
OnToggleRise = (id) => {
  this.setState(({data}) =>({
    data: data.map(item =>{
      if (item.id === id){
      return{...item, rise: !item.rise}
      }
      return item;
    })
  }))
}

searchEmp = (item, tern) => {
  if (item.length === 0) {
    return item;
  }
  return item.filter(item => {
    return item.name.indexOf(tern) > -1
  })
}



  render() {
    const {data,tern} = this.state;
    const emplNum = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    const visibleData = this.searchEmp(data, tern);
    return (
    <div className="app">
        <AppInfo emplNum={emplNum} increased={increased}/>

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
            
        </div>
        
        <EmployeesList 
        onDelete={this.deleteItem}
        data={visibleData}
        OnToggleIncrease={this.OnToggleIncrease}
        OnToggleRise={this.OnToggleRise}/>
        <EmployeesAddForm onAddd={this.addItem}/>
    </div>
  );
}
}

export default App;
