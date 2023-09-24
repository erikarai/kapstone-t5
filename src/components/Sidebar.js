import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import {Outlet, Link} from "react-router-dom";
// import {Link} from 'react-router-dom';


function Sidebar() {
  return (
    <div class="container-fluid">
    <div class="row flex-nowrap">
        <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span class="fs-5 d-none d-sm-inline">Admin Dashboard</span>
                </a>
                <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li class="nav-item">
                        <Link to="/" data-bs-toggle="collapse" className="nav-link align-middle px-0 text-white">
                        <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/employee" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-speedometer2"></i> <span class="ms-1 d-none d-sm-inline">Manage Employee</span> </Link>
                        
                    </li>
                    <li>
                        <Link to="profile" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">Profile</span></Link>
                    </li>
                    <li>
                        <button href="#" className="nav-link px-0 align-middle text-white">
                        <i className="fs-4 bi-power"></i> <span className="ms-1 d-none d-sm-inline">Logout</span></button>
                    </li>
                </ul>
            </div>
        </div>
        <div class="col py-3">
            <Outlet />
        </div>
    </div>
</div>
  )
}

export default Sidebar
