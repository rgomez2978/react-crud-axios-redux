import {
   AGREGAR_PRODUCTO,
   AGREGAR_PRODUCTO_EXITO,
   AGREGAR_PRODUCTO_ERROR,
   COMENZAR_DESCARGA_PRODUCTOS,
   DESCARGA_PRODUCTOS_EXITO,
   DESCARGA_PRODUCTOS_ERROR,
   OBTENER_PRODUCTO_ELIMINAR,
   PRODUCTO_ELIMINADO_EXITO,
   PRODUCTO_ELIMINADO_ERROR
} from 'store/types';


// cada reducer tiene su propio state
const initialState = {
   productos: [],
   error: null,
   loading: false,
   delete_prod: null
}

export default function productosReducer(state = initialState, action) {
   switch (action.type) {
      case AGREGAR_PRODUCTO:
      case COMENZAR_DESCARGA_PRODUCTOS:
         return {
            ...state,
            loading: action.payload,
         }
      case AGREGAR_PRODUCTO_EXITO:
         return {
            ...state,
            loading: false,
            productos: [...state.productos, action.payload]
         }
      case AGREGAR_PRODUCTO_ERROR:
      case DESCARGA_PRODUCTOS_ERROR:
      case PRODUCTO_ELIMINADO_ERROR:
         return {
            ...state,
            loading: false,
            error: action.payload
         }
      case DESCARGA_PRODUCTOS_EXITO:
         return {
            ...state,
            loading: false,
            error: false,
            productos: action.payload
         }
      case OBTENER_PRODUCTO_ELIMINAR:
         return {
            ...state,
            delete_prod: action.payload
         }
      case PRODUCTO_ELIMINADO_EXITO:
         return {
            ...state,
            productos: state.productos.filter(prod => prod.id !== state.delete_prod),
            delete_prod: null
         }
      default:
         return state;
   }
}