import { useParams } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'
import { useEffect, useState } from 'react'
import { projectFirestore } from '../../firebase/config'
import './Recipie.css'

export default function Recipie() {

    const {id} = useParams()
    const {mode} = useTheme()

    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setIsPending(true)
        projectFirestore.collection('recipes').doc(id).get().then((doc)=>{
            if (doc.exists) {
                console.log('I am here');
                setIsPending(false)
                setRecipe(doc.data())
            } else {
                setIsPending(false)
                setError('Could not find that recipe')
            }
        })
    }, [id])

    return (
        <div className={`recipe ${mode}`}>
            <p>recipe detail</p>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {recipe && (
                <>
                    <h2 className='page-title'>{recipe.title}</h2>
                    <p>Tasks {recipe.cookingTime} to cook</p>
                    <ul>
                        {recipe.ingredients.map(ing=>(<li key={ing}>{ing}</li>))}
                    </ul>
                    <p className='method'>{recipe.method}</p>
                </>
            )}
        </div>
    )
}
