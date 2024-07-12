import React from 'react'

const Body = ({data,error,isLoading}) => {
  return (
    <>
      {isLoading ? 
          <p>Loading...</p> : 
          (error ? 
            <p>An error occured {error}</p> 
            : 
            <>
              <h2>New Arrivals</h2>
              <div className='products'>
              {data?.map((prod)=>{
                return (
                  <div key={prod.id} className='products'>
                    <img src={prod.image} alt={prod.name}/>
                    <h3>{prod.name}</h3>
                    <div className='details'>
                        <span>{prod.description}</span>
                        <span className='price'>${prod.price}</span>
                    </div>
                    <button>Add to Cart</button>
                  </div>
                )
              })}
              </div>
            </>
          )}
    </>
  )
}

export default Body
