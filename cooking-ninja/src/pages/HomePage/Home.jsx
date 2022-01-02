import './Home.css'
import { projectFirestore } from '../../firebase/config'
import RecipieList from '../../components/RecipieList'
import { useEffect, useState } from 'react'

export default function Home() {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    useEffect(()=>{
        setIsPending(true)
        // setup a realtime listner for firebase collection at the start of evaluation instead of get()
        const unsub = projectFirestore.collection('recipes').onSnapshot((snapshot)=>{
            if (snapshot.empty) {
                setError('No recipes to load')
                setIsPending(false)
            } else {
                // console.log(snapshot)
                let res = []
                snapshot.docs.forEach((doc)=>{
                    res.push({id: doc.id, ...doc.data()})
                })
                setData(res)
                setIsPending(false)
            } 
        }, (err) => {
            setError(err.message)
            setIsPending(false)
        })
        return () => unsub() // fire when the home component unmount to stop realtime listner
    }, [])

    return (
        <div className='home'>
            {error && <p className='error'>{error}</p>}
            {isPending && <p className='loading'>Loading...</p>}
            {data && <RecipieList recipies={data}/>}
        </div>
    )
}
