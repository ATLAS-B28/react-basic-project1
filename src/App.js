import Input from "./Input";
import Square from "./Square";
import { useState } from "react";
function App() {
 //state for color value
 const [colorValue,setColorValue] = useState('')
 //hex value state
 const [hexValue,setHexValue] = useState('')
 //whether the text is dark or not ,so it is boolean
 const [isDarkText,setIsDarkText] = useState(false)
 return(
  <div className="App">
    <Square
     colorValue={colorValue}//<-props where the state values are passed
     hexValue={hexValue}
     isDarkText={isDarkText}
    />
    <Input
     colorValue={colorValue}
     hexValue={hexValue}
     isDarkText={isDarkText}
     setColorValue={setColorValue}//<- props along with their update functions
     setHexValue={setHexValue}
     setIsDarkText={setIsDarkText}
    />
  </div>
 )
}

export default App;
