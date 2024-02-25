import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
export default function Navbar({ onCountryChanged,selectedCountry }) {
  const [toggle, setToggle] = useState(false)
  
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Byte Bulletins
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <button onClick={() => {
              setToggle(!toggle)
            }} className="btn">
              Choose Country
            </button>
            {toggle && (
              <ul className="list-group" style={{ cursor: 'pointer', marginRight: '10px' }}>
                <li className={`list-group-item ${selectedCountry === 'us' && 'active'}`} onClick={() => onCountryChanged('us')}>
                  USA
                </li>
                <li className={`list-group-item ${selectedCountry === 'in' && 'active'}`} onClick={() => onCountryChanged('in')}>
                  India
                </li>
                <li className={`list-group-item ${selectedCountry === 'jp' && 'active'}`} onClick={() => onCountryChanged('jp')}>
                  Japan
                </li>
                <li className={`list-group-item ${selectedCountry === 'ua' && 'active'}`} onClick={() => onCountryChanged('ua')}>
                  UAE
                </li>
                <li className={`list-group-item ${selectedCountry === 'ru' && 'active'}`} onClick={() => onCountryChanged('ru')}>
                  Russia
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}