import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../utils/api";
import "../css/login.css";
import banner from "../../Assets/buttons/loginsignupbanner.svg";
export default function Login({ setUsername }) {
  // username,
  // loggedIn,
  // loggedOut,
  // handleInputChange
  const [loginInfo, setLoginInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChange = (e) =>
    setLoginInfo((prvState) => ({
      ...prvState,
      [e.target.name]: e.target.value,
    }));
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await API.login(loginInfo.username, loginInfo.password);
      console.log(response);
      if (response.status === 200) {
        console.log("login successful!");
        setUsername(loginInfo.username);
        localStorage.setItem("token", response.token);
        localStorage.setItem("username", loginInfo.username);
        navigate("/room");
      }
      if (response.status === 400) {
        alert("wrong login info!");
      }
      console.log(response);
    } catch (err) {
      alert("login failed!");
      console.log("login failed", err);
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/room");
    }
  }, []);
  return (
    <div className="loginbg">
      <div className="container" style={{ width: "100%" }}>
        <img
          src={banner}
          className="mx-auto"
          style={{ width: "60%", height: "auto", marginTop: "10px" }}
        ></img>
        <div className="centered">
          <h2 className="title">Log In</h2>
        </div>
      </div>
      <div className="row">
        <div
          className="card position-absolute top-50 start-50 translate-middle"
          style={{
            backgroundColor: "black",
            color: "white",
            border: "solid 3px #FE00FE",
            borderRadius: "25px",
            width: "80%",
            height: "50%",
          }}
        >
          <div
            className="card-body positon-relative"
            style={{ paddingTop: "10%" }}
          >
            <form onSubmit={handleLogin}>
              <div className="form-floating mb-3">
                <input
                  type="input"
                  className="form-control"
                  id="floatingInput"
                  name="username"
                  value={loginInfo.username}
                  onChange={handleInputChange}
                  placeholder="Username"
                  style={{
                    borderRadius: "25px",
                    height: "55px",
                  }}
                />
                <label
                  for="floatingInput"
                  style={{
                    color: "#797979",
                  }}
                >
                  Username
                </label>
              </div>
              <div className="form-floating">
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  name="password"
                  placeholder="Password"
                  value={loginInfo.password}
                  onChange={handleInputChange}
                  style={{
                    borderRadius: "25px",
                    height: "55px",
                  }}
                />
                <label
                  for="floatingPassword"
                  style={{
                    color: "#797979",
                  }}
                >
                  Password
                </label>
              </div>
              <div className="text-center" style={{ paddingTop: "15px" }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{
                    borderRadius: "25px",
                    height: "50px",
                    backgroundColor: "#FF6E27",
                    width: "auto",
                    fontSize: "25px",
                  }}
                  onClick={handleLogin}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
