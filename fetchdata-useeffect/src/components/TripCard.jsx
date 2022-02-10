import { useState, useEffect } from "react";
import { useAxios } from "../hooks/useAxios";

export default function TripCard({ trip, requstAfterChange }) {
	const { axiosDelete } = useAxios();
	const { response: updateRes, axiosUpdate } = useAxios();

	const [newPrice, setNewPrice] = useState("");
	const [displayPrice, setDisplayPrice] = useState(trip.price);

	useEffect(() => {
		if (updateRes.success === true) {
			setDisplayPrice(newPrice);
			setNewPrice("");
		}
	}, [updateRes]);

	const sumbitNewPrice = (e) => {
		e.preventDefault();
		if (newPrice) {
			axiosUpdate(`http://127.0.0.1:3000/trips/${trip.id}`, "PATCH", {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json;charset=UTF-8",
				},
				data: {
					price: newPrice,
				},
			});
		}
	};

	const deleteTrip = async (tripId) => {
		await axiosDelete(`http://127.0.0.1:3000/trips/${tripId}`);
		requstAfterChange();
	};

	return (
		<div>
			<h3>{trip.title}</h3>
			<p>{displayPrice}</p>

			<div>
				<label>
					<span>new price </span>
					<input type='text' value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
				</label>
				<button onClick={sumbitNewPrice}>submit</button>
			</div>

			<button onClick={() => deleteTrip(trip.id)}>delete</button>
		</div>
	);
}
