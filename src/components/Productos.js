import React, { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
import { obtenerProductosAction } from 'store/actions/productosActions';
import Producto from 'components/Producto';



const Productos = () => {

   const dispatch = useDispatch();

   useEffect(() => {
      // consultar api
      const cargarProductos = () => dispatch(obtenerProductosAction());
      cargarProductos();
      // console.log('i fire once');
      //eslint-disable-next-line react-hooks/exhaustive-deps
      // return () => null;
   }, [])


   // obtener state de los productos
   const productos = useSelector(state => state.productos.productos)
   const error = useSelector(state => state.productos.error)
   const cargando = useSelector(state => state.productos.loading)

   return (
      <>
         <h2 className='text-center my-5'>Listar Productos</h2>
         {error ? <p className='font-weight-bold alert alert-danger text-center'>Hubo un Error</p> : null}
         {cargando ? <p className='text-center'>Cargando ...</p> : null}
         <table className='table table-striped'>
            <thead className='bg-primary table-dark'>
               <tr>
                  <th scope='col'>Nombre</th>
                  <th scope='col'>Precio</th>
                  <th scope='col'>Acciones</th>
               </tr>
            </thead>
            <tbody>
               {productos === undefined || productos.length === 0 ? (
                  <tr>
                     <td colSpan="3"> No hay productos</td>
                  </tr>
               ) : (
                  productos.map(prod => (
                     <Producto
                        key={prod.id}
                        producto={prod}
                     />
                  ))
               )}
            </tbody>
         </table>
      </>
   )
}

export default Productos
