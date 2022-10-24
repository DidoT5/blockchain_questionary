import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Register extends Component {

    constructor(props) {
        super(props);
        this.state = { user: [], loading: true };
    }

    onCreateUser = () => {
        let userInfo = {
            nombre: this.refs.nombre.value,
            apellido: this.refs.apellido.value,
            email: this.refs.email.value,
            contra: this.refs.contra.value

        };

        fetch('https://localhost:7195/api/InsertUser', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(userInfo)
        }).then(r => r.json()).then(res => {
            if (res) {
                this.setState({ message: 'New user created successfully' });
            }
        });
    }

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                        <h2 className='text-center m-4'> Register</h2>
                        <div className='mb-3'>
                            <label htmlFor="Nombre" className='form-label'>
                                Nombre
                            </label>
                            <input type={"text"} className="form-control" placeholder='Escriba su nombre' ref='nombre' name='nobre' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="Apellido" className='form-label'>
                                Apellido:
                            </label>
                            <input type={"text"} className="form-control" placeholder='Escriba su apellido' ref='apellido' name='apellido' />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="Email" className='form-label'>
                                Email:
                            </label>
                            <input type={"email"} className="form-control" placeholder='Escriba su correo' name='email' ref='email' />
                        </div>



                        <div className='mb-3'>
                            <label htmlFor="Contraseña" className='form-label'>
                                Contraseña
                            </label>
                            <input type={"password"} className="form-control" placeholder='Escriba su contraseña' ref='contra' name='contraseña' />

                        </div>
                        <button type='submit' onClick={this.onCreateUser} className='btn btn-outline-primary'>Enviar</button>
                        <Link type='submit' className='btn btn-outline-danger mx-2' to="/">Cancelar</Link>
                    </div>
                </div>
            </div>
        )
    }
}