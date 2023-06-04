import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import API from "./utils/api"
import CorrectAnswer from './components/pages/CorrectAnswer'
import Final from './components/pages/FinalWinner'
import InGame from './components/pages/InGame'
import Lead from './components/pages/InGameLeader'
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

      return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home username={username} />} />
          <Route path="/correctanswer" element={<CorrectAnswer />} />
          <Route path="/final" element={<Final />} />
          <Route path="/game/:roomId" element={<InGame username={username} />} />
          <Route path="/lead" element={<Lead />} />
          {/* <Route path="/lobby" element={<Lobby />} /> */}
          <Route path="/login" element={<Login 
          username={username}/>} />
          <Route path="/room" element={<RoomSelect />} />
          <Route path="/signup" element={<Signup
            username={username}
            setUsername={setUsername}
            setLoading={setLoading}
            loading={loading}
            registerInfo={registerInfo}
          />} />
          <Route path="/userselect" element={<UserSelect />} />
          <Route path="/word" element={<Word />} />
          <Route path="/wronganswer" element={<WrongAnswer />} />
        </Routes>
      </BrowserRouter>
    );
  }
  export default App;