import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
import ChangePriceComponent from "./ChangePriceComponent";
import "./TripList.css";

export default function TripList() {
	const [url, setUrl] = useState("http://127.0.0.1:3000/trips");
	const { data: trips, isPending, error } = useFetch(url, { type: "GET" });

	const deleteTrip = (tripId) => {
		console.log(`delete the trip with id ${tripId}`);
	};

	return (
		<div className='trip-list'>
			<h2>Trip List</h2>

			{error && <div>{error}</div>}
			{isPending && <div>Loading...</div>}

			<ul>
				{trips &&
					trips.map((trip) => (
						<li key={trip.id}>
							<h3>{trip.title}</h3>
							<p>{trip.price}</p>
							<ChangePriceComponent trip={trip} />
							<button onClick={() => deleteTrip(trip.id)}>delete</button>
						</li>
					))}
			</ul>

			<div className='filters'>
				<button onClick={() => setUrl("http://127.0.0.1:3000/trips?loc=europe")}>
					European Trips
				</button>

				<button onClick={() => setUrl("http://127.0.0.1:3000/trips")}>All Trips</button>
			</div>
		</div>
	);
}
