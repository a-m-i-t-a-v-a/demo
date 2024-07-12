import React from 'react'
import { useGetAllProductsQuery } from '../management/productsApi'
import Body from './Body'

const Home = () => {

  const {data,error,isLoading}=useGetAllProductsQuery()

  return (
    <div className='home-container'>
      <Body data={data} error={error} isLoading={isLoading}/>
    </div>
  )
}

export default Home
