/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import './Header.css';

export default ({black}) => {
  return(
    <header className={black ? 'black' : ''}>
      <div className="header--logo">
        <a href="/">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/67/NewNetflixLogo.png" alt="Netflix" />
        </a>
      </div>
      <div className="header--user">
        <a href="/">
          <img src="https://i.pinimg.com/564x/b6/77/cd/b677cd1cde292f261166533d6fe75872.jpg" alt="Usuario" />
        </a>
      </div>
    </header>
  );
}