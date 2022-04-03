import axios from "axios";
import { useReducer, useState, useEffect } from "react";
import { axiosReducer, AxiosActionsType, AxiosUpdateMethodName } from "./useAxios.types";

export const useAxios = () => {
  const [isCancelled, setIsCancelled] = useState(false);
  const [response, dispatch] = useReducer(axiosReducer, {
    isPending: false, data: null, success: false, error: null
  });

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

      const axiosData = await axiosResponse.data;

      dispatchIfNotCancelled({ type: "CREATED", payload: axiosData });
      return;
    }
    catch (err: any) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
      return;
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

      const axiosData = await axiosResponse.data;

      dispatchIfNotCancelled({ type: "UPDATED", payload: axiosData });
      return;
    }
    catch (error: any) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
      return;
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

      const axiosData = await axiosResponse.data;

      dispatchIfNotCancelled({ type: "DELETED", payload: axiosData });
      return;
    }
    catch (error: any) {
      dispatchIfNotCancelled({ type: "ERROR", payload: error.message });
      return;
    }
  };

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  return { axiosCreate, axiosUpdate, axiosDelete, response };;
};

