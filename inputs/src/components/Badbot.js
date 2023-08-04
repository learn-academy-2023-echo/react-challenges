import React from "react"


const Badbot = (props) => {

    const {name} = props
        const replaceText = (name) => {
        let textReplaced = name.split("").map((value)=> value = "BLA").join("")
        return textReplaced
        }

  return (
    <>
     <h2>Bad Robot</h2>
    <p>I hear you saying {replaceText(name)}</p>
    
    
    </>
  )
}




export default Badbot