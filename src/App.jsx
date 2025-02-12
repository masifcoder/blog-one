import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import { Signup } from './pages/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import CreatePost from './pages/dashboard/CreatePost';
import SinglePost from './pages/SinglePost';
import Notfound from './pages/Notfound';
import { ToastContainer } from 'react-toastify';



function App() {
  const [count, setCount] = useState(0);


  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/post/:id' element={<SinglePost />} />

        {/* child routing */}
        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='create' element={<CreatePost />} />
        </Route>

        <Route path='*' element={<Notfound />} />
      </Routes>
      <ToastContainer />
    </>
  )
}

export default App
