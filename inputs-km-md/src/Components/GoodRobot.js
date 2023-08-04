import React from 'react';

const GoodRobot =(props) => {

    const { userInput } = props 

    return(
        <>
        <div className='robots'>
        <h2>Good Robot</h2> 
        <h1>{userInput}</h1>
        </div>
        </>
    )
}

export default GoodRobot;