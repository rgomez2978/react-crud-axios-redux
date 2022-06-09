import React from 'react';
// Redux
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EditarProducto from 'components/EditarProducto';
import Header from 'components/Header';
import NuevoProducto from 'components/NuevoProducto';
import Productos from 'components/Productos';
import './index.css';
import store from 'store';


function App() {
   return (
      <Router>
         <Provider store={store}>
            <Header />
            <div className='container mt-5'>
               <Routes>
                  <Route exact path="/" element={<Productos />} />
                  <Route exact path="/productos/nuevo" element={<NuevoProducto />} />
                  <Route exact path="/productos/editar/:id" element={<EditarProducto />} />
               </Routes>
            </div>
         </Provider>
      </Router>
   );

}

export default App;
