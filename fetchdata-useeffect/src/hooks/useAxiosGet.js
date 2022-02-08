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
			return {
				name: "invalidInput",
				isPending: false,
				data: null,
				success: false,
				error: action.payload,
			};
		case "IS_PENDING":
			return { name: "isPending", isPending: true, data: null, success: false, error: null };
		case "ERROR":
			return {
				name: "error",
				isPending: false,
				data: null,
				success: false,
				error: action.payload,
			};
		case "RETRIEVED":
			return {
				name: "retrieved",
				isPending: false,
				data: action.payload,
				success: true,
				error: null,
			};
	}
};

export const useAxios = (_options) => {
	const [response, dispatch] = useReducer(axiosReducer, initialState);
	const [options, setOptions] = useState(_options);
	const httpMethod = options.method;

	// update options to perform post, update, delete
	const updateOptions = (newOptions) => {
		setOptions(newOptions);
	};

	useEffect(() => {
		const controller = new AbortController();

		const isInputValid = () => {
			if (Object.keys(options).length < 3) {
				console.log(
					"input must be an object that including 3 properties: method: String, url: String and headers: Object"
				);
				return false;
			}

			if (
				!(
					Object.keys(options).includes("method") &&
					Object.keys(options).includes("url") &&
					Object.keys(options).includes("headers")
				)
			) {
				console.log(
					"input must be an object that including 3 properties: method: String, url: String and headers: Object"
				);
				return false;
			}

			return true;
		};

		// process crud requests
		const processRequest = async (axiosPayload) => {
			if (!["GET"].includes(httpMethod)) {
				throw new Error("useAxiosGet can only get data");
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
					case "GET":
						dispatch({ type: "RETRIEVED", payload: axiosData });
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

		if (isInputValid()) {
			if (httpMethod === "GET") {
				processRequest(options);
			}
		}

		return () => {
			controller.abort();
		};
	}, [options, httpMethod]);

	return { response, updateOptions };
};
