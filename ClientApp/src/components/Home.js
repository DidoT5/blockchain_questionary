import React, {Component} from 'react'
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

export class Home extends Component {


    

  render(){
      return (
        <div className='container'>
            <Paper elevation={3} className="py-3">
                <Link className='btn btn-rpimary mx-2' to="/signup">
                    Login
                </Link>

                <Link className='btn btn-outline-danger mx-2' to="/register">
                    Register
                </Link>

                <Link className='btn btn-outline-danger mx-2' to="/questionary">
                    Questionary
                </Link>   
              </Paper>
        </div>
      )
}
}
