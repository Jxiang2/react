import React from 'react'
import Shimmer from './Shimmer'
import SkeletonElement from './SkeletonElement'

export default function SkeletonArticle() {

  return (
    <div className="skeleton-wrapper">
      <Shimmer/>

      <div className="skeleton-article">
        <SkeletonElement type="title"/>
        <SkeletonElement type="text"/>
        <SkeletonElement type="text"/>
        <SkeletonElement type="text"/>
      </div>
    </div>
  )
}
