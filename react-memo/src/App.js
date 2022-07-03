import { memo, useMemo, useState } from 'react'
import './App.css'

function Swatch({ params }) {
  console.log(`Swatch  rendered ${params.color}`)

  return (
    <div
      style={{ margin: 2, width: 75, height: 75, backgroundColor: params.color }}></div>
  )
}

// maintain the content of Swatch by memo it, compare previous props to new props
// when props change, the memoized component re-renders
const MemoedSwatch = memo(Swatch)

function App() {
  const [appRenderIndex, setAppRenderIndex] = useState(0)
  const [color, setColor] = useState('red')
  const params = useMemo(() => ({ color }), [color]) // create the {color}, only changes when color changes

  console.log(`App rendered ${appRenderIndex}`)

  return (
    <div className="App">
      <button onClick={() => setAppRenderIndex(prev => appRenderIndex + 1)}>
        re-render app
      </button>

      <button onClick={() => setColor(color === 'red' ? 'blue' : 'red')}>
        change color
      </button>

      <MemoedSwatch params={params} />

      {/* another independent instance of MemoedSwatch */}
      {/* <MemoedSwatch params={{ color: color === "red" ? "blue" : "red" }} /> */}
    </div>
  )
}

export default App
