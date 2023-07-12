import { lazy } from "react";

export const MyDataTable = lazy(
  () => import("src/pages/MyDataTable" /* webpackChunkName: "MyDataTable" */),
);
export const LifeCycle = lazy(
  () =>
    import("src/pages/LifeCycleDemo" /* webpackChunkName: "LifeCycleDemo" */),
);
export const UsePreviousDemo = lazy(
  () => import("src/pages/UsePrevDemo" /* webpackChunkName: "UsePrevDemo" */),
);
export const Parent = lazy(
  () => import("src/pages/FastForward" /* webpackChunkName: "FastForward" */),
);
export const MemoDemo = lazy(
  () => import("src/pages/MemoDemo" /* webpackChunkName: "MemoDemo" */),
);
export const TimerWrapper = lazy(
  () => import("src/pages/EffectDemo" /* webpackChunkName: "EffectDemo" */),
);
export const ComponentShowCase = lazy(
  () =>
    import(
      "src/pages/ComponentShowCase" /* webpackChunkName: "ComponentShowCase" */
    ),
);

export const RxjsDemo = lazy(
  () => import("src/pages/RxjsDemo" /* webpackChunkName: "RxjsDemo" */),
);
