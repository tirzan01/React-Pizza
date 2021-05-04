import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import Pizza from "./components/Pizza";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
class App extends Component {
  state = {
    pizzas: [],
    selectedPizza: {},
  };

  componentDidMount() {
    //fetch
    fetch("http://localhost:3000/pizzas")
      .then((res) => res.json())
      .then((pizzas) => this.setState({ pizzas }));
  }

  selectPizza = (singlePizza) => {
    //function to run when pizza's edit buttion is clicked
    // console.log("I'm clicked", singlePizza)
    this.setState(
      {
        selectedPizza: singlePizza,
      },
      () => console.log(this.state)
    );
  };

  changeHandler = (e) => {
    //input changes
    console.log(e.target.name, e.target.value);
    this.setState({
      selectedPizza: {
        ...this.state.selectedPizza,
        [e.target.name]: e.target.value,
      },
    });
  };

  handleRadio = () => {
    this.setState({
      selectedPizza: {
        ...this.state.selectedPizza,
        vegetarian: !this.state.selectedPizza.vegetarian,
      },
    });
  };

  handleSubmit = () => {
    console.log("submitted");
    //I want the changes to appear on the pizza we are editing 

    this.setState({
      pizzas: this.state.pizzas.map(p => p.id === this.state.selectedPizza.id ? this.state.selectedPizza : p)
    })

    let reqPackage = {
      method: 'PATCH',
      headers:{
        "Content-Type": 'application/json',
        "Accept": 'application/json',
      },
      body: JSON.stringify(this.state.selectedPizza)
    }

    fetch(`http://localhost:3000/pizzas/${this.state.selectedPizza.id}`, reqPackage)
    
  };

  render() {
    return (
      <Fragment>
        <Header />
        {Object.keys(this.state.selectedPizza).length > 0 ? (
          <PizzaForm
            selectedPizza={this.state.selectedPizza}
            handleRadio={this.handleRadio}
            changeHandler={this.changeHandler}
            handleSubmit={this.handleSubmit}
          />
        ) : null}
        <PizzaList
          allPizzas={this.state.pizzas}
          selectPizza={this.selectPizza}
        />
      </Fragment>
    );
  }
}

export default App;
