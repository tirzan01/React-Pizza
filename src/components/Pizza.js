import React from "react"

const Pizza = ({ pizza, handleEditBtn }) => {
  return(
    <tr onClick={() => handleEditBtn(pizza)} >
      <td>{pizza.topping}</td>
      <td>{pizza.size}</td>
      <td>{pizza.vegetarian ? 'yes' : 'no'}</td>
      <td><button type="button" className="btn btn-primary">Edit Pizza</button></td>
    </tr>
  )
}

export default Pizza
