import React, { useEffect } from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';
import useFirebase from "../../../Hooks/useFirebase";
import AOS from 'aos'
import 'aos/dist/aos.css'

const Login = () => {
    const { handleGoogleSignIn, handleEmailChange, handlePasswordChange,
        error, handleUserLogin, handleResetPassword } = useFirebase();


    useEffect(() => {
        AOS.init(
            {
                anchorPlacement: 'top-bottom'
            }
        )
    }, [])
    return (
        <div >
            <div className='login-background pt-4' >
                <div data-aos="fade-in"
                    data-aos-offset="200"
                    data-aos-delay="20"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <form className='form-style mt-4' onSubmit={handleUserLogin} >
                        <h1>Login</h1>
                        <input onBlur={handleEmailChange} className='text-input-style' type="email" placeholder="write your email" required />
                        <input onBlur={handlePasswordChange} className='text-input-style' placeholder="write your password" type="password" required />
                        <span className="error"><small>{error}</small></span>
                        {/* <input type="submit" />*/}
                        <button type="submit" className="login-btn">
                            Login
                        </button>
                        <p className='color' >OR</p>

                        <button onClick={handleGoogleSignIn} type="button" className='reset'><b>Continue with google</b></button>
                        <p className='color mt-2'>Create an account now <Link className='reset' to="/register">Register</Link></p>
                        <p className='color'>Forget your password?
                            <button onClick={handleResetPassword} className='reset'>Reset</button>
                        </p>

                    </form>
                </div>


            </div>


        </div>
    );
};

export default Login;