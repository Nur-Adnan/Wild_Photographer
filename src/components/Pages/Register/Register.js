import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../Firebase/firebase.init';
import "./Register.css";
const Register = () => {

const [email,setEmail]=useState(' ')
const [password,setPassword]=useState(' ')
const [confirmPassword,setConfirmPassword]=useState(' ')
const [error,setError]=useState(' ')
const navigate= useNavigate()

const [createUserWithEmailAndPassword,user]=useCreateUserWithEmailAndPassword(auth)



const handleEmailBlur=(e) => {
setEmail(e.target.value)
}
const handlePasswordBlur=(e) => {
setPassword(e.target.value)
}
const handleConfirmPasswordBlur=(e) => {
setConfirmPassword(e.target.value)
}


if (user) {
   navigate('/home') 
}
const handleCreateUser=(e) => {
    e.preventDefault();
    if(password !==confirmPassword){
        setError('Your two passwords did not match!!')
        return;
    }
    // if (password.length<6) {
    //     setError('Your password must be at least 6 characters or more')
    //     return;
    // }
    createUserWithEmailAndPassword(email, password)
}
// google sign in
    const [signInWithGoogle] = useSignInWithGoogle(auth);


    return (
        <div className="form_container">
        <div>
            <h2 className="form_title">Sign Up</h2>
            <form onSubmit={handleCreateUser} >
            <div className="input_group">
            <label htmlFor="email">Email</label>
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
            </div>
            <div className="input_group">
            <label htmlFor="password">Password</label>
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required />
            </div>
            <div className="input_group">
            <label htmlFor="password">Confirm Password</label>
            <input onBlur={handleConfirmPasswordBlur} type="password" name="password" id="" required/>
            </div>
            <p style={{ color: 'red'}}>
                {error }
            </p>
            <div >
                <input className="form_submit" type="submit" value="Sign up" />
            </div>
            </form>
            <div className="form_text py-4"><p>Already have an account? <Link className="form_link" to="/login"> Login</Link></p></div>
            <div className="divider">
            <div className="divider_line"></div><p className='or'>or</p>
            <div className="divider_line"></div>
            </div>
            <div >
                <button onClick={()=>signInWithGoogle()} className="form_submit_google" ><FcGoogle></FcGoogle>  Continue with Google</button>
               
            </div>
           
        </div>
    </div>
    );
};

export default Register;