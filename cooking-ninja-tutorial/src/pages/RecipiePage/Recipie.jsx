import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'
import { useTheme } from '../../hooks/useTheme'
import './Recipie.css'

export default function Recipie() {

    const {id} = useParams()
    const url = `http://127.0.0.1:3000/recipes/${id}`
    const {error, isPending, data: recipe} = useFetch(url)
    const {mode} = useTheme()

    return (
        <div className={`recipe ${mode}`}>
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
