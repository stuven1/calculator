import React from "react"
import { exVatToIncVat, incVatToExtVat } from "../calculations"
import calculateImg from "./calculator-img.png"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      incVat: 0,
      exVat: 0,
      vatRate: 25
    }
  }

	handleIncVatChange = (event) => {
	  const incVatNumber = parseInt(event.target.value)
	  this.setState({
	    incVat: incVatNumber,
	    exVat: incVatToExtVat(this.state.vatRate, incVatNumber)
	  })
	}

	handleExVatChange = (event) => {
	  const exVatNumber = parseInt(event.target.value)
	  this.setState({
	    exVat: exVatNumber,
	    incVat: exVatToIncVat(this.state.vatRate, exVatNumber)
	  })
	}

	handleVatRateChange = (event) => {
	  const vatRateNumber = parseInt(event.target.value)
	  this.setState({
	    vatRate: vatRateNumber,
	    incVat: 0,
	    exVat: 0
	  })
	}

	render() {
	  return (
	    <div className="App">
	      <div>
	        <label className="header-text">
	          <h1>Räkna ut momsen</h1>
	        </label>
	        <label className="procentage">
						6%
	          <input
  onChange={this.handleVatRateChange}
	            checked={this.state.vatRate === 6}
  value="6"
  type="radio" />
	        </label>

	        <label>
						12%
	          <input
  onChange={this.handleVatRateChange}
  checked={this.state.vatRate === 12}
  value="12"
  type="radio" />
	        </label>

	        <label>
						25%
	          <input
  onChange={this.handleVatRateChange}
	            checked={this.state.vatRate === 25}
  value="25"
  type="radio" />
	        </label>
	      </div>
	      <label>
					Ink. moms
	        <input
  name="incVat"
  onChange={this.handleIncVatChange}
  value={this.state.incVat}
  type="number" />
	      </label>
	      <label>
					Ex. moms
	        <input
  name="exVat"
  onChange={this.handleExVatChange}
  value={this.state.exVat}
  type="number" />
	      </label>
	      <label>
					Momssumma
	        <input name="sum" value={this.state.incVat - this.state.exVat} type="text" />
	      </label>
	      <img className="calculator-img" alt="This is a calcuylator" src={calculateImg} />
	    </div>
	  )
	}
}

export default App
