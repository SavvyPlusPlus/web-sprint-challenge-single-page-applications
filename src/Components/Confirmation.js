import React from "react";



export default function Confirmation(props) {
    const {orders}=props;
    if (!orders) {
        return <h3>Fetching your order details</h3>
    }
    return (
        
        <div>
            <img className="pizza" src="https://media.giphy.com/media/4ayiIWaq2VULC/giphy.gif" alt="pizza"/>
            <h2>{orders.name}</h2>
             <h1>🎉Your Order Has Been Submitted🎉</h1>

        </div>
       
    )
}


// size: "",
// mushroom: false,
// onion: false,
// banana_peppers: false,
// sausage: false,
// pineapple: false,
// artichoke: false,
// special: "",
// name: "",
// phone: ""