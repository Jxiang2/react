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
		case "INVALID_INPUT":
			return { isPending: false, data: null, success: false, error: action.payload };
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

export const useAxios = (_options) => {
	// input must be an object that including 3 properties: method: String, url: String and headers: Object,
	const checkInput = () => {
		if (Object.keys(_options).length < 3) {
			dispatch({
				type: "INVALID_INPUT",
				payload: "input options is invalid, make sure it at least includes method, url and headers",
			});
		}

		if (
			!(
				Object.keys(_options).includes("method") &&
				Object.keys(_options).includes("url") &&
				Object.keys(_options).includes("headers")
			)
		) {
			dispatch({
				type: "INVALID_INPUT",
				payload: "input options is invalid, make sure it at least includes method, url and headers",
			});
		}
	};

	checkInput();

	const [response, dispatch] = useReducer(axiosReducer, initialState);
	const [options, setOptions] = useState(_options);
	const httpMethod = options.method;

	const updateOptions = (newOptions) => {
		setOptions(newOptions);
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

		if (httpMethod === "GET") {
			console.log("get is running");
			processRequest(options);
		}

		if (httpMethod === "POST" && options.data) {
			console.log("post is running");
			processRequest(options);
		}

		return () => {
			controller.abort();
		};
	}, [options, httpMethod]);

	return { response, updateOptions };
};
