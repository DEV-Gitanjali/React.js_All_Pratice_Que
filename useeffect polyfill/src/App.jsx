import { useEffect ,useState } from "react";
import Counter from "./Components/Counter";
export  default function App(){
  return (
    <div className="App">
      <h1>use effect polyfill</h1>
      <Counter/>
    </div>
  );
}