import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = ({data, onDelete, OnToggleIncrease, OnToggleRise}) => {

const elements = data.map(item =>{
    const {id, ...itemProps} = item;
    return (
        <EmployeesListItem 
        key={id} 
        {...itemProps}
        onDelete={() => onDelete(id)}
        OnToggleIncrease={() => OnToggleIncrease(id)}
        OnToggleRise={() => OnToggleRise(id)}/>
    )
})

console.log(elements)

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}
    
export default EmployeesList;