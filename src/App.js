import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import API from "./utils/api"
import CorrectAnswer from './components/pages/CorrectAnswer'
import Final from './components/pages/FinalWinner'
import InGame from './components/pages/InGame'
import Lead from './components/pages/InGameLeader'
import Lobby from './components/pages/Lobby'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import RoomSelect from './components/pages/RoomSelect'
import Signup from './components/pages/Signup'
import UserSelect from './components/pages/UserSelect'
import Word from './components/pages/Word'
import WrongAnswer from './components/pages/WrongAnswer'

function App() {
  const [username, setUsername] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false)

  var loggedIn = false;

  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  })

  const [registerInfo, setRegisterInfo] = useState({
    username: '',
    password: '',
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
        setLoading(true)
        API.getTokenData(token)
        .then((data) => {
              setLoading(false)
              if (data.err) {
                console.log(data.err);
                localStorage.removeItem("token");
              } else {
                setUsername(data.username);
                setToken(token);
              }
            })
            .catch((err) => {
                setLoading(false)
                console.log("bad token");
                console.log(err);
            });
    }
}, []);

const registered = async (e) => {
  e.preventDefault();
  console.log("testing submit");
  try {
    setLoading(true)
    const response = await API.createUser(
      registerInfo.username,
      registerInfo.password
    );
    setLoading(false)
    if (response.code === 1064) {
      alert("please choose another username");
      setRegisterInfo({
        username: '',
        password: '',
      });
      setLoginInfo({
        username:'',
        password:''
      })
    } else {
      console.log(registerInfo)
      console.log(loginInfo)
    }
  } catch (err) {
    console.log(err)
  }
}
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/correctanswer" element={<CorrectAnswer />} />
        <Route path="/final" element={<Final />} />
        <Route path="/game" element={<InGame />} />
        <Route path="/lead" element={<Lead />} />
        <Route path="/lobby" element={<Lobby />} />
        <Route path="/login" element={<Login />} />
        <Route path="/room" element={<RoomSelect />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/userselect" element={<UserSelect />} />
        <Route path="/word" element={<Word />} />
        <Route path="/wronganswer" element={<WrongAnswer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;