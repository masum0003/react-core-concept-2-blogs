import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
const Blogs = () => {

    const[blogs, setBlogs] = useState([]);

    useEffect(() =>{

        fetch("Blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    // console.log(blogs)
    return (
        <div>
            <h1>total blogs:{blogs.length}</h1>
            

            <div className="all-blogs grid grid-cols-2 p-3 gap-5">

            {
                blogs.map((blog)=> <Blog blog={blog}></Blog>)
            }
            </div>
        </div> 
    );
};

export default Blogs;