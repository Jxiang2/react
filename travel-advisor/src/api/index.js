import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

export const getPlacesData = async (sw, ne, controller) => {
	try {
		const {
			data: { data },
		} = await axios.get(URL, {
			signal: controller.signal,
			params: {
				bl_latitude: sw.lat,
				tr_latitude: ne.lat,
				bl_longitude: sw.lng,
				tr_longitude: ne.lng,
			},
			headers: {
				"x-rapidapi-host": "travel-advisor.p.rapidapi.com",
				"x-rapidapi-key": "d295431269msh6ce89cf8c612f2bp178c3ejsn2a85884fe1d6",
			},
		});
		controller.abort();
		return data;
	} catch (error) {
		console.log(error.message);
	}
};
