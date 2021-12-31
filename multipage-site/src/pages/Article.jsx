import { useParams, useHistory } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"

export default function Article() {

    const { id } = useParams()
    const url = `http://127.0.0.1:3000/articles/${id}`
    const {data: article, isPending, error} = useFetch(url)
    const history = useHistory()

    useEffect(()=>{
        if (error) {
            // redirect to home
            setTimeout(()=>{
                history.push('/')
            }, 2000)
        }
    }, [error, history])

    return (
        <div>
            {isPending && <div>Loading...</div>}
            {error && <div>{error}, redirect to home in 3 seconds</div>}
            {article && (
                <div>
                    <h2>{article.title}</h2>
                    <h4>By {article.author}</h4>
                    <p>{article.body}</p>
                </div>
            )}
        </div>
    )
}
