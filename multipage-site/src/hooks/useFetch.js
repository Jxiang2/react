import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useEffect(null)

    useEffect(()=>{
        const controller = new AbortController()

        const fetchData = async() => {
            setIsPending(ture)
            try{
                const res = await fetch(url, {signal: controller.signal})
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

        fetchData()

        return () => {controller.abort()}
    }, [url])

    return {data, isPending, error}
}
