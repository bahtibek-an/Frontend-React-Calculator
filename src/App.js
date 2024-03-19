import { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faDeleteLeft } from '@fortawesome/free-solid-svg-icons';



function App() {

    const[inp, setInp] = useState(" ")

function calc(el){
    setInp(inp + el.target.value)
}

const delNum = () => {
    if(inp === ""){
        return;
    }   

    const vlInp = inp.slice(0, -1);
    setInp(vlInp);
}

const calculation = () => {
    if(inp.trim().length === 0) {
        return;
    }
    setInp(eval(inp).toString());
}

return (
    <div className="calculator">
    <div className="calculator_body">

        <div className="calculator_head">
            {/* <input className="calculator_head-input" type="text"/>  */}
            <input className='calculator_head-input' type="text" value={inp}/>
        </div>

        <div className="calculator_numbers">

            <div className="calculator_numbers-operators">
                <button onClick={calc} value="+" className="calculator_numbers-operator calculator_numbers-operators-plus">
                    +
                </button>
                <button onClick={calc}   value="-" className="calculator_numbers-operator calculator_numbers-operators-minus">
                    -
                </button>
                <button onClick={calc} value="*" className="calculator_numbers-operator calculator_numbers-operators-multiple"> 
                    * 
                </button>
                <button onClick={calc} value="/" className="calculator_numbers-operator calculator_numbers-operators-division">
                    /
                </button>
            </div>

            <div className="calculator_numbers-numbers">
                <button onClick={calc} value="1" className="calculator_numbers-number calculator_numbers-number-one">1</button>
                <button onClick={calc}  value="2" className="calculator_numbers-number calculator_numbers-number-two">2</button>
                <button onClick={calc}  value="3" className="calculator_numbers-number calculator_numbers-number-three">3</button>
                <button onClick={calc}  value="4" className="calculator_numbers-number calculator_numbers-number-four">4</button>
                <button onClick={calc}  value="5" className="calculator_numbers-number calculator_numbers-number-five">5</button>
                <button onClick={calc}  value="6" className="calculator_numbers-number calculator_numbers-number-six">6</button>
                <button onClick={calc}  value="7" className="calculator_numbers-number calculator_numbers-number-seven">7</button>
                <button onClick={calc}  value="8" className="calculator_numbers-number calculator_numbers-number-eight">8</button>
                <button onClick={calc}  value="9" className="calculator_numbers-number calculator_numbers-number-nine">9</button>
                <button onClick={calc}  value="0" className="calculator_numbers-number calculator_numbers-number-zero">0</button>
                <button onClick={delNum} className="calculator_numbers-number calculator_numbers-number-delete"><FontAwesomeIcon icon={faDeleteLeft} /></button>
                <button onClick={e => setInp(" ")} className="calculator_numbers-number calculator_numbers-number-clear">C</button>
                <button onClick={calculation} className="calculators_numbers-equal"> = </button>
            </div>
        </div>
    </div>
</div>
);
}

export default App;