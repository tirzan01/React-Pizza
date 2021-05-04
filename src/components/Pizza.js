import React from "react"

const Pizza = (props) => {
  let handleClick = () => {
    props.selectPizza(props.singlePizza) // this is correct 
    // can we check in our devtools? 



    //create function in props that passes data
    //pass data using state 

  }
  return(
    <tr>
      <td>{props.singlePizza.topping}</td>
      <td>{props.singlePizza.size}</td>
      <td>{props.singlePizza.vegetarian ? "Yosh": "Nah"}</td>
      <td><button type="button" className="btn btn-primary" onClick={handleClick}>Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
