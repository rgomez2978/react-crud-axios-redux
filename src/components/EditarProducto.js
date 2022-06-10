import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { editarProductoAction } from 'store/actions/productosActions'
import { useNavigate } from 'react-router-dom'

const EditarProducto = () => {
   const dispatch = useDispatch();
   const history = useNavigate();
   const [producto, setProducto] = useState({
      nombre: '',
      precio: ''
   })
   const productoEdit = useSelector(state => state.productos.edit_prod);

   // llenar state automaticamente
   useEffect(() => {
      setProducto(productoEdit)
   }, [productoEdit])

   // leer los datos del formulario
   const onChangeFormulario = e => {
      setProducto({
         ...producto,
         [e.target.name]: e.target.value
      })
   }

   const { nombre, precio } = producto;

   // Enviar producto editado
   const submitEditarProducto = e => {
      e.preventDefault();
      dispatch(editarProductoAction(producto));
      history(`/`)
   }

   return (
      <div className='row justify-content-center'>
         <div className='col-md-8'>
            <div className='card'>
               <div className='card-body'>
                  <h2 className='text-center mb-4 font-weight-bold'>
                     Editar Producto
                  </h2>
                  <form action=""
                     onSubmit={submitEditarProducto}>
                     <div className='form-group'>
                        <label htmlFor="">Nombre producto</label>
                        <input id='nombre' name='nombre' type="text" className='form-control' placeholder='Nombre producto'
                           value={nombre}
                           onChange={onChangeFormulario} />
                     </div>
                     <div className='form-group'>
                        <label htmlFor="">Precio producto</label>
                        <input id='precio' name='precio' type="number" className='form-control' placeholder='Precio producto'
                           value={precio}
                           onChange={onChangeFormulario} />
                     </div>
                     <button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100' >
                        Guardar cambios
                     </button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default EditarProducto