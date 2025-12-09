import React from 'react';

export default function Navbar() {
  return (
    <header>
      <div className="nav">
        <a href="#top" className="logo">
          <div className="logo-mark">UC</div>
          <div>
            <div>UrbanCrew</div>
            <small style={{ color: 'var(--muted)', fontWeight: 500 }}>Smart Workforce Services</small>
          </div>
        </a>
        <nav>
          <ul>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#clients">Client Solutions</a>
            </li>
            <li>
              <a href="#workers">For Workers</a>
            </li>
            <li>
              <a href="#why">Why UrbanCrew</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <a className="btn" href="#contact">
          <i className="fa-solid fa-phone" /> Request Staff
        </a>
      </div>
    </header>
  );
}

