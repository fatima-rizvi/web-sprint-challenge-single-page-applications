import React, {useState} from 'react'

// const initialValues = {
//     //Text input
//     name: '',
//     specialIntructions: '',
//     //Dropdown
//     size: '',
//     //Check boxes
//     pepperoni: false,
//     jalepenos: false,
//     mushrooms: false,
//     bellpeppers: false,
//     extracheese: false    
// }

export default function PizzaForm (props) {
    // const farewell = "bye"
    // return(
    //     <div>
    //         <h1>Hi</h1>
    //         <h4>{farewell}</h4>
    //     </div>
    // )
    //Form values
    // const [formValues, setFormValues] = useState(initialValues)
    // //Saving the values
    // const [savedFormInfo, setSavedFormInfo] = useState()

    <div className = 'pizza-form'>
        <form>
            <label>Name:
                {/* text input */}
            </label>
            <label>Size:
                {/* Dropdown list */}
            </label>
            <p>Toppings:</p>
            <label>Pepperoni:
                {/* checklist */}
            </label>
            <label>Jalepenos:
                {/* checklist */}
            </label>
            <label>Mushrooms:
                {/* checklist */}
            </label>
            <label>Pineapples:
                {/* checklist */}
            </label>
            <label>Olives:
                {/* checklist */}
            </label>
            <label>Special Instructions:
                {/* text input */}
            </label>
            <button>Add to Order</button>
        </form>
    </div>    

}
