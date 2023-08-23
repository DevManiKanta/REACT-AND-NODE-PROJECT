import Login from './Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";


function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Home' element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
   
  );
}

export default App;
