import React, { useContext, useEffect } from 'react'
import { CheckAuth } from '../../context/CheckAuth'
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const authCtx = useContext(CheckAuth);
  const navigator = useNavigate();

  console.log(authCtx.isLogin);

  const logout = () => {
    authCtx.setIsLogin(false);
    navigator("/login")
  }

  useEffect(() => {
    if (authCtx.isLogin === false) {
      navigator("/login")
    }
  }, []);

  return (
    <div>Dashboard
      <button onClick={() => logout()}>Logout</button>
    </div>
  )
}

export default Dashboard