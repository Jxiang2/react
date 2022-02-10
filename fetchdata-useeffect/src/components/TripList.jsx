import { useAxiosGet } from "../hooks/useAxiosGet";
import TripCard from "./TripCard";
import "./TripList.css";

export default function TripList() {
	const { response, updateUrl, requstAfterChange } = useAxiosGet("http://127.0.0.1:3000/trips");

	return (
		<div className='trip-list'>
			<h2>Trip List</h2>

			{response.error && <div>{response.error}</div>}
			{response.isPending && <div>Loading...</div>}

			<ul>
				{response.data &&
					response.data.map((t) => (
						<li key={t.id}>
							<TripCard trip={t} requstAfterChange={requstAfterChange} />
						</li>
					))}
			</ul>

			<div className='filters'>
				<button onClick={() => updateUrl("http://127.0.0.1:3000/trips?loc=europe")}>
					European Trips
				</button>

				<button onClick={() => updateUrl("http://127.0.0.1:3000/trips")}>All Trips</button>
			</div>
		</div>
	);
}
