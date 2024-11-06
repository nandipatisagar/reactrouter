
import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Signup from'./components/Signup'
import Home from './components/Home'


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='dashboard' element={<Dashboard/>}/>
      <Route path='signup' element={<Signup/>}/>
      </Route>

    </Routes>
    </BrowserRouter>
  );
}

export default App;
