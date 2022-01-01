import { useState, useEffect } from "react";

export const useFetch = (url, method="GET") => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
    const [option, setOption] = useState(null)

    const postData = (postData) => {
        setOption({
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(postData)
        })
    }

    useEffect(()=>{
        const controller = new AbortController()

        const fetchData = async(fetchOptions) => {
            setIsPending(true)
            try{
                const res = await fetch(url, {...fetchOptions, signal:controller.signal})
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
        if (method === "POST" && option) {
            fetchData(option) 
        }

        return () => {controller.abort()}
    }, [url, option, method])

    return {data, isPending, error, postData}
}
