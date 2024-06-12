import './App.css';
import React from 'react';
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Home from './Pages/Home';
import Login from './components/Login';
import Ragister from './components/Ragister';
import ProtectedRoutes from './components/Services/ProtectedRoutes';
import Create from './Pages/Create';
import Update from './Pages/Update';
import Read from './Pages/Read';
function App() {
 return(
<BrowserRouter>
<Routes>
<Route path="/login" element={<Login/>}/>
<Route path="/ragister" element={<Ragister/>}/>
{ /* //protected route// */ }
<Route path="/" element={<ProtectedRoutes/>}>
  <Route path="/" element={<Home/>}/>
  <Route path="/create" element={<Create/>}/>
  <Route path="/update/:id" element={<Update/>}/>
  <Route path="/read/:id" element={<Read/>}/>
  </Route>
</Routes>
</BrowserRouter>
 );
}

export default App;


