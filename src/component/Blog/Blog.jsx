import React from 'react';
import { FaBookmark } from "react-icons/fa";


const Blog = ({blog ,handleBookMark ,handleReadTime}) => {
    return (
        <div>
            
            <div className="image-main-container  m-2">

                <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
            <img
            src={blog.cover}
            alt="Shoes" />
        </figure>
                <div className="author-section">
                        <div className="author flex items-center justify-around">
                            <h3 className='text-3xl'>{blog.author}</h3>
                            <img className='w-15 ' src={blog.author_img} alt="" />

                           <button onClick={() =>handleBookMark(blog)}> <FaBookmark  size={25}/></button>

                        </div>
                </div>
        <div className="card-body">
            <h2 className="card-title">{blog.title}</h2>
            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

            <div className='flex'>

                {
                blog.hashtags.map((has) => <p>{has}</p>)
             }

            </div>

            <div className="card-actions justify-end">
            <button onClick={ () => handleReadTime(blog.reading_time, blog.id)} className="btn btn-primary">More Read</button>
            </div>
        </div>
</div>
            </div>
        </div>
    );
};

export default Blog;