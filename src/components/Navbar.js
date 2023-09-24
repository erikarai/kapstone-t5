import React from 'react'
import { ReactPropTypes } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function Navbar(props) {
  return (
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Participant Dashboard</a>
          </li>
          
          {/* <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li> */}
        </ul>
        <form className="d-flex" role="search">
        <a className="nav-link active" aria-current="page" href="#" style={{float : 'left', paddingRight : '10px'}}>Team 5</a>
          <button className="btn btn-outline-success" type="submit"><Stack direction="row" position='static'>
      <Avatar>T</Avatar>
    
    </Stack></button>
        </form>

      </div>
    </div>
  </nav>
  )
}
