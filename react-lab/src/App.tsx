import { Suspense } from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import { useConfirmationModalManager } from "src/context";
import { AppContext } from "src/context";
import { ConfirmationModal } from "src/components";
import {
  MyDataTable,
  MemoDemo,
  UsePreviousDemo,
  Parent,
  LifeCycle,
  TimerWrapper,
  ComponentShowCase,
  RxjsDemo,
} from "./pages";
import { Container } from "./styles";

function App() {
  return (
    <AppContext.Provider
      value={{
        utilities: { confirmationModal: useConfirmationModalManager() },
      }}
    >
      <BrowserRouter>
        <Container>
          <header>
            <nav style={{ display: "flex", gap: "1rem" }}>
              <Link to="/datatable">MyDataTable</Link>
              <Link to="/lifecycle">LifeCycle</Link>
              <Link to="/useprevious">UsePrevious</Link>
              <Link to="/fastfoward">FastFoward</Link>
              <Link to="/memo">Memo</Link>
              <Link to="/timer">Timer (useEffect)</Link>
              <Link to="/showcase">Showcase</Link>
              <Link to="/rxjs">RxjsDemo</Link>
            </nav>
          </header>

          <main>
            <Suspense fallback={<h1>Loading...</h1>}>
              <Routes>
                <Route path="/datatable" element={<MyDataTable />} />
                <Route path="/" element={<MyDataTable />} />
                <Route path="/lifecycle" element={<LifeCycle />} />
                <Route path="/useprevious" element={<UsePreviousDemo />} />
                <Route path="/fastfoward" element={<Parent />} />
                <Route path="/memo" element={<MemoDemo />} />
                <Route path="/timer" element={<TimerWrapper />} />
                <Route path="/showcase" element={<ComponentShowCase />} />
                <Route path="/rxjs" element={<RxjsDemo />} />
              </Routes>
            </Suspense>
          </main>

          {/* globally accessible confirmation modal */}
          <ConfirmationModal />
        </Container>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
