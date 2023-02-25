import React, { Suspense } from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import {
  MyDataTable,
  SimpleDropdown,
  MemoDemo,
  UsePreviousDemo,
  Parent,
  LifeCycle,
  TimerWrapper,
} from "./helpers/pages";

function App() {
  return (
    <BrowserRouter>
      <header>
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/datatable">MyDataTable</Link>
          <Link to="/simpledropdown">SimpleDropdown</Link>
          <Link to="/lifecycle">LifeCycle</Link>
          <Link to="/useprevious">UsePrevious</Link>
          <Link to="/fastfoward">FastFoward</Link>
          <Link to="/memo">Memo</Link>
          <Link to="/timer">Timer (useEffect)</Link>
        </nav>
      </header>

      <main>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/datatable" element={<MyDataTable />} />
            <Route
              path="/simpledropdown"
              element={
                <SimpleDropdown
                  text={"options"}
                  data={[
                    { value: "opt A", label: "opt A" },
                    { value: "opt B", label: "opt B" },
                    { value: "opt C", label: "opt C" },
                  ]}
                  buttonStyle={{ width: 80 }}
                  handleSelectItem={(x: any) => console.log(x)}
                />
              }
            />
            <Route path="/lifecycle" element={<LifeCycle />} />
            <Route path="/useprevious" element={<UsePreviousDemo />} />
            <Route path="/fastfoward" element={<Parent />} />
            <Route path="/memo" element={<MemoDemo />} />
            <Route path="/timer" element={<TimerWrapper />} />
          </Routes>
        </Suspense>
      </main>
    </BrowserRouter>
  );
}

export default App;
