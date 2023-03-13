import { lazy } from "react";

export const MyDataTable = lazy(
  () => import("components/MyDataTable" /* webpackChunkName: "MyDataTable" */),
);
export const LifeCycle = lazy(
  () =>
    import("components/LifeCycleDemo" /* webpackChunkName: "LifeCycleDemo" */),
);
export const UsePreviousDemo = lazy(
  () => import("components/UsePrevDemo" /* webpackChunkName: "UsePrevDemo" */),
);
export const Parent = lazy(
  () => import("components/FastForward" /* webpackChunkName: "FastForward" */),
);
export const MemoDemo = lazy(
  () => import("components/MemoDemo" /* webpackChunkName: "MemoDemo" */),
);
export const TimerWrapper = lazy(
  () => import("components/EffectDemo" /* webpackChunkName: "EffectDemo" */),
);
