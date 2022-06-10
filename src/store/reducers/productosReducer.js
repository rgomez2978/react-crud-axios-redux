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
   PRODUCTO_EDITADO_EXITO,
   PRODUCTO_EDITADO_ERROR
} from 'store/types';

const initialState = {
   productos: [],
   error: null,
   loading: false,
   delete_prod: null,
   edit_prod: null
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
      case PRODUCTO_EDITADO_ERROR:
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
      case OBTENER_PRODUCTO_EDITAR:
         return {
            ...state,
            edit_prod: action.payload
         }
      case PRODUCTO_EDITADO_EXITO:
         return {
            ...state,
            edit_prod: null,
            productos: state.productos.map(prod =>
               prod.id === action.payload.id ? prod = action.payload : prod
            )
         }
      default:
         return state;
   }
}