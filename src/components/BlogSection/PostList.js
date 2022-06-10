import * as React from "react";
import {
  Link
} from "react-router-dom";

import { getPosts } from "./api";

function PostList() {
  const posts = getPosts();

  return (
    <div>
      <h1 className='text-3xl sm:text-6xl mx-auto font-bold border-b-4 pb-4 w-[12rem] sm:w-96 text-white'>Recent Blog</h1>
      {posts.map(({Author, date, id, title }) => (
      <div
			id='blog'
			className='dark:bg-[#052D3F] bg-[#FEF8B2] p-4 rounded-xl mt-6' key={id}>
			
			<div className='blog px-1 my-4'>
				<h2 className='text-xl sm:text-3xl text-left font-semibold dark:text-white text-blue-600'>
        <Link to={`blog/${id}`}>{title}</Link>
				</h2>
				<div className='flex flex-row gap-4 pt-2 px-0'>
					<p className='text-lx dark:text-white text-black'>
						by{" "}
						<span className='text-sm font-bold dark:text-white  text-black'>
							{Author}
						</span>
					</p>{" "}
					<code className='text-md dark:text-white text-black'>{date}</code>
				</div>
			</div>
		</div>
		
      ))}
      </div>

  )}
export default PostList;
