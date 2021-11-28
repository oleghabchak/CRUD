import "./app-filter.css";

const AppFilter = () => {
    const buttonsData = [
        {name:'all' , label:'Всі працівники'},
        {name:'rise' , label:'На підвищення'},
        {name:'moreThen1000' , label:'З/П більше 1000$'}
    ];

    const buttons = buttonsData.map(({name, label}) => {
        return (
            <button type="button"
                    className="btn btn-light"
                    keu={name}>
                    {label}
            </button>
        )
    })
    return (
        <div className="btn-group">
            {buttons}
            <button type="button"
                    className="btn btn-light">
                    Всі працівники
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    На підвищення
            </button>
            <button type="button"
                    className="btn btn-outline-light">
                    З/П більше 1000$
            </button>
        </div>
    )
}

export default AppFilter;