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
    ]
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
  // this.setState(({data})=>{
  //   // const index = data.findIndex(el =>el.id ===id);

  //   // const old = data[index];
  //   // const newItem = {...old, increase: !old.increase};
  //   // const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

  //   // return {
  //   //   data:newArr
  //   // }


  // })

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
  console.log(`Rise this ${id}`)
}


  render() {
    return (
    <div className="app">
        <AppInfo />

        <div className="search-panel">
            <SearchPanel/>
            <AppFilter/>
            
        </div>
        
        <EmployeesList 
        onDelete={this.deleteItem}
        data={this.state.data}
        OnToggleIncrease={this.OnToggleIncrease}
        OnToggleRise={this.OnToggleRise}/>
        <EmployeesAddForm onAddd={this.addItem}/>
    </div>
  );
}
}

export default App;
