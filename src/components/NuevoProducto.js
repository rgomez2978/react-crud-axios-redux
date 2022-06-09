import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { crearNuevoProductoAction } from 'store/actions/productosActions'


const NuevoProducto = () => {

	const history = useNavigate();

	// state del componente
	const [nombre, setNombre] = useState('');
	const [precio, setPrecio] = useState(0);

	// usar useDispatch
	const dispatch = useDispatch()

	// acceder al store
	const cargando = useSelector(state => state.productos.loading);

	const error = useSelector(state => state.productos.error)

	// agregar nuevo producto
	const agregarProducto = (producto) => {
		dispatch(crearNuevoProductoAction(producto))
	}


	// Cuando haga submit
	const submitNuevoProducto = e => {
		e.preventDefault();
		// Validar formulario
		if (nombre.trim === '' || precio <= 0) {
			return;
		}

		// Si no hay errores

		// crear nuevo producto
		agregarProducto({
			nombre, precio
		});

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