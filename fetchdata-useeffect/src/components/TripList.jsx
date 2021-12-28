import { useState, useEffect } from 'react';
import './TripList.css'

export default function TripList() {
    const [trips, setTrips] = useState([])
    const [url, setUrl] = useState('http://127.0.0.1:3000/trips')

    // use effect function will only run at the first evaluation
    // orif any of it's dependencies change value
    useEffect(()=>{
        fetch(url)
        .then(response => {return response.json()})
        .then(json => setTrips(json))
    }, [url])

  console.log(trips);

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
