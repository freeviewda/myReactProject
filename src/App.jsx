import { use, useEffect, useState } from 'react';

function Hello(){
  function byFn(){
    console.log("bye :(");
  }
  function hiFn(){
    console.log("created :)");
    return byFn
  }
  useEffect(hiFn, []);
  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(!showing);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App
