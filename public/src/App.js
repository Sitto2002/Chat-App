import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Attachment from "./components/Attachment";
import SetAvatar from "./components/SetAvatar";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Videocall from "./pages/Videocall";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/setAvatar" element={<SetAvatar />} />
        <Route path="/" element={<Chat />} />
        <Route path="/videoCall" element={<Videocall />} />
        <Route path="/attachment" element={<Attachment />} />
          
      </Routes>
    </BrowserRouter>
  );
}