import { useReducer, useEffect, useState } from "react";
import axios from "axios";

let initialState = {
	data: null,
	isPending: false,
	error: null,
	success: false,
};

const axiosReducer = (state, action) => {
	switch (action.type) {
		case "IS_PENDING":
			return { isPending: true, data: null, success: false, error: null };
		case "ERROR":
			return { isPending: false, data: null, success: false, error: action.payload };
		case "CREATED":
			return { isPending: false, data: action.payload, success: true, error: null };
		case "RETRIEVED":
			return { isPending: false, data: action.payload, success: true, error: null };
		case "UPDATED":
			return { isPending: false, data: action.payload, success: true, error: null };
		case "DELETED":
			return { isPending: false, data: null, success: true, error: null };
		default:
			return state;
	}
};

export const useAxios = (options) => {
	const [response, dispatch] = useReducer(axiosReducer, initialState);
	const [payload, setPayload] = useState(options);
	const httpMethod = options.method;

	const updateOptions = (newOptions) => {
		setPayload(newOptions);
	};

	useEffect(() => {
		const controller = new AbortController();

		const processRequest = async (axiosPayload) => {
			if (!["GET", "POST", "PUT", "PATCH", "DELETE"].includes(httpMethod)) {
				throw new Error("Http method can not be recognized");
			}

			dispatch({ type: "IS_PENDING" });

			try {
				const axiosResponse = await axios({ ...axiosPayload, signal: controller.signal });
				const axiosResponseOk = axiosResponse && axiosResponse.status < 400;

				if (!axiosResponseOk) {
					throw new Error(axiosResponse.statusText);
				}

				const axiosData = await axiosResponse.data;

				switch (httpMethod) {
					case "POST":
						dispatch({ type: "CREATED", payload: axiosData });
						break;
					case "GET":
						dispatch({ type: "RETRIEVED", payload: axiosData });
						break;
					case "PUT":
					case "PATCH":
						dispatch({ type: "UPDATED", payload: axiosData });
						break;
					case "DELETED":
						dispatch({ type: "DELETED", payload: axiosData });
						break;
					default:
						break;
				}
			} catch (error) {
				error.name === "AbortError"
					? dispatch({ type: "ERROR", payload: "the axios request is aborted" })
					: dispatch({ type: "ERROR", payload: error.message });
			}
		};

		processRequest(payload);

		return () => {
			controller.abort();
		};
	}, [payload, httpMethod]);

	return { response, updateOptions };
};
