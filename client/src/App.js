import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavUser from './Components/NavUser';
import Home from './Components/Home';
import Profil from './Components/Profil';
import Login from './Components/Login';
import Register from './Components/Register';
import PrivateRoute from './Components/PrivateRoute';
import HandleError from './Components/HandleError';
import ProfilAdmin from './Components/ProfilAdmin';
import EditUser from './Components/EditUser';
import ListUser from './Components/ListUser';
import ProfilDescription from './Components/ProfilDescription';

import Avis from './Components/Avis';
import EditCommentaire from './Components/EditCommentaire';


import Contact from './Components/Contact';
import Footer from './Components/Footer';
import EditTechnicien from './Components/EditTechnicien';
import AddTechnicien from './Components/AddTechnicien';
import ListTechnicien from './Components/ListTechnicien';
import ListTicket from './Components/ListTicket';
import AddTicket from './Components/AddTickt';

function App() {
  return (
    <div>
      <NavUser/>

      <HandleError/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Profil' element={<PrivateRoute><Profil/></PrivateRoute>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Register' element={<Register/>}/>
        <Route path='/ProfilAdmin' element={<ProfilAdmin/>}/>
        <Route path='/EditUser' element={<EditUser/>}/>

        <Route path='/ListUser' element={<ListUser/>}/>

        <Route path='/ProfilDesc/:id' element={<ProfilDescription/>}/>
        <Route path='/AddTechnicien' element={<AddTechnicien/>}/> 
        <Route path='/AddTicket' element={<AddTicket/>}/> 

        <Route path='/ListTechnicien' element={<ListTechnicien/>}/>
       
       
       
        <Route path='/Contact' element={<Contact/>}/>
        
        <Route path='/EditTechnicien/:id' element={<EditTechnicien/>}/> 
    

        <Route path='/ListTicket' element={<ListTicket/>}/>
        <Route path='/Avis/:id' element={<Avis/>}/>
        <Route path='/EditCommentaire/:id' element={<EditCommentaire/>}/> 
       
      

      </Routes>
      <div style={{marginTop:'350px'}}>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
