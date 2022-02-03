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
				"x-rapidapi-key": "6f8ea05b8cmsh7f4e5706fbe1517p18773bjsnd36f6b5c3459",
			},
		});
		controller.abort();
		return data;
	} catch (error) {
		console.log(error.message);
	}
};
