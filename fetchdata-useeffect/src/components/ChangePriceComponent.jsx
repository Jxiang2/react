import React from "react";
import { useState } from "react";
import { useAxios } from "../hooks/useAxios";

export default function ChangePriceComponent({ trip, refRequstAfterChange }) {
	const [newPrice, setNewPrice] = useState("");
	const { axiosUpdate } = useAxios();

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
		refRequstAfterChange();
		setNewPrice("");
	};

	return (
		<div>
			<label>
				<span>new price </span>
				<input type='text' value={newPrice} onChange={(e) => setNewPrice(e.target.value)} />
			</label>
			<button onClick={sumbitNewPrice}>submit</button>
		</div>
	);
}
