import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import NotFound from './Pages/NotFound'
import Home from './Pages/Home'

function App() {
  return (
    <div>
      <>
        <BrowserRouter>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path='/Contact' element={<Contact />}></Route>
            <Route path='/Login' element={<Login />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
