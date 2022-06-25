import { useLocation } from 'react-router-dom'
import RecipieList from '../../components/RecipieList'
import { useFetch } from '../../hooks/useFetch'
import './Search.css'

export default function Search() {

  const queryStr = useLocation().search
  const queryParam = new URLSearchParams(queryStr)
  const query = queryParam.get('q')

  const url = `http://localhost:3000/recipes?q=${query}`
  const { data: recipes, error, isPending } = useFetch(url)

  return (
    <div>
      <h2 className="page-title">Recipes including "{query}"</h2>
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipes && <RecipieList recipies={recipes}/>}
    </div>
  )
}
