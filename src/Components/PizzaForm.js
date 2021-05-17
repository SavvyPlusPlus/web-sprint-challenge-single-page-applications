import React from "react";
import { useHistory } from "react-router-dom";


function Pizza(props) {

    const { values, change, submit, disable, error } = props;

    const history = useHistory();

    const onSubmit = event => {
        event.preventDefault()
        submit()
        history.push("/order")
    }


    return (
        <>
        <div>
                <h1>Build Your Own Pizza</h1>
                <img id="byo" src={pizzaImg} alt="BYO"/>
        </div>

        <form className="pizza-form" onSubmit={onSubmit}>

            <div className="errors">
                <div>{error.size}</div>
                <div>{error.name}</div>
                <div>{error.phone}</div>
            </div>

            <div>
                  {/* --------  DROP DOWN ----------- */}
                  {/* --------  DROP DOWN ----------- */}
                  {/* --------  DROP DOWN ----------- */}
                <label>
                    <h2>Choice of Size </h2>
                    <select id="size-dropdown" value={values.size} onChange={change} name="size">
                        <option value="">---Select and Option---</option>
                        <option value="small" >Small</option>
                        <option value="medium">Medium </option>
                        <option value="large">Large</option>
                        <option value="xl">XL</option>
                    </select>
                </label>

                  {/* --------  RADIO BUTTONS ----------- */}
                  {/* --------  RADIO BUTTONS ----------- */}
                  {/* --------  RADIO BUTTONS ----------- */}
                <label>
                    <h2>Choice of Sauce</h2>
                    Marinara Sauce
                    <input 
                    checked={values.sauce === "marinara sauce"}
                    onChange={change}
                    type="radio" 
                    value="marinara sauce" 
                    name="sauce" 
                     />
                </label> <br/><br/>
                {/*  */}
                <label>
                    Garlic Ranch
                    <input 
                    checked={values.sauce === "ranch"}
                    onChange={change}
                    type="radio" 
                    value="ranch" 
                    name="sauce" 
                    />
                </label> <br/><br/>
                <label>
                    BBQ Sauce
                    <input 
                    checked={values.sauce === "bbq sauce"}
                    onChange={change}
                    type="radio" 
                    value="bbq sauce" 
                    name="sauce" 
                     />
                </label> <br/><br/>
                  {/* --------  CHECK BOXES ----------- */}
                  {/* --------  CHECK BOXES ----------- */}
                  {/* --------  CHECK BOXES ----------- */}
                  <h2>Choice of Toppings</h2>
                  <div className="toppings-wrapper">
                    
                    <label>
                        Mushroom
                        <input 
                        onChange={change}
                        checked={values.mushroom}
                        type="checkbox" 
                        name="mushroom"/>
                    </label> <br/><br/>
                    <label>
                        Onion
                        <input 
                        onChange={change}
                        checked={values.onion}
                        type="checkbox" 
                        name="onion"/>
                    </label> <br/><br/>
                    <label>
                        Banana Peppers
                        <input 
                        onChange={change}
                        checked={values.banana_peppers}
                        type="checkbox" 
                        name="banana_peppers"/>
                    </label> <br/><br/>
                    <label>
                        Sausage
                        <input 
                        onChange={change}
                        checked={values.sausage}
                        type="checkbox" 
                        name="sausage"/>
                    </label> <br/><br/>
                    <label>
                        Pineapple
                        <input
                        onChange={change}
                        checked={values.pineapple} 
                        type="checkbox" 
                        name="pineapple"/>
                    </label> <br/><br/>
                    <label>
                        Artichoke Hearts
                        <input 
                        onChange={change}
                        checked={values.artichoke}
                        type="checkbox" 
                        name="artichoke"/>
                    </label> <br/><br/>
                  </div>
                  {/* --------  TEXT INPUT ----------- */}
                  {/* --------  TEXT INPUT ----------- */}
                  {/* --------  TEXT INPUT ----------- */}
                  <div className="toppings-wrapper">

                  {/* --------  SPECIAL INST. ----------- */}
                    <label>
                    <h2>Special Instructions</h2>
                        <input
                        name="special"
                        onChange={change}
                        value={values.special}
                        id="special-text" 
                        type="text" 
                        placeholder="Anything else that you'd like to add?"/>
                    </label> <br/><br/>

                  {/* --------  INFO  ----------- */}
                    <h2>Your Info:</h2>
                    <label>
                        <input
                        onChange={change}
                        value={values.name}
                        id="name-input" 
                        type="text" 
                        name="name"
                        placeholder="Full Name"/>
                    </label> 
                    <label> <br/><br/>
                        <input 
                        onChange={change}
                        value={values.phone}
                        type="text" 
                        name="phone"
                        placeholder="Phone Number"/>
                    </label> <br/><br/>
                    
                  </div>
                  <button disabled={disable} id="order-button">Add to Order</button>

            </div>

        </form>
        </>          
       
    )
}


export default Pizza;






const pizzaImg = "https://www.pizzahut.com/assets/w/images/homepage_hero/73081843_ph_sc_ab-test_desktop_1.0_macro_1t_try.jpg";
