interface IAxiosGetState {
  isPending: boolean;
  data: any;
  success: boolean;
  error: string | null;
};

type AxiosGetActionsType =
  | { type: "IS_PENDING", payload: any; }
  | { type: "ERROR", payload: any; }
  | { type: "RETRIEVED", payload: any; };

export const axiosGetReducer = (state: IAxiosGetState, action: AxiosGetActionsType) => {
  switch (action.type) {
    case "IS_PENDING":
      return { isPending: true, data: null, success: false, error: null };
    case "ERROR":
      return { isPending: false, data: null, success: false, error: action.payload };
    case "RETRIEVED":
      return { isPending: false, data: action.payload, success: true, error: null };
    default:
      return state;
  }
};

export type {
  IAxiosGetState,
  AxiosGetActionsType
};