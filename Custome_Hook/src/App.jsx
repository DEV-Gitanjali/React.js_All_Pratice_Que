import React from 'react';
import Counter from './components/Counter'
import PostList from './components/PostList';
import WindowDimensions from './components/window-dimensions';
import DebounceInput from './components/debounce-input';

const App = () => {

  // const [width, height] = useWindowSize();
  return (
    <div>
      {/* custome hooks in react are functions that allow you to extract and reuse statefull logic components */}

     <h5>
      question-1:build a custon hook to manage and update a counter  with appropriate functionalities
     </h5>
      <Counter />

         <h4>
        <u>
          Question 2: Build a Custom hook to efficiently track and update window
          dimensions dynamically.
        </u>
      </h4>
      {/* 
        const {width, height} = useWindowSize(); 
      */}
      <WindowDimensions />

      <h4>
        <u>
          Question 3: Build a Custom hook to fetch data from a given URL and
          handle loading and error states as well.
        </u>
      </h4>
      {/* 
        const {data, loading, error} = useFetch("https://jsonplaceholder.typicode.com/posts"); 
      */}

         <PostList/>


         <h4>
        <u>
          Question 4: Build a Custom hook that delays updating a value until a
          specified time has passed after the last change ?
        </u>
      </h4>
       <DebounceInput/>


    </div>
  );
};

export default App;