import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const ctx = useContext(AuthContext);
    const navigator = useNavigate();


    return (
        <div>
            <nav className="bg-white shadow p-4 flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-600"><Link to="/">Tech Blog</Link></h1>
                <div>
                    {(ctx.isLogin == true) ? (
                        <>
                            <button
                                className="bg-blue-500 cursor-pointer text-white px-4 py-2 me-2 rounded hover:bg-blue-600"
                                onClick={() => navigator("/dashboard")}
                            >
                                Dashboard
                            </button>
                            <button
                                className="bg-red-500 cursor-pointer text-white px-4 py-2 me-2 rounded hover:bg-blue-600"
                                onClick={() => navigator("/dashboard/create")}
                            >
                                Create Post
                            </button>
                            <button
                                className="bg-yellow-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600"
                                onClick={() => {
                                    ctx.logout();
                                    navigator("/login");
                                }}
                            >
                                Logout
                            </button>
                        </>


                    ) : (
                        <>
                            <button
                                className="bg-green-500 cursor-pointer text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
                                onClick={() => navigator("/login")}
                            >
                                Login
                            </button>
                            <button className="bg-blue-500 cursor-pointer text-white px-4 py-2 rounded hover:bg-blue-600"
                                onClick={() => navigator("/signup")}
                            >
                                Sign Up
                            </button>
                        </>
                    )}
                </div>
            </nav>

        </div>
    )
}

export default Navbar