import axios from "axios";
import { useCallback, useEffect, useReducer } from "react";
import { IAxiosGetState, AxiosGetActionsType } from "../react-app-env";

let initState: IAxiosGetState = {
  isPending: false,
  data: null,
  success: false,
  error: null,
};

export const axiosGetReducer = (
  state: IAxiosGetState,
  action: AxiosGetActionsType,
) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, data: null, success: false, error: null };
    case "ERROR":
      return {
        isPending: false,
        data: null,
        success: false,
        error: action.payload,
      };
    case "RETRIEVED":
      return {
        isPending: false,
        data: action.payload,
        success: true,
        error: null,
      };
    default:
      return state;
  }
};

export const useAxiosGet = (url: string, headers: any) => {
  const [response, dispatch] = useReducer(axiosGetReducer, initState);

  const processRequest = useCallback(
    async (controller) => {
      dispatch({ type: "IS_PENDING", payload: "start to get" });

      try {
        const axiosResponse = await axios({
          method: "GET",
          url: url,
          headers: headers,
          signal: controller.signal,
        });

        if (!(axiosResponse && axiosResponse.status < 400))
          throw new Error(axiosResponse.statusText);

        return dispatch({ type: "RETRIEVED", payload: axiosResponse.data });
      } catch (error: any) {
        error.name === "AbortError"
          ? dispatch({ type: "ERROR", payload: "the axios request is aborted" })
          : dispatch({ type: "ERROR", payload: error.message });
      }
    },
    [url, headers],
  );

  useEffect(() => {
    const controller = new AbortController();
    console.log("ready to run effects");
    processRequest(controller);

    // clean up function runs before effect code when a dependency changes
    return () => {
      console.log("clean up first");
      controller.abort();
    };
  }, [url, headers, processRequest]);

  return { response };
};
