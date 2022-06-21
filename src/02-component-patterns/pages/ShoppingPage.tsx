import React from 'react'
import { ProductButtons, ProductCard, ProductImg, ProductTitle } from '../components'

const product ={
  id: 1,
  title: 'Coffee',
  img: './coffee-mug.png',
}

const product2 ={
  id: 1,
  title: 'Coffeeww',
}


export const ShoppingPage = () => {
  return (
    <div>
        <h1>Shop Store</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title title={""}/>
          <ProductCard.Buttons />

        </ ProductCard>

        <ProductCard product={product2}>
          <ProductImg />
          <ProductTitle title={""}/>
          <ProductButtons />

        </ ProductCard>

        </div>

        
        </div>

  )
}
