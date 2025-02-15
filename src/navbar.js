import React from 'react';
import "./navbar.css";

function Navbar() {
  return (
    <div className='navbar-container'>
      <div className='image-container'>
        <img className='vectorimage' src='/Vector.png' alt="Vector Logo" />
        <img className='ticzimage' src='/ticz.png' alt="Ticz Logo" />
      </div>

      <div className='events-container'>
        <p>Events</p>
        <p>My Tickets</p>
        <p>About</p>
        <p>Projects</p>
      </div>

      <div className='ticket'>
        <p>MY TICKETS <img className='ticket-icon' src='/LINE 5@2x.png' alt="Ticket Icon" /></p>
      </div>
    </div>
  );
}

export default Navbar;