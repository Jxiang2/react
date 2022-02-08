import { useReducer, useState } from "react";
import axios from "axios";
import { useEffect } from "react/cjs/react.production.min";

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

export const useAxios = (_options) => {
	const [response, dispatch] = useReducer(axiosGetReducer, initialState);
	const [isCancelled, setIsCancelled] = useState(false);

	const isInputValid = () => {
		if (Object.keys(options).length < 2) {
			return false;
		}
		if (!(Object.keys(options).includes("url") && Object.keys(options).includes("headers"))) {
			return false;
		}
		return true;
	};

	const dispatchIfNotCancelled = (action) => {
		if (!isCancelled) {
			dispatch(action);
		}
	};

	const axiosCreate = () => {
		if (isInputValid()) {
		}
	};

	const axiosUpdate = () => {
		if (isInputValid()) {
		}
	};

	const axiosDelete = () => {
		if (isInputValid()) {
		}
	};

	useEffect(() => {
		return () => setIsCancelled(true);
	});

	return { axiosCreate, axiosUpdate, axiosDelete, response };
};
