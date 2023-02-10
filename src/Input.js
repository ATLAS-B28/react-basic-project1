import React from 'react'
import colorNames from 'colornames'
function Input({
    colorValue,
    setColorValue,
    setHexValue,
    isDarkText,
    setIsDarkText
}) {
  return (
    //we will form that takes the input
    <form action=""
     onSubmit={(e)=>e.preventDefault()}
    >
        <label htmlFor="">Add Color Name: </label>
        <input 
          type='text'
          autoFocus
          required
          placeholder='Input the color code'
          value={colorValue}
          onChange={(e)=>{
            setColorValue(e.target.value)
            setHexValue(colorNames(e.target.value))
          }}
        />
        <button
         type='button'
         onClick={()=>setIsDarkText(!isDarkText)}
        >
            Toggle Text Color
        </button>
    </form>
  )
}

export default Input