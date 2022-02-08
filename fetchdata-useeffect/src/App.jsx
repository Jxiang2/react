import { useState } from "react";
import TripList from "./components/TripList";

function App() {
	const [showTrips, setShowTrips] = useState(true);
	const [title, setTitle] = useState("");
	const [price, setPrice] = useState("");
	const [location, setLocation] = useState("");

	const resetForm = () => {
		setTitle("");
		setPrice("");
		setLocation("");
	};

	const addNewtrip = (e) => {
		e.preventDefault();
		if (title && price && location) {
			console.log(title, price, location);
			resetForm();
		} else {
			console.log("input can not be empty!");
			resetForm();
		}
	};

	return (
		<div className='App'>
			{showTrips ? (
				<button onClick={(e) => setShowTrips((prevShowTips) => !prevShowTips)}>hide trips</button>
			) : (
				<button onClick={(e) => setShowTrips((prevShowTips) => !prevShowTips)}>add trip</button>
			)}

			{showTrips && <TripList />}
			{!showTrips && (
				<form style={{ marginTop: "20px" }} onSubmit={addNewtrip}>
					<label>
						<span>Tripe Title</span>
						<input type='text' onChange={(e) => setTitle(e.target.value)} value={title} />
					</label>

					<label>
						<span>Tripe Price</span>
						<input type='text' onChange={(e) => setPrice(e.target.value)} value={price} />
					</label>

					<label>
						<span>Tripe Location</span>
						<input type='text' onChange={(e) => setLocation(e.target.value)} value={location} />
					</label>

					<button>Submit</button>
				</form>
			)}
		</div>
	);
}

export default App;
