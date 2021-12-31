import './Home.css'
import {useFetch} from '../../hooks/useFetch'
import RecipieList from '../../components/RecipieList'

export default function Home() {

    const url = 'http://localhost:3000/recipes'
    const {data, isPending, error} = useFetch(url)

    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipieList recipies={data}/>}
        </div>
    )
}
