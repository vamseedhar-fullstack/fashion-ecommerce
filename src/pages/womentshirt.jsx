import React, { useContext,useState } from 'react';
import './men.css';
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai';
import { ShopContext } from "../context/shop-context";
import { Link } from "react-router-dom";


export const Womentshirt = (props) => {
  const { addToCart, cartItems,whishlistadd,detailedpageadd } = useContext(ShopContext);
  const {id,caption,category,price,saleprice,menimage,gender} = props.data
  const cartItemCount = cartItems[id];
  const [heart, setheart] = useState(false);


  function whilshlistt(id){  
    setheart(heart => !heart);  
    whishlistadd(id) 
  }

  let toggleresponce = heart ? <AiFillHeart className='heart'/>:<AiOutlineHeart className='heart'/>;


  const menshirt = () => {
    if (gender === 'women'){
      return(
        <div className='tshirtbox '>
        <Link to={`/Productsdetails/${id}`} onClick={()=>detailedpageadd({id})}>
        <div className='crop'>
          <img src={menimage} alt='img' className='tshirtimage'/>
        </div>
        </Link>     
        <h4 className='caption'>{caption}</h4>
        <div className='d-flex'>
            <h1>Rs.{saleprice}</h1>
            <p className='price'>({price})</p><span className='offer ml-2'> 70% off</span>
        </div>
        <div className=' row justify-content-between ml-1 mr-1'>
             <button className=' mb-3 button' onClick={() => addToCart(id)}>
             ADD TO CART {cartItemCount > 0 && <> ({cartItemCount})</>}</button>
             <p className=' mb-3 ' onClick={()=>whilshlistt(id)}>{toggleresponce}</p>
        </div>   
    </div>
      )
    }
  }

  return (
       menshirt()
  )
}
