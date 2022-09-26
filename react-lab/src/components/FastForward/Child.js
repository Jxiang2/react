import React, { forwardRef } from 'react'

const Child = forwardRef(({ content }, ref) => {
  return (< input type="text" defaultValue={content} ref={ref} />)
})

export default Child