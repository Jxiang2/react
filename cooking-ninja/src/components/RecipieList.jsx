import { Link } from 'react-router-dom'
import { projectFirestore } from '../firebase/config'
import { useTheme } from '../hooks/useTheme'
import Trashcan from '../assets/trashcan.svg'
import './RecipieList.css'

export default function RecipieList({recipies}) {
    const {mode} = useTheme()

    if (recipies.length === 0) {
        return <div className='error'>No recipies to load...</div>
    }

    const handleClick = async (id) => {
        await projectFirestore.collection('recipes').doc(id).delete()
        console.log('delete success')
    }

    return (
        <div className='recipe-list'>
            {recipies.map((recipie)=>(
                <div key={recipie.id} className={`card ${mode}`}>
                    <h3>{recipie.title}</h3>
                    <p>{recipie.cookingTime}</p>

                    <div>
                        {recipie.method.substring(0, 100)}...
                    </div>

                    <Link to={`/recipies/${recipie.id}`}>Cook this!</Link>

                    <img
                     className="delete"
                     src={Trashcan} 
                     alt="trash can"
                     onClick={()=>handleClick(recipie.id)} 
                    />
                </div>
            ))}
        </div>
    )
}
