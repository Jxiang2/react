import { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import './Create.css'

export default function Create() {

    // hooks
    const [title, setTitile] = useState('')
    const [method, setMethod] = useState('')
    const [cookingTime, setCookingTime] = useState('')
    const [newIngredient, setNewIngredient] = useState('')
    const [ingredients, SetIngredients] =useState([])
    const ingredientInput = useRef(null)
    const history = useHistory()

    //custom hooks
    const {postData, data: recipie, error} = useFetch('http://127.0.0.1:3000/recipes', 'POST')

    const handleSubmit = (e) => {
        e.preventDefault() // prevent refresh
        postData({title, ingredients, method, cookingTime: cookingTime+'minutes'})
        console.log(recipie) // no log at this time as fetchData is async
    }

    // redirect user to home when postData completes
    useEffect(()=>{
        if (recipie) {
            console.log(recipie)
            history.push('/')
        }
    }, [recipie])

    const handleAdd = (e) => {
        e.preventDefault() // prevent refresh
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

