import React from "react";
import {Link} from 'react-router-dom';

export default function Navbar(props) {
    return(
        <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
            <div className="container-fluid">
                <Link className="navbar-brand ms-3" to="/TextUtilz" style={{color: props.mode==='dark'?'white':'black'}}><strong>{props.title}</strong></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className={`nav-link`} aria-current="page" to="/TextUtilz" style={{color: props.mode==='dark'?'white':'black'}}>Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link className={`nav-link `} to="/aboutus" style={{color: props.mode==='dark'?'white':'black'}}>AboutUs</Link>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" style={{color: props.mode==='dark'?'white':'black'}} href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" style={{color: props.mode==='dark'?'white':'black'}}>
                            <li><Link className="dropdown-item" to="/action">Action</Link></li>
                            <li><Link className="dropdown-item" to="/anotherAc">Another action</Link></li>
                            <li><Link className="dropdown-divider"></Link></li>
                            <li><Link className="dropdown-item" to="/some">Something else here</Link></li>
                        </ul>
                        </li>
                    </ul>
                    <div className={`form-check form-switch me-3 text-${props.mode==='light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color: props.mode==='dark'?'white':'black'}}>{props.mode==='dark'?'Enable Light':'Enable Dark'}</label>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}