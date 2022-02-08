import { useReducer, useEffect, useState } from "react";
import axios from "axios";

let initialState = {
	data: null,
	isPending: false,
	error: null,
	success: false,
};

const axiosGetReducer = (state, action) => {
	switch (action.type) {
		case "INVALID_INPUT":
			return { isPending: false, data: null, success: false, error: action.payload };
		case "IS_PENDING":
			return { isPending: true, data: null, success: false, error: null };
		case "ERROR":
			return { isPending: false, data: null, success: false, error: action.payload };
		case "RETRIEVED":
			return { isPending: false, data: action.payload, success: true, error: null };
		default:
			return state;
	}
};

export const useAxiosGet = (_options) => {
	const [response, dispatch] = useReducer(axiosGetReducer, initialState);
	const [options, setOptions] = useState({ ..._options, method: "GET" });

	// update options to perform post, update, delete
	const updateOptions = (newOptions) => {
		setOptions(newOptions);
	};

	useEffect(() => {
		const controller = new AbortController();

		const isInputValid = () => {
			if (Object.keys(options).length < 2) {
				return false;
			}
			if (!(Object.keys(options).includes("url") && Object.keys(options).includes("headers"))) {
				return false;
			}
			return true;
		};

		// process crud requests
		const processRequest = async (axiosPayload) => {
			dispatch({ type: "IS_PENDING" });

			try {
				const axiosResponse = await axios({ ...axiosPayload, signal: controller.signal });
				const axiosResponseOk = axiosResponse && axiosResponse.status < 400;

				if (!axiosResponseOk) {
					throw new Error(axiosResponse.statusText);
				}

				const axiosData = await axiosResponse.data;
				dispatch({ type: "RETRIEVED", payload: axiosData });
			} catch (error) {
				error.name === "AbortError"
					? dispatch({ type: "ERROR", payload: "the axios request is aborted" })
					: dispatch({ type: "ERROR", payload: error.message });
			}
		};

		if (isInputValid()) {
			processRequest(options);
		} else {
			dispatch({
				type: "INVALID_INPUT",
				payload: "input must be an object that including url: String and headers: Object",
			});
		}

		return () => {
			controller.abort();
		};
	}, [options]);

	return { response, updateOptions };
};
