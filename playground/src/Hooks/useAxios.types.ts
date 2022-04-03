interface IAxiosState {
  isPending: boolean;
  data: any;
  success: boolean;
  error: string | null;
};

type AxiosUpdateMethodName = "PUT" | "PATCH";

type AxiosActionsType =
  | { type: "IS_PENDING", payload: string; }
  | { type: "ERROR", payload: string; }
  | { type: "CREATED", payload: string; }
  | { type: "UPDATED", payload: string; }
  | { type: "DELETED", payload: string; };

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

export type {
  AxiosActionsType,
  AxiosUpdateMethodName
};