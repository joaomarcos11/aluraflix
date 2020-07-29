import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logomarca Aluraflix" />
      </Link>
      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
      {/* <ButtonLink href="/" className="ButtonLink">
        Novo vídeo xx
      </ButtonLink> */}
    </nav>
  );
}

export default Menu;
