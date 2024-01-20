
import React, {useState} from "react";
import './App.css'

const App = () => {

  const [result,setResult]=useState("");

  const clickHandier=(event)=>{

    setResult(result.concat(event.target.value))
  }
  const clearDisplay=()=>{

    setResult("")
  }
  const calculate=()=>{
    setResult(eval(result).toString());
  }


  return (
    <div className="App">
      <div className="calculator">
    <div className="clik">
      <input type="text" placeholder="" id="reply" value={result}/>
      <input type="button" value="C" className="knop" onClick={clearDisplay}/>
      <input type="button" value="(" className="knop" onClick={clickHandier}/>
      <input type="button" value=")" className="knop" onClick={clickHandier}/>
      <input type="button" value="-" className="knop" onClick={clickHandier}/>
      <input type="button" value="7" className="knop" onClick={clickHandier}/>
      <input type="button" value="8" className="knop" onClick={clickHandier}/>
      <input type="button" value="9" className="knop" onClick={clickHandier}/>
      <input type="button" value="/" className="knop" onClick={clickHandier}/>
      <input type="button" value="4" className="knop" onClick={clickHandier}/>
      <input type="button" value="5" className="knop" onClick={clickHandier}/>
      <input type="button" value="6" className="knop" onClick={clickHandier}/>
      <input type="button" value="*" className="knop" onClick={clickHandier}/>
      <input type="button" value="1" className="knop" onClick={clickHandier}/>
      <input type="button" value="2" className="knop" onClick={clickHandier}/>
      <input type="button" value="3" className="knop" onClick={clickHandier}/>
      <input type="button" value="+" className="knop" onClick={clickHandier}/>
      <input type="button" value="0"className="knop" onClick={clickHandier}/>
      <input type="button" value="%"className="knop"onClick={clickHandier}/>
      <input type="button" value="=" className="knop button1" onClick={calculate}/>
    </div>
    </div>
    </div>
  )
}
export default App;