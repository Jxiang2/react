import React from "react";
import { Link } from "react-router-dom";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MyDataTable from "components/MyDataTable";
import SimpleDropdown from "components/SimpleDropdown";
import LifeCycle from "components/LifeCycleDemo";
import UsePreviousDemo from "components/UsePrevDemo";
import Parent from "components/FastForward";
import MemoDemo from "components/MemoDemo";
import TimerWrapper from "components/EffectDemo";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "1rem" }}>
        <Link to="/datatable">MyDataTable</Link>
        <Link to="/simpledropdown">SimpleDropdown</Link>
        <Link to="/lifecycle">LifeCycle</Link>
        <Link to="/useprevious">UsePrevious</Link>
        <Link to="/fastfoward">FastFoward</Link>
        <Link to="/memo">Memo</Link>
        <Link to="/timer">Timer (useEffect)</Link>
      </nav>

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
    </BrowserRouter>
  );
}

export default App;
