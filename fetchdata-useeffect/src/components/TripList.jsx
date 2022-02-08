import { useAxiosGet } from "../hooks/useAxiosGet";
import { useAxios } from "../hooks/useAxios";
import { useEffect } from "react";
import ChangePriceComponent from "./ChangePriceComponent";
import "./TripList.css";

export default function TripList() {
	const getOptions = {
		url: "http://127.0.0.1:3000/trips",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json;charset=UTF-8",
		},
	};

	const { response, updateOptions, requstAfterChange } = useAxiosGet(getOptions);
	const { response: deleteRes, axiosDelete } = useAxios();

	const deleteTrip = (tripId) => {
		axiosDelete(`http://127.0.0.1:3000/trips/${tripId}`);
	};

	useEffect(() => {
		requstAfterChange();
	}, [deleteRes]);

	return (
		<div className='trip-list'>
			<h2>Trip List</h2>

			{response.error && <div>{response.error}</div>}
			{response.isPending && <div>Loading...</div>}

			<ul>
				{response.data &&
					response.data.map((t) => (
						<li key={t.id}>
							<h3>{t.title}</h3>
							<p>{t.price}</p>
							<ChangePriceComponent trip={t} />
							<button onClick={() => deleteTrip(t.id)}>delete</button>
						</li>
					))}
			</ul>

			<div className='filters'>
				<button
					onClick={() =>
						updateOptions({ ...getOptions, url: "http://127.0.0.1:3000/trips?loc=europe" })
					}>
					European Trips
				</button>

				<button
					onClick={() => updateOptions({ ...getOptions, url: "http://127.0.0.1:3000/trips" })}>
					All Trips
				</button>
			</div>
		</div>
	);
}
