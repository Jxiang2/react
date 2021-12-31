import { useLocation } from "react-router-dom"

export default function Contact() {

    const queryString = useLocation().search
    console.log(queryString)

    const queryParams = new URLSearchParams(queryString)
    const name = queryParams.get("name")
    console.log(name)

    return (
        <div>
            <h2>Hey {name}, Contact use here...</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Modi aspernatur ad culpa eius dolorem doloribus sequi fugit
                voluptas illum maiores doloremque veniam necessitatibus dolorum 
                similique architecto consequuntur, qui aut error?
            </p>
        </div>
    )
}
