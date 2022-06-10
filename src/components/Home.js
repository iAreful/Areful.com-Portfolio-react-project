/** @format */
import React, { Suspense, lazy } from "react";
// import React from "react";

import "../App.css";
import Menu from "./Menu";
import About from "./About";
// import Slider from "./slider";
import Skills from "./Skills/Skills";
import Social from "./Social/Social";

import Store from "./Store/Store";
import Footer from "./Footers";
import ScrollToTop from "./Funyionality/ScrollToTop";
// import Filter from "./Filter/Filter";
// import GitContribute from "./GitContribute";
// import Blog from "./Blog/Blog";

// const BlogPosts = lazy(() => import("./BlogSection/Blog"));
import BlogPage from "./BlogSection/Blog";

const GitContribute = lazy(() => import("./GitContribute"));
const Filter = lazy(() => import("../components/Filter/Filter"));

function HomePage() {
	return (
		<div className=' dark:bg-slate-400 bg-white'>
			
			<Menu />
		<div className='w-11/12 mx-auto'>
			<About />
			
			<BlogPage/>
			<Suspense fallback={<h2>Wait...</h2>}>
				{/* <Slider /> */}
				{/* <BlogPosts /> */}
				<GitContribute />
				<Filter />
			</Suspense>
			<ScrollToTop />
			<Skills />
			<Social />
			{/* <Card /> */}
			<Store />
			
			<Footer />
		</div>
		</div>
	);
}

export default HomePage;
