import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';


const Dashboard = () => {
  const navigator = useNavigate();
  const AuthCtx = useContext(AuthContext);


  console.log(AuthCtx);

  
  const logout = () => {
    AuthCtx.logout();
    navigator("/login");
  }

  useEffect(() => {
    if(AuthCtx.isLogin === false) {
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