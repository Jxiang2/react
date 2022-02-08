import { useReducer, useState, useEffect } from "react";
import axios from "axios";

let initialState = {
	data: null,
	isPending: false,
	error: null,
	success: false,
};

const axiosReducer = (state, action) => {
	switch (action.type) {
		case "INVALID_INPUT":
			return { isPending: false, data: null, success: false, error: action.payload };
		case "IS_PENDING":
			return { isPending: true, data: null, success: false, error: null };
		case "ERROR":
			return { isPending: false, data: null, success: false, error: action.payload };
		case "CREATED":
			return { isPending: false, data: action.payload, success: true, error: null };
		case "UPDATED":
			return { isPending: false, data: action.payload, success: true, error: null };
		case "DELETED":
			return { isPending: false, data: action.payload, success: true, error: null };
		default:
			return state;
	}
};

export const useAxios = (_options = {}) => {
	const [response, dispatch] = useReducer(axiosReducer, initialState);
	const [isCancelled, setIsCancelled] = useState(false);

	const dispatchIfNotCancelled = (action) => {
		if (!isCancelled) {
			dispatch(action);
		}
	};

	const axiosCreate = () => {};

	const axiosUpdate = () => {};

	const axiosDelete = async (url) => {
		try {
			const axiosResponse = await axios({
				..._options,
				url: url,
				method: "DELETE",
			});

			const axiosResponseOk = axiosResponse && axiosResponse.status < 400;
			if (!axiosResponseOk) {
				throw new Error(axiosResponse.statusText);
			}

			const axiosData = await axiosResponse.data;
			dispatchIfNotCancelled({ type: "DELETED", payload: axiosData });
			return;
		} catch (error) {
			dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
			return;
		}
	};

	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { axiosCreate, axiosUpdate, axiosDelete, response };
};
