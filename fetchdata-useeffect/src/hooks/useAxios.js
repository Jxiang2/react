// useAxios(url, options)
// url = http://127.0.0.1:8000
// options = {
// 	method: "POST",
// 	url: url,
// 	headers: {
// 		Accept: "application/json",
// 		"Content-Type": "application/json;charset=UTF-8",
// 	},
// 	data: {
// 		property_one: val1,
// 		property_two: val2,
// 		property_three: val3,
// 	},
// };

import { useState, useReducer } from "react";

let initialState = {
	response: null,
	isPending: false,
	error: null,
	success: false,
};

const axiosReducer = (state, action) => {
	switch (action.type) {
		case "IS_PENDING":
			return { isPending: true, response: null, success: false, error: null };
		case "ERROR":
			return { isPending: false, response: null, success: false, error: action.payload };
		case "CREACTED":
			return { isPending: false, response: action.payload, success: true, error: null };
		case "RETRIEVED":
			return { isPending: false, response: action.payload, success: true, error: null };
		case "UPDATED":
			return { isPending: false, response: action.payload, success: true, error: null };
		case "DELETED":
			return { isPending: false, response: null, success: true, error: null };
	}
};

export const useAxios = (url, options) => {
	const [response, dispatch] = useReducer(axiosReducer, initialState);
	const [isCancelled, setIsCancelled] = useState();

	const dispatchIfNotCancelled = (action) => {
		if (!isCancelled) {
			dispatch(action);
		}
	};
};
