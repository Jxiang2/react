export interface IAxiosState {
  isPending: boolean;
  data: any;
  success: boolean;
  error: string | null;
}

export interface IAxiosGetState {
  isPending: boolean;
  data: any;
  success: boolean;
  error: string | null;
}

export type AxiosUpdateMethodName = "PUT" | "PATCH";

export type AxiosActionsType =
  | { type: "IS_PENDING"; payload: any }
  | { type: "ERROR"; payload: any }
  | { type: "CREATED"; payload: any }
  | { type: "UPDATED"; payload: any }
  | { type: "DELETED"; payload: any };

export type AxiosGetActionsType =
  | { type: "IS_PENDING"; payload: any }
  | { type: "ERROR"; payload: any }
  | { type: "RETRIEVED"; payload: any };
