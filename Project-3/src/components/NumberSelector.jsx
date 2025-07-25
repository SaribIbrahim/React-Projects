import React from 'react'
import "./NumberSelector.css"
import Box from './Box';

function NumberSelector({error,setError, selectedNumber, setSelectedNumber}) {
    const arrNumber = [1, 2, 3, 4, 5, 6];

    const numberSelectorHandler=(value)=>{
        setSelectedNumber(value)
        setError("")
    }
   

    return (
        <>
            <p className='error-text'>{error}</p>
            <div className="col-7 box-wrapper d-flex flex-wrap">
                {arrNumber.map((number, i) => (
                    <Box
                        key={i}
                        num={number}
                        isSelected={number === selectedNumber}
                        onClick={ () => numberSelectorHandler(number) }
                    />
                ))}   
            </div>
            <p className='text'>Select a Number</p>
            
        </>
    );
}

export default NumberSelector;
