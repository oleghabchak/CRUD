import "./app-info.css";

const AppInfo = ({emplNum}) => {
    return (
        <div className="app-info">
            <h1>Облік працівників в компанії N</h1>
            <h2>Загальне число працівників: {emplNum}</h2>
            <h2>Премію отримають:</h2>
        </div>
    )
}

export default AppInfo;