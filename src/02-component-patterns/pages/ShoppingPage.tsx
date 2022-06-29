import React from 'react'
import { ProductButtons, ProductCard, ProductImg, ProductTitle } from '../components'
import"../styles/custom-styles.css"
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
        <ProductCard product={product} className='bg-dark'>
          <ProductCard.Image className='img' />
          <ProductCard.Title title={""} className='text-white'/>
          <ProductCard.Buttons />

        </ ProductCard>

        <ProductCard 
        product={product2}
        className='bg-dark'>
          <ProductImg className='img'/>
          <ProductTitle className='text-white' title={""}/>
          <ProductButtons className='custom-buttons'/>

        </ ProductCard>

        <ProductCard 
        product={product2}
        className='bg-dark'
        style={{backgroundColor: 'red'}} >
          
          <ProductImg className='img' style={{backgroundColor: 'blue'}} />
          <ProductTitle className='text-white' title={""} style={{backgroundColor: 'yellow'}}/>
          <ProductButtons className='custom-buttons' style={{backgroundColor: 'green'}}/>

        </ ProductCard>

        </div>

        
        </div>

  )
}
