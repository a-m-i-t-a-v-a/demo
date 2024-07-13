import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../management/cartSlice'
import { useNavigate } from 'react-router-dom'

const Body = ({data,error,isLoading}) => {

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleAddToCart=(product)=>{
    dispatch(addToCart(product))
    navigate('/cart')
  }

  return (
    <div className='main-container'>
      {isLoading ? 
          <p>Loading...</p> : 
          (error ? 
            <p>An error occured {error}</p> 
            : 
            <>
              <h2>New Arrivals</h2>
              <div className='product-container'>
              {data?.map((prod)=>{
                return (
                  <div key={prod.id} className='products'>
                    <img src={prod.image} alt={prod.name}/>
                    <h3>{prod.name}</h3>
                    <div className='details'>
                        <span>{prod.description}</span>
                        <span className='price'>${prod.price}</span>
                    </div>
                    <button onClick={()=>handleAddToCart(prod)}>Add to Cart</button>
                  </div>
                )
              })}
              </div>
            </>
          )}
    </div>
  )
}

export default Body
