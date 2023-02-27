import React from 'react'

const Cart = ({ cartItem , addToCart , decreaseQty}) => {
     const totalPrice = cartItem.reuce((price,item) => price+ item.qty + item.price , 0)
  return (
    <>
      <section className="cart-items">
          <div className="container d_flex">
               <div className="cart-details">
                    {cartItem.length === 0 && <h1 className='no-items product'>No Items are added in cart</h1>}
               </div>
          {cartItem.map((item) => {
               const productQty = item.price * item.qty
               return (
                    <div className="cart-list product d_flex">
                         <div className="img">
                              <img src={item.cover} alt=''/>
                         </div>
                         <div className="cart-details">
                              <h3>{item.name}</h3>
                              <h3>{item.price}.00 * {item.qty} 
                              <span>${productQty}.00 </span></h3>
                         </div>
                         <div className="cart-items-function">
                              <div className="removeCart">
                                   <button className="removeCart" >
                                        <i className='fa -solid fa-xmark'/>
                                   </button>
                              </div>
                              <div className="cartControl d_flex">
                                   <button className='inCart' onClick={()=> addToCart(item)}>
                                        <i className='fa fa-plus'></i>
                                   </button>
                                   <button className='inCart' onClick={()=> decreaseQty(item)}>
                                        <i className='fa fa-minus'></i>
                                   </button>
                              </div>
                         </div>
                         <div className="cart-item-price"></div>
     
                    </div>
                    
               )
          })}
          <div className="cart-total product">
                    <h2>Cart summary</h2>
                    <div className="d_flex">
                         <h4>Total price:</h4>
                         <h3>${totalPrice}.00</h3>
                    </div>    
          </div>
          </div>
      </section>
    </>
  )
}

export default Cart
