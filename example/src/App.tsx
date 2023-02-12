import "./App.css";

import { usePermit2 } from "usepermit2";
import { ConnectKitButton } from "connectkit";

const App = () => {
  const { hasAllowance } = usePermit2();

  console.dir(hasAllowance);

  return (
    <div className='App'>
      <h1>UserPermit 2 Example</h1>
      <div>
        <div>Has allowance on Universal Router : {String(hasAllowance)} ?</div>
        <div>
          <ConnectKitButton />
        </div>
      </div>
    </div>
  );
};

export default App;
