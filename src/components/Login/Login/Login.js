import React, { useEffect } from 'react';
import "./Login.css"
import { Link, useHistory, useLocation } from 'react-router-dom';
import AOS from 'aos'
import 'aos/dist/aos.css'
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
    const { handleGoogleSignIn, handleEmailChange, handlePasswordChange,
        error, handleUserLogin, handleResetPassword } = useAuth();

    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/";


    const handleGoogleLoginProcess = () => {
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_url);
            })
    }


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
                <div data-aos="zoom-in-down"
                    data-aos-easing="linear"
                    data-aos-duration="600">
                    <form className='form-style mt-4' onSubmit={handleUserLogin} >
                        <h1>Login</h1>
                        <input onBlur={handleEmailChange} className='text-input-style' type="email" placeholder="write your email" required />
                        <input onBlur={handlePasswordChange} className='text-input-style' placeholder="write your password" type="password" required />
                        <span className="error"><small>{error}</small></span>
                        {/* <input type="submit" />*/}
                        <button type="submit" className="login-btn">
                            Login
                        </button>
                        <p className='color'>OR</p>

                        <button onClick={handleGoogleLoginProcess} type="button" className='reset'><b>Continue with google</b></button>
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