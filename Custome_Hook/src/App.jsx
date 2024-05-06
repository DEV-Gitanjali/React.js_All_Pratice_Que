import React from 'react';
// import Counter from './components/Counter';
// import useWindowSize from './hooks/use-window';
import PostList from './components/PostList';

const App = () => {

  // const [width, height] = useWindowSize();
  return (
    <div>
      {/* custome hooks in react are functions that allow you to extract and reuse statefull logic components */}

     <h5>
      question-1:build a custon hook to manage and update a counter  with appropriate functionalities
     </h5>
      {/* <Counter /> */}

      <h5>build a custome hooks to efficiently track and update   window dimentions dynamically</h5>
         <p>Width:{width}</p>
         <p>Height:{height}</p>
         <PostList/>
    </div>
  );
};

export default App;