import { useState, useEffect, useCallback } from 'react';
import './TripList.css'

export default function TripList() {
    const [trips, setTrips] = useState([])
    const [url, setUrl] = useState('http://127.0.0.1:3000/trips')

    // In JS, functions are changed after every re-evaluation
    // solution: useCallback to cache the function, unless it's REALLY changed
    const fetchTrips = useCallback( async() => {
        const res = await fetch(url)
        const json = await res.json()
        setTrips(json)
    }, [url])

    // use effect function will only run at the first evaluation
    // or if ANY of it's dependencies change value
    useEffect(()=>{
        fetchTrips()
    }, [fetchTrips])

    // console.log(trips);

    return (
        <div className='trip-list'>
            <h2>Trip List</h2>

            <ul>
                {trips.map(trip => (
                    <li key={trip.id}>
                        <h3>{trip.title}</h3>
                        <p>{trip.price}</p>
                    </li>))}
            </ul>

            <div className='filters'>
                <button onClick={()=>setUrl("http://127.0.0.1:3000/trips?loc=europe")}>
                    European Trips
                </button>

                <button onClick={()=>setUrl("http://127.0.0.1:3000/trips")}>
                    All Trips
                </button>
            </div>
        </div>
    )
}
