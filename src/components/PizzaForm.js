import React from "react"

class PizzaForm extends React.Component{

  state={
    formPizza: this.props.selectedPizza
  }

  changeHandler = (e) =>{
    console.log(e.target.name, e.target.value)
    this.setState({
      formPizza: {...this.state.formPizza, [e.target.name]:e.target.value}
    })
  }


  handleRadio = () => {
    console.log('change')
    this.setState({
      formPizza: {
        ...this.state.formPizza,
        vegetarian: !this.state.formPizza.vegetarian,
      },
    });
  };

render(){

return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name="topping" className="form-control" placeholder="Pizza Topping" value={
                //Pizza Topping Should Go Here
                this.state.formPizza.topping
              }  onChange={this.changeHandler}/>
        </div>
        <div className="col">
          <select value={this.state.formPizza.size} name="size"onChange={this.changeHandler}className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" onChange={this.handleRadio} checked={this.state.formPizza.vegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian"  onChange={this.handleRadio} checked={!this.state.formPizza.vegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={this.props.handleSubmit}>Submit</button>
        </div>
      </div>

  )
}
}


export default PizzaForm
