import {Component} from 'react';
import './calc-logik.css'

class CalculatorReact extends Component{
     constructor(option) {
          super(option)
          this.state = {
               value: ' ',
               ValueEqual: 0
          }
     }

     OneClick = () => {
          this.setState({
               value: this.state.value + '1'
          }) 
     }
     TwoClick = () => {
          this.setState({
               value: this.state.value + '2'
          }) 
     }
     ThreeClick = () => {
          this.setState({
               value: this.state.value + '3'
          }) 
     }
     PlusClick = () => {
          this.setState({
               value: this.state.value + '+'
          }) 
     }
     FourClick = () => {
          this.setState({
               value: this.state.value + '4'
          }) 
     }
     FiveClick = () => {
          this.setState({
               value: this.state.value + '5'
          }) 
     }
     SixClick = () => {
          this.setState({
               value: this.state.value + '6'
          }) 
     }
     MinusClick = () => {
          this.setState({
               value: this.state.value + '-'
          }) 
     }
     SevenClick = () => {
          this.setState({
               value: this.state.value + '7'
          }) 
     }
     EightClick = () => {
          this.setState({
               value: this.state.value + '8'
          }) 
     }
     NineClick = () => {
          this.setState({
               value: this.state.value + '9'
          }) 
     }
     MultipleClick = () => {
          this.setState({
               value: this.state.value + '*'
          }) 
     }
     DeleteClick = () => {
          this.setState({
               value: '  '
          }) 
     }
     ZiroClick = () => {
          this.setState({
               value: this.state.value + '0'
          }) 
     }
     SmoothClick = () => {
          try {
            const result = eval(this.state.value);
            this.setState({
              value: result
            });
          } catch (error) {
            console.log('Error:', error);
          }
        };
      
     DivideClick = () => {
          this.setState({
               value: this.state.value + '/'
          }) 
     }
     
     // DeleteNumber = (value) => {
     //      this.setState({

     //      })
     // }


     render() {
          return(
          <div className='btn-sort'>
               <div className='calc-value'>
                    <h1>{this.state.value}</h1>
               </div>
                   <div className="btn-number">
                    <button className='btn btn-light' onClick={this.OneClick}>1</button>
                    <button className='btn btn-light' onClick={this.TwoClick}>2</button>
                    <button className='btn btn-light' onClick={this.ThreeClick}>3</button>
                    <button className='btn btn-light' onClick={this.PlusClick}>+</button>
                    <button className='btn btn-light' onClick={this.FourClick}>4</button>
                    <button className='btn btn-light' onClick={this.FiveClick}>5</button>
                    <button className='btn btn-light' onClick={this.SixClick}>6</button>
                    <button className='btn btn-light' onClick={this.MinusClick}>-</button>
                    <button className='btn btn-light' onClick={this.SevenClick}>7</button>
                    <button className='btn btn-light' onClick={this.EightClick}>8</button>
                    <button className='btn btn-light' onClick={this.NineClick}>9</button>
                    <button className='btn btn-light' onClick={this.MultipleClick}>*</button>
                    <button className='btn btn-danger' onClick={this.DeleteClick}>AC</button>
                    <button className='btn btn-light' onClick={this.ZiroClick}>0</button>
                    <button className='btn btn-light' onClick={this.SmoothClick}>=</button>
                    <button className='btn btn-light' onClick={this.DivideClick}>/</button>
                </div>
          </div>
          )
     }
}


const CalcLogic = () => {
     return (
          <CalculatorReact/>
     )
}
export default CalcLogic