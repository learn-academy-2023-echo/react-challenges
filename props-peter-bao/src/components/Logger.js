const Logger = (props) => {
    return (
        <div className="numbers">
            {props.num.map((roll, index) =>(
                <h3>{roll}</h3>
            ))}
         </div>
        
    )
}

export default Logger