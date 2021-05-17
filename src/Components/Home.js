import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
    const history = useHistory();
    const pizzaRoute = () => {
        history.push("/pizza")
    }


    return (
        <div className="home-wrapper">
             <img className="pizza" src="https://www.pizzahut.com/assets/w/images/homepage_hero/73081843_ph_sc_ab-test_desktop_1.0_macro_1t_try.jpg" alt="pizza"/>
            
            <button id="order-pizza" onClick={pizzaRoute}>START HERE</button>
        
        
        </div>
        
       
    )
}