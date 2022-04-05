import { useState, useEffect } from "react";

export const useFetch = (url, method="GET") => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [payload, setPayload] = useState(null)

    const patchData = (patchData) => {
        setPayload({
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(patchData)
        })
    }

    useEffect(()=>{
        const controller = new AbortController()

        const fetchData = async(fetchPayload) => {
            setIsPending(true)
            try{
                const res = await fetch(url, {...fetchPayload, signal:controller.signal})
                if (!res.ok){
                    throw new Error(res.statusText) // error to be catched later
                }
                const data = await res.json()
                setIsPending(false)
                setData(data)
                setError(null)
            } catch(err) {
                if (err.name === "AbortError") {
                    console.log("the fetch is aborted")
                } else {
                    setIsPending(false)
                    setError('Could not fetch data')
                }
            }
        }

        if (method === "GET") {
           fetchData() 
        }
        if (method === "PATCH" && payload) {
            fetchData(payload) 
        }

        return () => {controller.abort()}
    }, [url, payload, method])

    return {data, isPending, error, patchData}
}