import React, { useCallback, useRef } from 'react'
import Child from './Child'

export default function Parent() {
  const inputRef = useRef()

  const onFocus = useCallback(() => inputRef.current.focus(), [])

  return (
    <div style={{ marginTop: "50px" }}>
      <Child content="content from parent" ref={inputRef} />
      <button onClick={onFocus}>Parent</button>
    </div >
  )
}
