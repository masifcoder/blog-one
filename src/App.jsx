import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import './App.css'
import Home from './pages/Home';
import Login from './pages/Login';
import { Signup } from './pages/Signup';
import Dashboard from './pages/dashboard/Dashboard';
import Layout from './pages/dashboard/Layout';
import DashboardLayout from './pages/dashboard/DashboardLayout';
import CreatePost from './pages/dashboard/CreatePost';
import SinglePost from './pages/SinglePost';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/post/:id' element={<SinglePost />} />
        <Route path="/dashboard" element={<DashboardLayout />} >
            <Route index element={<Dashboard />} />
            <Route path='dashboard/create' element={<CreatePost />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
