import React from 'react';

// syles 
import './Skeleton.css'

export default function SkeletonElement( {type} ) {

  const classes = `skeleton ${type}`

  return (
    <div className={classes}>

    </div>
  )
}

