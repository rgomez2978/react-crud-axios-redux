import React from 'react'

const EditarProducto = () => {
   return (
      <div className='row justify-content-center'>
         <div className='col-md-8'>
            <div className='card'>
               <div className='card-body'>
                  <h2 className='text-center mb-4 font-weight-bold'>
                     Editar Producto
                  </h2>
                  <form action="">
                     <div className='form-group'>
                        <label htmlFor="">Nombre producto</label>
                        <input id='nombre' name='nombre' type="text" className='form-control' placeholder='Nombre producto' />
                     </div>
                     <div className='form-group'>
                        <label htmlFor="">Precio producto</label>
                        <input id='precio' name='precio' type="number" className='form-control' placeholder='Precio producto' />
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