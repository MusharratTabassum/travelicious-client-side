import React from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div >
            <div className='login-background pt-4' >

                <form className='form-style mt-4'>
                    <h1>Login</h1>
                    <input className='text-input-style' type="email" placeholder="write your email" required />
                    <input className='text-input-style' placeholder="write your password" type="password" required />
                    <span className="error"><small></small></span>
                    {/* <input type="submit" />*/}
                    <button type="submit" className="login-btn">
                        Login
                    </button>
                    <p className='color' >OR</p>

                    <button type="button" className='reset'><b>Continue with google</b></button>
                    <p className='color mt-2'>Create an account now <Link className='reset' to="/register">Register</Link></p>
                    <p className='color'>Forget your password?
                        <button className='reset'>Reset</button>
                    </p>

                </form>
            </div>


        </div>
    );
};

export default Login;