import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {

  constructor() {
    super()

    this.state = {
      pizzas: [],
      currentId: undefined,
      newTopping: '',
      newSize: '',
      isVegetarian: undefined,
    }
  }

  handleEditBtn = pizza => {
    this.setState({
      currentId: pizza.id,
      newTopping: pizza.topping,
      newSize: pizza.size,
      isVegetarian: pizza.vegetarian ? true : false,
    })
  }

  handleToppingChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleRadioChange = e => {
    this.setState({
      isVegetarian: e.target.value === 'Vegetarian' ? true : false
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    if(this.state.currentId){
      let modifiedPizza = {
        "id": this.state.currentId,
        "topping": this.state.newTopping,
        "size": this.state.newSize,
        "vegetarian": this.state.isVegetarian
      }
      let pizzas = [...this.state.pizzas]
      pizzas[this.state.currentId - 1] = modifiedPizza
      fetch(`http://localhost:3001/pizzas/${this.state.currentId}`, {
        method: 'PUT',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(modifiedPizza)
      })
        .then(resp => resp.json())
        .then(pizza => {
          this.setState({
            pizzas,
            currentId: undefined,
            newTopping: '',
            newSize: '',
            isVegetarian: undefined,
          })
        })

    }
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm handleSubmit={this.handleSubmit} handleToppingChange={this.handleToppingChange} topping={this.state.newTopping} size={this.state.newSize} isVegetarian={this.state.isVegetarian} handleRadioChange={this.handleRadioChange} />
        <PizzaList pizzas={this.state.pizzas} handleEditBtn={this.handleEditBtn} />
      </Fragment>
    );
  }

  componentDidMount() {
    fetch('http://localhost:3001/pizzas')
      .then(resp => resp.json())
      .then(pizzas => {
        this.setState({pizzas})
      })
  }
}

export default App;
