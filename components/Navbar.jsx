import React from 'react'
import Link from 'next/link';
import { AiOutlineShopping, AiOutlineUser, AiOutlineDown } from 'react-icons/ai';
import { Cart } from './'
import { useStateContext } from '../context/StateContext';
import { useSession, signOut } from 'next-auth/react';



const Navbar = () => {
  const { data: session } = useSession()
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  return (
    <div className='navbar-container'>
        <p className='logo nav-items'>
            <Link href="/">Seye's Store</Link>
        </p>
        <div className="userdiv nav-items">
        <div className="dropdown" >
          <div className='dropdown-click'>
            <p className='pc-icon'>Hi, {session ? session.user.email : "Guest"}</p>
            <AiOutlineUser size={30} className='mobile-icon' />
            <AiOutlineDown className='down-icon'/>
          </div>

          
          <div class="dropdown-content">
            {session ? (
              <>
                <a href="#">Account</a>
                <a href="#" onClick={signOut}>Sign Out</a>
              </>

            )
              : (
                
                  <a href='/Login'>Sign In</a>
                
              )}

          </div>
        </div>
        
        </div>
        
        
          <div className="cart-div">
          <button type='button' className='cart-icon' onClick={() => setShowCart(true)}>
            <AiOutlineShopping/>
            <span className='cart-item-qty'>{ totalQuantities }</span>
        </button>
          </div>
        
        { showCart && <Cart/> }
    </div>
  )
}

export default Navbar