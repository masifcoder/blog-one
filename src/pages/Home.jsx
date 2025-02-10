import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  
  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3003/post/all").then((res) => {
      setPosts(res.data.posts)
    })
  }, []);



  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="container mx-auto p-4">
        <header className="mb-6 text-center">
          <h2 className="text-4xl font-bold text-blue-600">Welcome to My Blog</h2>
          <p className="text-gray-600">Insights, Stories, and Ideas</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Content */}
          <main className="md:col-span-2 space-y-6">
            {
              posts.map((post, index) => {
                return (<PostCard post={post} key={index} />)
              })
            }
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

       <Footer />
      </div>
    </div>
  );
};

export default Home;