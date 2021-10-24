import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

const EmployeesList = () => {
    return (
        <ul className="app-list list-group">
            <EmployeesListItem name="Oleg H." salary={800}/>
            <EmployeesListItem name="Maria G." salary={2800}/>
            <EmployeesListItem name="Orest P." salary={180}/>
        </ul>
    )
}

export default EmployeesList;