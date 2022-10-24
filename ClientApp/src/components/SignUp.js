import React, { Component } from 'react'
import { Link } from 'react-router-dom'



export class SignUp extends Component {
  render(){
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h2 className='text-center m-4'> Sign Up</h2>
          <div className='mb-3'>
            <label htmlFor="Email" className='form-label'>
              Email:
            </label>
            <input type={"email"} className="form-control" placeholder='Escriba su correo' name='email'/>
          </div>
          <div className='mb-3'>
            <label htmlFor="Contraseña" className='form-label'>
              Contraseña
              </label>
              <input type={"password"} className="form-control" placeholder='Escriba su contraseña' name='contraseña'/>
            
          </div>
          <button type='submit' className='btn btn-outline-primary'>Enviar</button>
          <Link type='submit' className='btn btn-outline-danger mx-2' to="/">Cancelar</Link>
          </div>
        </div>
    </div>
  )
}
}
