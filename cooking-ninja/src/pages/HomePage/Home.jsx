import './Home.css'
import {useFetch} from '../../hooks/useFetch'

export default function Home() {

    const url = 'http://localhost:3000/recipes'
    const {data, isPending, error} = useFetch(url)

    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && data.map((recipie)=>(
                <h2 key={recipie.id}>{recipie.title}</h2>
            ))}
        </div>
    )
}
