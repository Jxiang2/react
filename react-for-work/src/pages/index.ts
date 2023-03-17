import { lazy } from "react";

export const MyDataTable = lazy(
  () => import("pages/MyDataTable" /* webpackChunkName: "MyDataTable" */),
);
export const LifeCycle = lazy(
  () => import("pages/LifeCycleDemo" /* webpackChunkName: "LifeCycleDemo" */),
);
export const UsePreviousDemo = lazy(
  () => import("pages/UsePrevDemo" /* webpackChunkName: "UsePrevDemo" */),
);
export const Parent = lazy(
  () => import("pages/FastForward" /* webpackChunkName: "FastForward" */),
);
export const MemoDemo = lazy(
  () => import("pages/MemoDemo" /* webpackChunkName: "MemoDemo" */),
);
export const TimerWrapper = lazy(
  () => import("pages/EffectDemo" /* webpackChunkName: "EffectDemo" */),
);
