import React, { useState } from 'react';

function Header() {
  const [activePage, setActivePage] = useState('Home');

  const menuItems = ['Home', 'About', 'Menu', 'Orders', 'Blog', 'Rewards'];

  return (
    <header className="header">
      <div className="logo">
      <a href="/">
        <img src="/images/textlogo-white.png" alt="Balista Logo" />
      </a>
      </div>
      <nav>
        <ul>
          {menuItems.map(item => (
            <li
              key={item}
              className={activePage === item ? 'active' : ''}
              onClick={() => setActivePage(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
