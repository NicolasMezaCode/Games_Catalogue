import React from 'react';
import Logo from '../../public/images/logo.svg'

export default function Navbar() {
  return (
    <nav>
      <figure><img src={Logo} alt="" /></figure>
      <h1>GameCatalogue</h1>
    </nav>
  )
}
