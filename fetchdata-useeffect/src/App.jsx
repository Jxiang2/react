import "./App.css";
import { useState } from "react";
import TripList from "./components/TripList";

function App() {
	const [showTrips, setShowTrips] = useState(true);
	return (
		<div className='App'>
			<button onClick={(e) => setShowTrips(!showTrips)}>hide trips</button>
			{showTrips && <TripList />}
		</div>
	);
}

export default App;
