import React from "react";
import { useState, useEffect } from "react"
import { Route, Link, Switch } from "react-router-dom";
import Pizza from "./Components/PizzaForm";
import Home from "./Components/Home";
import "./App.css";
import axios from "axios";
import * as yup from "yup";
import { schema } from './Components/validation/formSchema';
import Confirmation from "./Components/Confirmation";

const App = () => {

  /* -------- STATE USED ------------  */ 
  /* -------- STATE USED ------------  */ 
  /* -------- STATE USED ------------  */ 
  
  const [order, setOrder] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialError);
  const [disable, setDisable] = useState(disableNow);

  /* -------------------------- HELPERS -------------------------- */
  /* -------------------------- AXIOS -------------------------- */
  /* -------------------------- PLUS -------------------------- */

  const postNewOrder = (newOrder) => {
    axios
      .post('https://reqres.in/api/orders/',newOrder)
      .then(({data}) =>{
        setOrder([data, ...order]);
        console.log(data)
      })
      .catch(error => console.log('Error Posting Users:', error));
  };
  



  /* -------- CHANGE HANDLER ------------  */ 
  /* -------- CHANGE HANDLER ------------  */ 
  /* -------- CHANGE HANDLER ------------  */ 
  const inputChange = (event)  => {
    const { name, value, checked, type } = event.target
    const inputValue = type === "checkbox" ? checked : value

    yup
      .reach(schema, name)
      .validate(inputValue)
      .then(() => 
        setFormErrors({
          ...formErrors,
          [name]: ''
        })
      )
      .catch((err) =>
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0]
        })
      );

      setFormValues({
        ...formValues,
        [name]: inputValue
      })


  }

  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisable(!valid));
  }, [formValues]);


  /* -------- SUBMIT HANDLER ------------  */ 
  /* -------- SUBMIT HANDLER ------------  */ 
  /* -------- SUBMIT HANDLER ------------  */ 
  const submitForm = () => {
    postNewOrder(formValues)
    console.log(postNewOrder)
  }

  /* -------- SIDE EFFECT ------------  */ 
  /* -------- SIDE EFFECT ------------  */ 
  /* -------- SIDE EFFECT------------  */ 


  /* -------- SUBMIT ENABLE/DISABLE ------------  */ 
  /* -------- SUBMIT ENABLE/DISABLE ------------  */ 
  /* -------- SUBMIT ENABLE/DISABLE ------------  */ 

  return (
    <div className="App">
      <nav>
        <h1>Lambda Eats</h1>
        <div className="nav-links"> 
          <Link to="/">Home</Link>
          <Link to="/pizza">Order</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/pizza">
          <Pizza 
          values ={formValues}
          change ={inputChange}
          submit ={submitForm}
          disable ={disable}
          error ={formErrors}
          />
        </Route> 
        <Route path="/order">
          {order.map((orderx) => {
            return <Confirmation key={orderx.id} orders={orderx}/> 
          })}
        </Route> 
      </Switch>

    </div>
  );
};
export default App;


const disableNow = true;

const initialFormValues = {
  size: "",
  mushroom: false,
  onion: false,
  banana_peppers: false,
  sausage: false,
  pineapple: false,
  artichoke: false,
  special: "",
  name: "",
  phone: ""
}

const initialError = {
  size: "",
  name: "",
  phone: "",
}