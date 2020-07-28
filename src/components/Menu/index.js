import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
// import ButtonLink from '../ButtonLink';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Logomarca Aluraflix" />
      </a>
      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>
      {/* <ButtonLink href="/" className="ButtonLink">
        Novo vídeo xx
      </ButtonLink> */}
    </nav>
  );
}

export default Menu;
