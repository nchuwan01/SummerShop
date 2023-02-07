import SIGN_IN from "./Login/sign_in";
import {Link,BrowserRouter,Route,Routes} from "react-router-dom";
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
            <Route path="/help" element={<SIGN_IN/>}> </Route>
        </Routes>
        <Link to="help"> Click ME!</Link>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
