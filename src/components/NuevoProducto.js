import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { crearNuevoProductoAction } from 'store/actions/productosActions'
import { mostrarAlertaAction, ocultarAlertaAction } from 'store/actions/alertasActions'

const NuevoProducto = () => {
	const dispatch = useDispatch()
	const [nombre, setNombre] = useState('');
	const [precio, setPrecio] = useState(0);
	const history = useNavigate();
	const cargando = useSelector(state => state.productos.loading);
	const error = useSelector(state => state.productos.error)
	const alerta = useSelector(state => state.alerta.alerta)

	// agregar nuevo producto
	const agregarProducto = (producto) => {
		dispatch(crearNuevoProductoAction(producto))
	}

	// Cuando haga submit
	const submitNuevoProducto = e => {
		e.preventDefault();
		// Validar formulario
		if (nombre.trim === '' || precio <= 0) {
			const alerta = {
				msg: "Ambos campos son obligatorios",
				classes: "alert alert-danger text-center text-uppercase p3"
			}
			dispatch(mostrarAlertaAction(alerta));
			return;
		}
		// Si no hay errores
		dispatch(ocultarAlertaAction());
		// crear nuevo producto
		agregarProducto({ nombre, precio });
		// redireccionar home
		history('/')
	}

	return (
		<div className='row justify-content-center'>
			<div className='col-md-8'>
				<div className='card'>
					<div className='card-body'>
						<h2 className='text-center mb-4 font-weight-bold'>
							Agregar Nuevo Producto
						</h2>
						{alerta ? <p className={alerta.classes}>{alerta.msg}</p> : null}
						<form onSubmit={submitNuevoProducto}>
							<div className='form-group'>
								<label htmlFor="">Nombre producto</label>
								<input
									id='nombre'
									name='nombre'
									type="text"
									className='form-control'
									placeholder='Nombre producto'
									value={nombre}
									onChange={e => setNombre(e.target.value)}
								/>
							</div>
							<div className='form-group'>
								<label htmlFor="">Precio producto</label>
								<input
									id='precio'
									name='precio'
									type="number"
									className='form-control'
									placeholder='Precio producto'
									value={precio}
									onChange={e => setPrecio(Number(e.target.value))}
								/>
							</div>
							<button type='submit' className='btn btn-primary font-weight-bold text-uppercase d-block w-100' >
								Agregar
							</button>
						</form>
						{cargando ? <p>cargando...</p> : null}
						{error ? <p className='alert alert-danger p2 mt-4 text-center'>hubo un error</p> : null}
					</div>
				</div>
			</div >
		</div >
	)
}

export default NuevoProducto