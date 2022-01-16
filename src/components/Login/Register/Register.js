import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../Hooks/useFirebase';

const Register = () => {
    const { name, handleNameChange, handleEmailChange, handlePasswordChange, error, handleUserRegistration, handleGoogleSignIn } = useFirebase();
    return (
        <div>
            <div className='login-background pt-4' >
                <div data-aos="fade-in"
                    data-aos-offset="200"
                    data-aos-delay="20"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center">
                    <form className='form-style mt-4' onSubmit={handleUserRegistration}>
                        <h1>Register</h1>
                        <input onBlur={handleNameChange} className="text-input-style" type="text" placeholder="write your name" defaultValue={name} />

                        <input onBlur={handleEmailChange} className='text-input-style' type="email" placeholder="write your email" required />
                        <input onBlur={handlePasswordChange} className='text-input-style' placeholder="write your password" type="password" required />
                        <span className="error"><small>{error}</small></span>
                        {/* <input type="submit" />*/}
                        <button type="submit" className="login-btn">
                            Register
                        </button>
                        <p className='color' >OR</p>

                        <button onClick={handleGoogleSignIn} type="button" className='reset'><b>Continue with google</b></button>
                        <p className='color mt-2'>Already have an account? <Link className='reset' to="/login">Sign in</Link></p>

                    </form>
                </div>


            </div>

        </div>
    );
};

export default Register;