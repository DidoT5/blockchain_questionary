import React from 'react'
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';

export  default function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <a className="navbar-brand">Cuestionario</a>
          </div>
        </nav>
    </div>
  )
}
