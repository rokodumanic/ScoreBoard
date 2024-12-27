import "./App.css"
function Club(props){

    return(
        <div className="club">
            <img className="logo" src={props.logo} />
            <h3>{props.name}</h3>
        </div>
    )
}

export default Club;