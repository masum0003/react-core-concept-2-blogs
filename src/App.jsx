
import './App.css'
import Navbar from './component/Navbar/Navbar';
import Blogs from './component/Blogs/Blogs';


function App() {
  

  return (
    <>
     <Navbar></Navbar>
     
     
      
      <div className="main-container flex gap-5 mt-5 p-2">
        
        <div className="left-container w-[70%] text-center border-1 border-amber-900 rounded-sm">
                <Blogs></Blogs>

                

        </div>

        <div className="right-container w-[30%] text-center border-1 border-amber-300 rounded-sm">
                              <h1>Reading time : 0</h1>
                              <h1>bookmarked count : 0</h1>
        </div>
        </div> 
     
    </>
  )
}

export default App
