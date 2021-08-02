import React from "react"

const PizzaForm = ({ handleSubmit, handleToppingChange, topping, size, isVegetarian, handleRadioChange }) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" name='newTopping' className="form-control" placeholder="Pizza Topping" value={topping} onChange={handleToppingChange} />
        </div>
        <div className="col">
          <select value={size} className="form-control" name='newSize' onChange={handleToppingChange} >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" onChange={handleRadioChange} checked={isVegetarian}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" onChange={handleRadioChange} checked={!isVegetarian}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handleSubmit}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
