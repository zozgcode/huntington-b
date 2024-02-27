import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"
import users from "../userDB";
import Header from "../header/Header";

const Login = () => {
  const [islogged, setIslogged] = useState(false);
  const [loginParams, setLoginParams] = useState({
    user_id: "",
    user_password: ""
  });
  const navigate = useNavigate();
  const handleFormChange = (event) => {
    const loginParamsNew = { ...loginParams };
    const val = event.target.value;
    loginParamsNew[event.target.name] = val;
    setLoginParams(loginParamsNew);
  };

  const login = (event) => {
    const user_id = loginParams.user_id;
    const user_password = loginParams.user_password;
    for (let user of users) {
      if (user.username === user_id && user.password === user_password) {
        localStorage.setItem("token", "T");
        localStorage.setItem("user", JSON.stringify(user)); // set the user data
        setIslogged(true);
        return;
      }
    }
    event.preventDefault();
  };

  useEffect(() => {
    if (islogged) {
      navigate("/");
    }
  }, [islogged, navigate]);

  if (localStorage.getItem("token")) {
    return navigate("/");
  }

  return (
    <div className="login-page">
      <div className="container">
        <Header />
        <div className="login-content">
          <div className="login-desc">
          <h2>Log into Online Banking</h2>
          </div>
          
          <form onSubmit={login} className="login-form">
            <div className="form-group">
              <label className="control-label" style={{ color: "#808080" }}>
                Username
              </label>
              <input
                type="text"
                name="user_id"
                onChange={handleFormChange}
                className="form-control"
                // placeholder="User ID"
                autofocus=""
              />
              <input type="hidden" name="code" value="" className="form-control" />
            </div>
            <div className="form-group">
              <label className="control-label" style={{ color: "#808080" }}>
                Password
              </label>
              <input
                type="password"
                name="user_password"
                onChange={handleFormChange}
                className="form-control"
                // placeholder="Password"
              />
            </div>
            <div className="save_username_container">
              <label className="save_username">
                Remember Me
                <input type="checkbox" />
                <span className="checkmark"></span>
              </label>
            </div>
            <div className="button_box">
              <button type="submit" className="btn btn-inverse">
                <span class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" focusable="false" role="presentation" aria-hidden="true"><path d="M16.2641,10.283V7.7381a4.2987,4.2987,0,1,0-8.5973,0v2.5474a1.7624,1.7624,0,0,0-1.6594,1.7591v6.7536A1.7623,1.7623,0,0,0,7.77,20.5608h8.46a1.762,1.762,0,0,0,1.7626-1.7626V12.0446A1.762,1.762,0,0,0,16.2641,10.283Zm-3.3768,5.7476V17.96H11.1357V16.044a1.717,1.717,0,1,1,1.7516-.0134Zm1.6689-5.7485H9.3746V7.66a2.5383,2.5383,0,0,1,2.5383-2.5383h.1051A2.5382,2.5382,0,0,1,14.5562,7.66Z"></path></svg> 
                </span>
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
