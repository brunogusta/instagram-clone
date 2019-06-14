import React from 'react';
import './Header.css';
import logo from '../assets/logo.svg';
import camera from '../assets/camera.svg';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="New">
          <img src={camera} alt="Enviar publicação" />
        </Link>
      </div>
    </header>
  );
}
