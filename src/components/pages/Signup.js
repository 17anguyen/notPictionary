import React, { useEffect, useState } from "react";
import "../css/SignUp.css";
import banner from "../../Assets/buttons/loginsignupbanner.svg";
import API from "../../utils/api";
import { useNavigate } from "react-router-dom/dist";


export default function SignUp({
  setToken,
  setLoading,
  setUsername
}) {
  const [registerInfo, setRegisterInfo] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleInputChangeRegister = (e) =>
    setRegisterInfo((prvState) => ({
      ...prvState,
      [e.target.name]: e.target.value,
    }));
  const registered = async (e) => {
    e.preventDefault();
    console.log("testing submit", registerInfo);
    try {
      setLoading(true)
      const checkUser = await API.getSingleUser(
        registerInfo.username
      )
     
      if (checkUser) {
        return alert("username taken!")
      }
      const response = await API.createUser(
        registerInfo.username,
        registerInfo.password
      );

      setLoading(false)
      
      if (!response) {
        alert("please enter valid credentials");
        setRegisterInfo({
          username: "",
          password: "",
        });
      } else {        
        console.log(registerInfo)
        setUsername(registerInfo.username)
        setToken(response.token)
        localStorage.setItem('token', response.token)
        localStorage.setItem('username', registerInfo.username)
        navigate('/room')
      }} catch (err) {
        console.log(err)
      }
    } ;

  console.log(registerInfo);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/room");
    }
  }, []);
  
  return (
    <div className="SignUpbg">
      <div className="container" style={{ width: "100%" }}>
        <img
          src={banner}
          className="mx-auto"
          style={{ width: "60%", height: "auto", marginTop: "10px" }}
        ></img>
        <div className="centered">
          <h2 className="title">Sign Up</h2>
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
            <form>
              <div className="form-floating mb-3">
                <input
                  type="input"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Username"
                  value={registerInfo.username}
                  onChange={handleInputChangeRegister}
                  name="username"
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
                  placeholder="Password"
                  name="password"
                  value={registerInfo.password}
                  onChange={handleInputChangeRegister}
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
                  onClick={registered}
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
