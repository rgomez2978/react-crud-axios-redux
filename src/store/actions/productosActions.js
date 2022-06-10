import {
   AGREGAR_PRODUCTO,
   AGREGAR_PRODUCTO_EXITO,
   AGREGAR_PRODUCTO_ERROR,
   COMENZAR_DESCARGA_PRODUCTOS,
   DESCARGA_PRODUCTOS_EXITO,
   DESCARGA_PRODUCTOS_ERROR,
   OBTENER_PRODUCTO_ELIMINAR,
   PRODUCTO_ELIMINADO_EXITO,
   PRODUCTO_ELIMINADO_ERROR,
   OBTENER_PRODUCTO_EDITAR,
   COMENZAR_EDICION_PRODUCTO,
   PRODUCTO_EDITADO_EXITO,
   PRODUCTO_EDITADO_ERROR
} from 'store/types';
import clienteAxios from 'config/axios';
import Swal from 'sweetalert2';

// Funcion - Crear nuevos productos
export function crearNuevoProductoAction(producto) {
   return async (dispatch) => {
      dispatch(agregarProducto())
      try {
         await clienteAxios.post('/productos', producto)
         dispatch(agregarProductoExito(producto))
         Swal.fire(
            'Correcto',
            'El producto se agrego',
            'success'
         )
      } catch (error) {
         dispatch(agregarProductoError(true))
         Swal.fire({
            icon: 'error',
            title: 'Hubo un error',
            text: 'HUbo un error'
         })
      }
   }
}

const agregarProducto = () => ({
   type: AGREGAR_PRODUCTO,
   payload: true
})

const agregarProductoExito = producto => ({
   type: AGREGAR_PRODUCTO_EXITO,
   payload: producto
})

const agregarProductoError = state => ({
   type: AGREGAR_PRODUCTO_ERROR,
   payload: state
})

// Funcion - Descarga los productos de la BD
export function obtenerProductosAction() {
   return async (dispatch) => {
      dispatch(descargarProductos());
      try {
         const resp = await clienteAxios.get('/productos');
         dispatch(descargaProductosExitosa(resp.data))
      } catch (error) {
         dispatch(descargaProductosError())
      }
   }
}

const descargarProductos = () => ({
   type: COMENZAR_DESCARGA_PRODUCTOS,
   payload: true
})

const descargaProductosExitosa = productos => ({
   type: DESCARGA_PRODUCTOS_EXITO,
   payload: productos
})

const descargaProductosError = () => ({
   type: DESCARGA_PRODUCTOS_ERROR,
   payload: true
})


// Funcion - ELimina el producto
export function borrarProductoAction(id) {
   return async (dispatch) => {
      dispatch(obtenerProductoEliminar(id))
      try {
         await clienteAxios.delete(`/productos/${id}`)
         dispatch(eliminarProductoExito())
         Swal.fire(
            'Eliminado',
            'El producto se elimino correctamente.',
            'success'
         )
      } catch (error) {
         dispatch(eliminarProductoError())
      }
   }
}

const obtenerProductoEliminar = id => ({
   type: OBTENER_PRODUCTO_ELIMINAR,
   payload: id
})

const eliminarProductoExito = () => ({
   type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = () => ({
   type: PRODUCTO_ELIMINADO_ERROR,
   payload: true
})

// Colocar producto en edicion
export function obtenerProductoEditar(producto) {
   return (dispatch) => {
      dispatch(obtenerProductoEditarAction(producto))
   }
}


const obtenerProductoEditarAction = producto => ({
   type: OBTENER_PRODUCTO_EDITAR,
   payload: producto
})


// Edita un producto en la api y state
export function editarProductoAction(producto) {
   return async (dispatch) => {
      dispatch(editarProducto());
      try {
         await clienteAxios.put(`/productos/${producto.id}`, producto);
         dispatch(editarProductoExito(producto))
      } catch (error) {
         dispatch(editarProductoError())
      }
   }
}

const editarProducto = () => ({
   type: COMENZAR_EDICION_PRODUCTO
})

const editarProductoExito = producto => ({
   type: PRODUCTO_EDITADO_EXITO,
   payload: producto
})
const editarProductoError = producto => ({
   type: PRODUCTO_EDITADO_ERROR,
   payload: true
})