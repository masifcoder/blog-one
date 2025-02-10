import React from "react";
// import postImg  from "../assets/project.jpg";
import { Link } from "react-router-dom";

const PostCard = ({post}) => {
  
  return (
    <article key='' className="bg-white p-4 rounded-lg shadow flex">
      <img
        src={post.image}
        alt={`Post image`}
        className="w-32 h-32 object-cover rounded-md mr-4"
      />
      <div>
        <Link to={`/post/${post._id}`}><h3 className="text-2xl font-semibold text-blue-500">{post.title}</h3></Link>
        <p className="text-gray-600 mt-2">
          {post && post.content}
        </p>
        {/* <a href="#" className="text-blue-400 hover:underline">Read more</a> */}
      </div>
    </article>
  );
};

export default PostCard;
