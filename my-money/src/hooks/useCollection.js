import { useEffect, useState } from "react"
import { projectFirestore } from "../config/config"

export const useCollection = (collection) => {

    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)

    useEffect(()=>{
        let ref = projectFirestore.collection(collection)
        const unsub = ref.onSnapshot((snapshot)=> {
            let resource = []
            // ary of documents
            snapshot.docs.forEach(doc => {
                resource.push({...doc.data(), id:doc.id})
            })

            // update states
            setDocuments(resource)
            setError(null)
        }, (error) => {
            console.log(error)
            setError(error.message)
        })

        // clearup function: unsubscribe on unmount
        return () => unsub()
    }, [collection])

    return {documents, error}
}