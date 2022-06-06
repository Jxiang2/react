import axios from "axios";
import { useReducer, useEffect } from "react";
import { IAxiosGetState, axiosGetReducer } from "../react-app-env";

let initState: IAxiosGetState = {
  isPending: false, data: null, success: false, error: null
};

export const useAxiosGet = (url: string, headers: any) => {
  const [response, dispatch] = useReducer(axiosGetReducer, initState);

  useEffect(() => {
    const controller = new AbortController();

    const processRequest = async () => {
      dispatch({ type: "IS_PENDING", payload: "start to get" });

      try {
        const axiosResponse = await axios({
          method: "GET", url: url, headers: headers,
          signal: controller.signal
        });

        if (!(axiosResponse && axiosResponse.status < 400))
          throw new Error(axiosResponse.statusText);

        return dispatch({ type: "RETRIEVED", payload: axiosResponse.data });
      }
      catch (error: any) {
        error.name === "AbortError"
          ? dispatch({ type: "ERROR", payload: "the axios request is aborted" })
          : dispatch({ type: "ERROR", payload: error.message });
      }
    };

    processRequest();

    return () => controller.abort();
  }, [url, headers]);

  return { response };
};
