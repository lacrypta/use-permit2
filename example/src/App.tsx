import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { usePermit2 } from "usepermit2";

const App = () => {
  const { hasAllowance } = usePermit2();

  console.dir(hasAllowance);

  return (
    <div className='App'>
      <h1>UserPermit 2 Example</h1>
      <div className='card'>
        Has allowance on Universal Router : {String(hasAllowance)} ?
      </div>
    </div>
  );
};

export default App;
