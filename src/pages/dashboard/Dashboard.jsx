import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import PostsDataTable from '../../components/PostsDataTable';
import { AuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {

  const [posts, setPosts] = useState([]);
  const ctx = useContext(AuthContext);
  const navigator = useNavigate();

  const notifyError = (msg) => toast.error(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false
  });

  const notifySuccess = (msg) => toast.success(msg, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false
  });


  // get all posts by user
  useEffect(() => {

    axios.get("http://localhost:3003/post/all/user", {
      headers: {
        "Authorization": `Bearer ${ctx.token}`
      }
    }).then(res => {

      console.log(res)
      setPosts(res.data.posts);

    }).catch((err) => {
      // authentication failed 401 due to bad token  
      if (err.status === 401) {
        ctx.logout();
        navigator("/");
      }
    })
  }, []);



  // delete function
  const handleDelete = async (id) => {
    try {

      await axios.delete(`http://localhost:3003/post/delete/${id}`, {
        headers: {
          "Authorization": `Bearer ${ctx.token}`
        }
      });

      // sucess remove id posts 
      setPosts((prevPosts) => {
        const newPosts = prevPosts.filter((p) => p._id !== id);
        return newPosts;
      });

      notifySuccess("Post successfully deleted");

    } catch (er) {
      console.log(er);
      notifyError(er.response.data.errors);
    }

  }



  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Main Content */}
      <main className="md:col-span-2 space-y-6">

        <PostsDataTable posts={posts} onDelete={handleDelete} />

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