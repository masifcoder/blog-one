import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PostCard from '../../components/PostCard';
import Datatable from '../../components/Datatable';
import ReactDataTable from '../../components/ReactDataTable';


const Dashboard = () => {

  const [posts, setPosts] = useState([]);


  useEffect(() => {
    axios.get("http://localhost:3003/post/all").then((res) => {
      setPosts(res.data.posts)
    })
  }, []);


  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Main Content */}
      <main className="md:col-span-2 space-y-6">

        <ReactDataTable data={posts} />

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
  )
}

export default Dashboard