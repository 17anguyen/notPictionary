import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
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