import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";



export class SignUp extends Component {

    onLoginUser = () => {
        let userInfo = {
            email: this.refs.email.value,
            name: "",
            lastname: "",
            password: this.refs.password.value
        };
        axios({
            method: 'post',
            url: 'https://localhost:7195/api/LoginUser',
            timeout: 4000,    // 4 seconds timeout
            data: userInfo
        })
            .then(({ data }) => {
                console.log(data.email);
                localStorage.setItem("email", data.email);
            })
            .catch(error => console.error('timeout exceeded'))
    }

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
                <input type={"email"} className="form-control" placeholder='Escriba su correo' name='email' ref='email'/>
              </div>
              <div className='mb-3'>
                <label htmlFor="Contraseña" className='form-label'>
                  Contraseña
                  </label>
                  <input type={"password"} className="form-control" placeholder='Escriba su contraseña' name='contraseña' ref='password'/>
            
              </div>
              <button type='submit' className='btn btn-outline-primary'>Enviar</button>
              <Link type='submit' className='btn btn-outline-danger mx-2' to="/">Cancelar</Link>
              </div>
            </div>
        </div>
      )
    }
}
