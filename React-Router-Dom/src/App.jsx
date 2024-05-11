
import {  RouterProvider,  createBrowserRouter } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/app-layout';
import Home from './pages/home';
import PostList, { postLoader } from './pages/post-list';
import PostComments from './pages/post-comments';
import Error from './components/error';





  const router= createBrowserRouter([

    
    {
      element: <AppLayout/>,
      errorElement:<Error/>,
      children:[
        {
           path:"/",
           element:<Home/>
        },
      
        {
           path:"/ posts",
           element:<PostList/>,
           loader:postLoader,
            
            
    
        },
        
        {
           path:"/ posts/:postId",
           element:<PostComments/>,
    
        }
        
        
      ]
    },

  ])


 function App() {
  return <RouterProvider router={router} />;
}


  // function App() {

    
    
  //       return (
  //       <BrowserRouter>
  //         <Header />
  //         <Routes>
  //           <Route index element={<Home />} />
  //           <Route path="/posts" element={<PostList />} />
  //           <Route path="/posts/:postId" element={<PostComments />} />
  //         </Routes>
  //       </BrowserRouter>
  //   )
  //   }

  export default App;


