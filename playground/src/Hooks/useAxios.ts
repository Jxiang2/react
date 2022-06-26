import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import {
  AxiosActionsType,
  AxiosUpdateMethodName,
  IAxiosState
} from "../react-app-env";

let initState: IAxiosState = {
  isPending: false, data: null, success: false, error: null
};

export const axiosReducer = (state: IAxiosState, action: AxiosActionsType) => {
  switch (action.type) {
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

export const useAxios = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [response, dispatch] = useReducer(axiosReducer, initState);

  const dispatchIfNotCancelled = (action: AxiosActionsType) =>
    !isCancelled && dispatch(action);

  const axiosCreate = async (url: string, options: any) => {
    try {
      const axiosResponse = await axios({
        method: "POST", url: url,
        headers: options.headers ? { ...options.headers } : {},
        data: options.data ? { ...options.data } : {},
      });

      if (!(axiosResponse && axiosResponse.status < 400))
        throw new Error(axiosResponse.statusText);

      return dispatchIfNotCancelled({ type: "CREATED", payload: axiosResponse.data });
    } catch (err: any) {
      return dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  const axiosUpdate = async (url: string, methodName: AxiosUpdateMethodName, options: any) => {
    try {
      const axiosResponse = await axios({
        method: methodName, url: url,
        headers: options.headers ? { ...options.headers } : {},
        data: options.data ? { ...options.data } : {},
      });

      if (!(axiosResponse && axiosResponse.status < 400))
        throw new Error(axiosResponse.statusText);

      return dispatchIfNotCancelled({ type: "UPDATED", payload: axiosResponse.data });
    } catch (error: any) {
      return dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
    }
  };

  const axiosDelete = async (url: string, options: any) => {
    try {
      const axiosResponse = await axios({
        method: "DELETE", url: url,
        headers: { ...options },
      });

      if (!(axiosResponse && axiosResponse.status < 400))
        throw new Error(axiosResponse.statusText);

      return dispatchIfNotCancelled({ type: "DELETED", payload: axiosResponse.data });

    } catch (error: any) {
      return dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { axiosCreate, axiosUpdate, axiosDelete, response };
  ;
};

