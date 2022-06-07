import React from "react";
import { useContext } from "react";
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './Common';
import { Marginer } from '../Marginer';
import { AccountContext } from "./AccountContext";


export function SignUpForm(props) {

  const { switchToSignIn } = useContext(AccountContext);


  return ( <BoxContainer>
    <FormContainer>
      <Input type='text' placeholder='Full Name' />
      <Input type='email' placeholder='Email' />
      <Input type='password' placeholder='Password' />
      <Input type='password' placeholder='Confirm Password' />
      </FormContainer>
      <Marginer direction='vertical' margin={10} />
      <SubmitButton type='submit'>Signup</SubmitButton>
      <Marginer direction='vertical' margin='1em' />
      <MutedLink 
      href='#'>Already have an account? 
      <BoldLink 
      href='#' 
      onClick={switchToSignIn}>SignIn</BoldLink>
      </MutedLink>
  </BoxContainer>
  );
}

// import React, { Component } from 'react'

// export default class SignUp extends Component {
//   render() {
//     return (
//       <form>
//         <h3>Sign Up</h3>
//         <div className="mb-3">
//           <label>First name</label>
//           <input
//             type="text"
//             className="form-control"
//             placeholder="First name"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Last name</label>
//           <input type="text" className="form-control" placeholder="Last name" />
//         </div>
//         <div className="mb-3">
//           <label>Email address</label>
//           <input
//             type="email"
//             className="form-control"
//             placeholder="Enter email"
//           />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password"
//             className="form-control"
//             placeholder="Enter password"
//           />
//         </div>
//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Sign Up
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Already registered <a href="/sign-in">sign in?</a>
//         </p>
//       </form>
//     )
//   }
// }