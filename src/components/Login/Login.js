import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth'
import bgImg from '../../images/login.png';
import './Login.css';

const Login = () => {
    const {googleSignIn, handleFormBtn, handleEmail, handlePass, error, isLogin, toggleUser, handleName} = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect = location.state?.from || '/home';
    const handleGoogleBtn = () => {
      googleSignIn()
      .then(res => {
        history.push(redirect);
      })
      
    }
    return (
        <>
          <div className="bg-area">
            <img src={bgImg} alt="" />
          </div>
          <div className="login-section">
            <div className="w-50 mx-auto">
              <form onSubmit={handleFormBtn}>
                <h1 className="my-5">{isLogin ? 'Please Login': 'Please Register'}</h1>
                {!isLogin && <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Your Name</label>
                  <div className="col-sm-10">
                    <input onBlur={handleName} required type="taxt" className="form-control" id="inputEmail3"/>
                  </div>
                </div> }
                <div className="row mb-3">
                  <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                  <div className="col-sm-10">
                    <input onBlur={handleEmail} required type="email" className="form-control" id="inputEmail3"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                  <div className="col-sm-10">
                    <input onBlur={handlePass} type="password" className="form-control" id="inputPassword3"/>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-sm-10 offset-sm-2">
                    <div className="form-check">
                      <input onChange={toggleUser} className="form-check-input" type="checkbox" id="gridCheck1"/>
                      <label className="form-check-label" htmlFor="gridCheck1">
                        Already Registered?
                      </label>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">{isLogin ? 'Sign in': 'Register'}</button>
                {
                  error && <p className="my-4 text-danger">Error: {error}</p>
                }
                
              </form>
              <br />
              <h3 className="text-center">or</h3>
              <br />
              <div className="text-center">
                <button onClick={handleGoogleBtn} className="my-5 w-50 btn btn-info text-white"><i class="fab fa-google"></i> Sing In With Google</button>
              </div>
            </div>
          </div>
        </>
    );
};

export default Login;