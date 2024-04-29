import React, { useState } from 'react'
import Button from '../../Compenents/Button/Button'
import axios from'axios'
import ProductCard from '../../Compenents/ProductCard/ProductCard';

const Home = () => {
const [orders,setOrders]=useState([]);

const getOrders =()=>{
    axios.get ('https://northwind.vercel.app/api/orders')
    .then(res=> {
        console.log(res);
        setOrders(res.data)
    })
};



  return (
    <div>
        {orders.map(item=> <ProductCard  item={item}/>)}
       <Button text='Click me' onClick={getOrders}/>

    </div>
  );
};
export default Home
