import React from "react";
import { useState } from "react";

export default function ChangePriceComponent({ trip }) {
	const [newPrice, setNewPrice] = useState("");

	const sumbitNewPrice = (e) => {
		e.preventDefault();
		console.log(`trip id: ${trip.id} | new price: ${newPrice}`);
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
