import { Link } from 'react-router-dom'
import './RecipieList.css'

export default function RecipieList({recipies}) {
    return (
        <div className='recipe-list'>
            {recipies.map((recipie)=>(
                <div key={recipie.id} className='card'>
                    <h3>{recipie.title}</h3>
                    <p>{recipie.cookingTime}</p>
                    <div>
                        {recipie.method.substring(0, 100)}...
                    </div>
                    <Link to={`/recipies/${recipie.id}`}>Cook this!</Link>
                </div>
            ))}
        </div>
    )
}