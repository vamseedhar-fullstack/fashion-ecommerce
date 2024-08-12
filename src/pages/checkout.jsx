import React,{useContext} from 'react';
import './checkout.css';
import Mentshirts from '../men';
import { ShopContext } from "../context/shop-context";



export const Checkout = (props) => {
  const {cartItems,addToCart,removeFromCart,updatequantity,getTotalCartAmount } = useContext(ShopContext);
  const total = getTotalCartAmount() ;

  const grandtotal = ((total)+30);

  return (
    <div className='pt-5'>
    <div className='d-flex flexdirectionss justify-content-center mt-5 mb-5'>
    <div >
    <div>
           <h4>ORDER SUMMERY</h4>
      </div>
            {Mentshirts.map((product) =>{
                if (cartItems[product.id] !== 0 ){
                    return (        
                      <div >
                        
                        <div>
                          
                          <div>
                                    <div className='cartitembox cartitemboxx m-2'>
                                          <div className='d-flex flex-row  pt-3'>
                                          <img src={product.menimage} alt='img' className='cartimg' />
                                          <div className='ml-3'>
                                          <h1>{product.caption}</h1>
                                          <p>Seller : Yatayati retailer</p>
                                          <div className='d-flex'>
                                            <h1>Rs.{product.saleprice}</h1>
                                            <p className='price pt-2'>({product.price})</p><span className='offer ml-3 pt-2'> 70% off</span>
                                        </div>
                                          <div className='mt-3'>
                                              <button onClick={() => addToCart(product.id)}>+</button>
                                              <input value={cartItems[product.id]} onChange={(e) => updatequantity(Number(e.target.value),product.id)}/>
                                              <button onClick={() => removeFromCart(product.id)}>-</button>
                                          </div>
                                        </div> 
                                    </div>
                                  </div>
                          </div>

                        </div>
                        
                      </div>
                    )
                }
            })}
        </div> 
        <div>
                        <div className="container">
                              <div className="card cart">
                                <label className="title">CHECKOUT</label>
                                <div className="steps">
                                  <div className="step">
                                    <div>
                                      <span>SHIPPING</span>
                                      <textarea value='4th floor, above zenius it services,
                                       Om Sri Sai Nagar Colony, Old Alwal, Alwal
                                        Secunderabad, Telangana 500010' className='addresinput'/>
                                        <div>
                                        <button className='btn btn-info mt-2'>Submit Address</button>  
                                        </div>
                                        
                                    </div>
                                    <hr/>
                                    <div>
                                      <span>PAYMENT METHOD</span>
                                      <select className='paymentmethod'>
                                      <option selected>Click Me</option>
                                      <option>Phone Pay</option>
                                      <option>Google Pay</option>
                                      <option>Credit Card</option>
                                      <option>Debit Card</option>
                                      
                                      </select>
                                    </div>
                                    
                                    <div className="promo mt-3">
                                      <span>HAVE A PROMO CODE?</span>
                                      <form className="form">
                                        <input className="input_field" placeholder="Enter a Promo Code" type="text"/>
                                        <button>Apply</button>
                                      </form>
                                    </div>
                                    
                                    <div className="payments mt-3">
                                      <span>PAYMENT</span>
                                      <div className="details">
                                        <span>Subtotal:</span>
                                        <span>Rs.{total}.00/-</span>
                                        <span>Shipping:</span>
                                        <span>Rs.10.00/-</span>
                                        <span>Tax:</span>
                                        <span>Rs.30.40/-</span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="card checkout">
                                <div className="footer">
                                  <label className="priceee">Rs.{grandtotal}/-</label>
                                  <button className="checkout-btn">Payment</button>
                                </div>
                              </div>
                            </div>
                        </div>
        </div>
    </div>
  )
}
