
import './App.css'
import Navbar from './component/Navbar/Navbar';
import Blogs from './component/Blogs/Blogs';
import { useState } from 'react';


function App() {

  const [bookMark,setBookMark] = useState([]);
  const [readTime , setReadTime] = useState(0);
  
  const handleBookMark = (blog) =>{
    const newBookMark = [...bookMark, blog];
    setBookMark(newBookMark)
  }
  // console.log(booMark)
 
   const handleReadTime = (time,id) =>{
      
    const newReadTime = readTime + time;
    setReadTime(newReadTime)
    handleRemoveBookMark(id);
     
   }

   const handleRemoveBookMark = (id) =>{

    const remainingBookMark = bookMark.filter((mark) => mark.id !== id)
    setBookMark(remainingBookMark)

   }
    
   
 
  return (
    <>
     <Navbar></Navbar>
     
     
      
      <div className="main-container flex gap-5 mt-5 p-2">
        
        <div className="left-container w-[70%] text-center border-1 border-amber-900 rounded-sm">

                <Blogs handleBookMark={handleBookMark} handleReadTime={handleReadTime}></Blogs>

                

        </div>

        <div className="right-container w-[30%] text-center border-1 border-amber-300 rounded-sm">
                              <h1>Reading time : {readTime}</h1>
                              <h1>bookmarked count : {bookMark.length}</h1>
                              
                              
                                    <div className='p-5'>
                                             {
                                            bookMark.map((marked) => <p key={marked.id} className='border-1 border-amber-200 shadow  p-3 mt-2' >{marked.title} </p>)
                                         }
                                    </div>
                              
        </div>
        </div> 
     
    </>
  )
}

export default App
