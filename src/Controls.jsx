function Controls(props){

    return (
        <div className="controls">
            <div className="buttonContainer">
            <button onClick={props.Add1st}>+</button>
            <button onClick={props.Sub1st}>-</button>
            </div>
            <div className="buttonContainer">
            <button onClick={props.Add2nd}>+</button>
            <button onClick={props.Sub2nd}>-</button>
            </div>
        </div>
    )
}

export default Controls;