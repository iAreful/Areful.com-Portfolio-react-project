import * as React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useParams
} from "react-router-dom";

import { getPost } from "./api";
import PostList from "./PostList";
import { IoArrowBack} from "react-icons/io5";
function Post() {
  const { id } = useParams();
  const post = getPost(id);

  return (
    <div className="mx-auto">
        <Link to={'/'} ><p className="flex flex-row justify-start items-center text-left" ><IoArrowBack className="text-xl mr-2"/>All Posts</p></Link>
        {/* <a href="/">Back</a> */}
        <h1 className="text-4xl font-bold text-center sm:text-left">{post.title}</h1>
        <code className=" text-center sm:text-left italic mx-2">{post.date}</code>
        <code className=" text-center sm:text-left italic font-bold cursor-pointer">{post.Author}</code>
        
          <img className="w-[90vw] h-[40vh] object-cover rounded-xl mx-auto my-4" src={post.coverImg} alt={post.id} width='450'/>
        
        <p className="text-2xl text-justify my-2">{post.content}</p>
        <Link to={'/'} ><p className="flex flex-row justify-start items-center text-left" ><IoArrowBack className="text-xl mr-2"/>All Posts</p></Link>


    </div>
  );
}

export default function SinglePostDetails() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/blog/:id" element={<Post />} />
      </Routes>
    </Router>
  );
}
