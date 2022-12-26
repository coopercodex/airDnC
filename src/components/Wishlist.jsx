import React from 'react'
import { useSelector } from 'react-redux'
import { selectItems } from '../slices/favoriteSlice'
import { WishlistItems } from './WishlistItems'
export const Wishlist = () => {
  const items = useSelector(selectItems)

  console.log(items)
  return (
    <div>
      <h1>
        {items.length === 0 ? "Your Wishlist Is Empty" : "Your Wishlist"}
      </h1>
      {items.map((places, i) => (
        <WishlistItems places={places} key={i} id={i} />
      ))}
    </div>
  )
}
