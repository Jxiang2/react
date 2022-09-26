import React from "react"
import MyDataTable from './components/MyDataTable'
import SimpleDropdown from './components/SimpleDropdown'
import LifeCycle from './components/LifeCycleDemo'
import UsePreviousDemo from './components/UsePrevDemo'
import Parent from './components/FastForward'

function App() {
  return (
    <div style={{ justifyContent: "center" }}>
      <MyDataTable />

      <div>
        <SimpleDropdown
          text={"options"}
          data={[
            { value: 'opt A', label: 'opt A' },
            { value: 'opt B', label: 'opt B' },
            { value: 'opt C', label: 'opt C' }
          ]}
          buttonStyle={{ width: 80 }}
          handleSelectItem={(x) => console.log(x)}
        />
      </div>

      <LifeCycle />

      <UsePreviousDemo />

      <Parent />

    </div>
  )
}

export default App
