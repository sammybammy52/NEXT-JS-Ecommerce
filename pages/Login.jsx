import React from 'react'
import { useSession, signIn, signOut, getSession } from "next-auth/react";
import GoogleButton from '../components/GoogleButton';
import { useRouter } from 'next/router';

const Login = () => {
	const { data: session } = useSession()
	console.log(session);

  return (
    <div>
        <div>
  <div className="image" />
  <div className="sign-in">
    <h1>Sign In</h1>
    <form>
      <input type="email" placeholder="Username" />
      <input type="password" placeholder="Password" />
	  
      <a href="#">Forgot password?</a>
      <input type="submit" defaultValue="Sign In" />
	  <center>
		<h3 className='or-button'>Or</h3>
		<GoogleButton signIn={ signIn }/>
	  </center>
    </form>
  </div>
</div>


		
		  <style jsx>{`
        
		@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700");

		* {
		  margin: 0;
		  padding: 0;
		  box-sizing: border-box;
		}
		
		html,
		body {
		  width: 100%;
		  min-height: 100vh;
		  overflow-x: hidden;
		}
		
		body {
		  display: flex;
		  font-family: "Open Sans", sans-serif;
		}
		
		.image {
		  background: url(https://images.unsplash.com/photo-1656267124947-39f3a2102d85?crop=entropy&cs=tinysrgb&fm=jpg&ixid=MnwzMjM4NDZ8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NTY4MDMzODY&ixlib=rb-1.2.1&q=80)
			rgba(255, 255, 255, 0.3);
		  background-size: cover;
		  background-position: center;
		  background-repeat: no-repeat;
		  background-blend-mode: lighten;
		  flex: 1;
		}
		.or-button{
			margin: 15px;
		}
		
		.sign-in {
		  display: flex;
		  align-items: center;
		  justify-content: center;
		  flex-direction: column;
		  flex: 1;
		}
		
		h1 {
		  font-size: 3.5rem;
		  margin-bottom: 30px;
		}
		
		form {
		  display: flex;
		  flex-direction: column;
		  gap: 20px;
		}
		
		input[type="email"],
		input[type="password"] {
		  padding: 10px;
		  font-size: 1.2rem;
		  border: none;
		  border-bottom: solid 1px #000;
		  outline: none;
		}
		
		input[type="email"]::placeholder,
		input[type="password"]::placeholder {
		  letter-spacing: 2px;
		  transition: all 0.3s ease;
		}
		
		input[type="email"]:hover::placeholder,
		input[type="password"]:hover::placeholder {
		  color: #000;
		}
		
		input[type="submit"] {
		  background-color: #000;
		  color: #fff;
		  padding: 10px;
		  font-size: 1.3rem;
		  cursor: pointer;
		  border: none;
		  transition: all 0.3s ease;
		  border-radius: 15px;
		}
		
		input[type="submit"]:hover {
		  background-color: #eee;
		  color: #000;
		}
		
		a {
		  color: #424242;
		  text-decoration: none;
		  align-self: flex-end;
		}
		
		a:hover {
		  text-decoration: underline;
		}
		
		::selection {
		  color: #fff;
		  background-color: #000;
		}
		
		@media screen and (max-width: 786px) {
		  .image {
			display: none;
		  }
		}
		
      `}</style>
   
    </div>
  )
}

export async function getServerSideProps(context) {
	const session = await getSession(context)
  
	if (session) {
	  return {
		redirect: {
		  destination: '/',
		  permanent: false,
		}
	  }
	}
	return{
	  props:{ session }
	}
  }

export default Login