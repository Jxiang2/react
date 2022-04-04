import { useState, useEffect } from 'react';

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchData = async () => {
            setIsPending(true);

            try {
                const res = await fetch(url, { signal: controller.signal });
                if (!res.ok) {
                    // throw a 404 error that will be caught later
                    throw new Error(res.statusText);
                }
                const json = await res.json();
                setData(json);
                setIsPending(false);
                setError(null);
            } catch (err) {
                if (err.name === "AnortError") {
                    console.log('the fetch is aborted');
                } else {
                    setIsPending(false);
                    setError("Could not fetch the data");
                    console.log(err.message);
                }
            }
        };

        fetchData();

        // clean up function
        return () => {
            controller.abort();
        };

    }, [url]);

    return { data: data, isPending: isPending, error };
};