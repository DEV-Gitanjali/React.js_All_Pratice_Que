
import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import './App.css';
import AppLayout from './layouts/app-layout';
import Home from './pages/home';
import PostList, { postLoader } from './pages/post-list';
import Header from './components/header';
import PostComments from './pages/post-comments';



  const router= createBrowserRouter([

    
    {
      element: <AppLayout/>,
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
      return (
        <BrowserRouter>
          <Header />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:postId" element={<PostComments />} />
          </Routes>
        </BrowserRouter>
      );
    }

  export default App;


