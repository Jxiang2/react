import { useState, useRef } from 'react'
import './Create.css'

export default function Create() {

    const [title, setTitile] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, SetIngredients] =useState([])
    const ingredientInput = useRef(null)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, method, cookingTime, ingredients);
    }

    const handleAdd = (e) => {
        e.preventDefault()
        const ing = newIngredient.trim()
        if (ing && !ingredients.includes(ing)) {
            SetIngredients(PrevIngredients => [...PrevIngredients, ing])
        }
        setNewIngredient('')
        ingredientInput.current.focus()
    } 
    return (
        <div className='create'>
            <h2 className='page-title'>Add a New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Recipe title</span>
                    <input type="text" 
                     onChange={(e)=>setTitile(e.target.value)}
                     value = {title}
                     required/>
                </label>

                <label>
                    <span>Recipe method</span>
                    <textarea
                     onChange={(e)=>setMethod(e.target.value)}
                     value = {method}
                     required/>
                </label>

                <label>
                    <span>Recipe ingredients</span>
                    <div className="ingredients">
                        <input type="text"
                         onChange={(e)=>setNewIngredient(e.target.value)}
                         value = {newIngredient}
                         ref = {ingredientInput}/>
                        <button className='btn' onClick={handleAdd}>add</button>
                    </div>
                </label>
                <p>
                    Current Ingredients: 
                    {ingredients.map(ing=>(<em key={ing}>{ing}, </em>))}
                </p>

                <label>
                    <span>Cooking time in minutes</span>
                    <input type="number"
                     onChange={(e)=>setCookingTime(e.target.value)}
                     value = {cookingTime}
                     required/>
                </label>

                <button className='btn'>Submit</button>
            </form>
        </div>
    )
}

