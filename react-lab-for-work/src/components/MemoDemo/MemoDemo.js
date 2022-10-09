import { memo, useMemo, useState } from 'react'

function Swatch({ params }) {
  console.log(`Swatch rendered ${params.color}`)

  return (
    <div
      style={{
        margin: 2,
        width: 75,
        height: 75,
        backgroundColor: params.color
      }}
    />
  )
}

// maintain the content of Swatch by memo it,
// compare previous props to new props
// when props change, the memoized component re-renders
const MemoedSwatch = memo(Swatch)

export default function MemoDemo() {
  const [appRenderIndex, setAppRenderIndex] = useState(0)
  const [color, setColor] = useState('red')
  // create the {color}, only changes when color changes
  const params = useMemo(() => ({ color }), [color])

  console.log(`App rendered ${appRenderIndex}`)

  return (
    <div style={{ zoom: 2, marginTop: "50px" }}>
      <button
        onClick={() => setAppRenderIndex(
          prev => prev + 1)
        }
      >
        re-render app
      </button>

      <button
        onClick={() => setColor(color === 'red' ? 'blue' : 'red')}
      >
        change color
      </button>

      <MemoedSwatch params={params} />

      {/* another independent instance of MemoedSwatch */}
      {/* <MemoedSwatch
        params={{ color: color === "red" ? "blue" : "red" }}
      /> */}
    </div>
  )
}