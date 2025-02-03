import React, { useState } from 'react';
import PostCard from '../components/PostCard';

const Home = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">My Blog</h1>
        <div>
          {isLoggedIn ? (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              onClick={() => setIsLoggedIn(false)}
            >
              Dashboard
            </button>
          ) : (
            <>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded mr-2 hover:bg-green-600"
                onClick={() => setIsLoggedIn(true)}
              >
                Login
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Sign Up
              </button>
            </>
          )}
        </div>
      </nav>

      <div className="container mx-auto p-4">
        <header className="mb-6 text-center">
          <h2 className="text-4xl font-bold text-blue-600">Welcome to My Blog</h2>
          <p className="text-gray-600">Insights, Stories, and Ideas</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <main className="md:col-span-2 space-y-6">
           <PostCard />
           <PostCard />
           <PostCard />
          </main>

          {/* Sidebar */}
          <aside className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-xl font-bold text-gray-700 mb-4">Categories</h3>
            <ul className="space-y-2">
              {['Tech', 'Lifestyle', 'Travel', 'Food'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-blue-500 hover:underline">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <footer className="mt-8 text-center text-gray-500">
          © 2025 My Blog. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Home;