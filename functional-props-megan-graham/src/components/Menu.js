import React from "react"

const Menu = (props) => {
    console.log("props", props)
    return (
        <div className="card">
            <h3>{props.object.item}</h3>
             {props.object.ordered && <h3><img className="bag" src="https://freesvg.org/img/1533012652.png" /></h3>}
             <button
                onClick={() => {
                    props.orderedItem(props.index)
                }}
                >
                    Select!
                </button>
        </div>
    )
}

export default Menu