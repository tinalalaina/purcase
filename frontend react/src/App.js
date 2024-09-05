import './Style.css';
import '../src/css/webfont/css/all.css'
import {Routes, Route} from 'react-router-dom';
import Home from './Component/body/Home';
import Body from './Component/Header/Body';
import Page from './Component/shop/Page';
import Card from './Component/card/Card';
import Editlist from './Component/controllers/Editlist';
import Controllers from './Component/controllers/Controllers';
import Addproduct from './Component/controllers/Addproduct';
import Statistique from './Component/controllers/Statistique';
import BaseFacture from './Component/controllers/BaseFacture';
import LoginForm from './Component/LoginForm';
import Registers from './Component/Registers';
import ProtectedRoute from './Component/ProtectedRoute';

function App() {
  return (
    <div className="App">
    <Body/>
      <Routes>
        <Route path="/" element= { <Home/> } />
        <Route path="/Pages" element= { <Page/> } />
        <Route path="/Card" element= { <Card/> } />
        <Route path="/controllers" element= { <ProtectedRoute allowedRoles={['user']}><Controllers/></ProtectedRoute> } />
        <Route path="/editus/:id" element= { <ProtectedRoute allowedRoles={['user']}><Editlist/></ProtectedRoute> } />
        <Route path="/addproduct" element= { <ProtectedRoute allowedRoles={['user']}><Addproduct/> </ProtectedRoute>} />
        <Route path="/statistiquefinale" element= { <ProtectedRoute allowedRoles={['user']}><Statistique/> </ProtectedRoute>} />
        <Route path="/facture2" element= { <ProtectedRoute allowedRoles={['user']}><BaseFacture/></ProtectedRoute> } />
        <Route path="/login" element= { <LoginForm/> } />
        <Route path="/register" element= { <Registers/> } />
        <Route path="/unauthorized" element={<div>Unauthorized Access</div>} />
      </Routes>  
    </div>
  );
}

export default App;
