import React,{ useState } from 'react';
import { useStateContext } from '../context/StateContext';
import { usePaystackPayment } from "react-paystack";
import { getSession } from 'next-auth/react';

const Checkout = () => {
  
  const { cartItems, totalPrice } = useStateContext();

  const publicKey = "pk_test_825ec86cf1c76c265fa7d60737abbf0ce16cc16b";
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const config = {
		
		email: email,
		amount: totalPrice * 100,
		publicKey: publicKey
	};
	const initializePayment = usePaystackPayment(config);

	const onSuccess = () => {
		alert('success');
	};

	const onClose = () => {
		alert("Payment cancelled.");
	};
  
  const handleSubmit = (e) => {
		e.preventDefault();
		initializePayment(onSuccess, onClose);
	};
  return (
<div>
    <center>
    <h1 className='checkout-text'>Checkout</h1>
    </center>
  
  <div className="row">
    <div className="col-50">
      <div className="billing-info">
        <form>
        <div className="row">
            <div className="col-50">
              <h3 className='checkout-text'>Billing Address</h3>
              <label htmlFor="fname"><i className="fa fa-user" /> Full Name</label>
              <input type="text" id="fname" name="firstname" placeholder="John M. Doe" value={fullName} onChange={(e) => setFullName(e.target.value)}/>
              <p>{fullName}</p>
              <label htmlFor="email"><i className="fa fa-envelope" /> Email</label>
              <input type="text" id="email" name="email" placeholder="john@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
              <p>{email}</p>
              <label htmlFor="adr"><i className="fa fa-address-card-o" /> Address</label>
              <input type="text" id="adr" name="address" placeholder="542 W. 15th Street" value={address} onChange={(e) => setAddress(e.target.value)}/>
              <label htmlFor="city"><i className="fa fa-institution" /> City</label>
              <input type="text" id="city" name="city" placeholder="New York" value={city} onChange={(e) => setCity(e.target.value)} />
              <div className="row">
                <div className="col-50">
                  <label htmlFor="state">State</label>
                  <input type="text" id="state" name="state" placeholder="NY" value={state} onChange={(e) => setState(e.target.value)}/>
                </div>
                <div className="col-50">
                  <label htmlFor="zip">Zip</label>
                  <input type="text" id="zip" name="zip" placeholder={10001} value={zip} onChange={(e) => setZip(e.target.value)}/>
                </div>
              </div>
            </div>
            
          </div>
          <label>
            <input type="checkbox" defaultChecked="checked" name="sameadr" /> Shipping address same as billing
          </label> 
        <center><button onClick={handleSubmit} className='btn'>Pay with Paystack</button></center> 
        </form>
      </div>
    </div>
    <div className="col-25">
      <div className=" price-container">
        <h4 className='checkout-cart-title'>Cart <span className="price" style={{color: 'black'}}><i className="fa fa-shopping-cart" /> <b>{ cartItems.length }</b></span></h4>

        
        {
          cartItems.length >= 1 ? cartItems.map((item) => (
            <div className='checkout-items-container' key={item._id}>
              <p className='product-price-checkout'><a href="#">{item.name}</a> <span className="price">N{item.price}</span> </p>
              <p className='cart-item-quantity'>Quantity: { item.quantity }</p>
            </div>
            

          ))
          :(
            <p className='product-price-checkout'><a href="#">Nothing in Shopping Add something to your cart first</a> </p>
          )
        }
        
        <hr className='price-hr'/>
        <p>Total <span className="price" style={{color: 'black'}}><b>N { totalPrice }</b></span></p>
      </div>
    </div>
  </div>
</div>


  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/Login',
        permanent: false,
      }
    }
  }
  return{
    props:{ session }
  }
}


export default Checkout