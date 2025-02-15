import React from 'react'
import Navbar from './navbar'
import './readyticket.css';
import { useLocation } from 'react-router-dom';

function Ready() {
  
  const location = useLocation();
  const { imageUrl, name, email, numTickets, selectedTicket } = location.state || {};
    
  const uploadedImage = localStorage.getItem('uploadedImage'); // Retrieve from localStorage
  
  return (
    <div>
        <Navbar />
        <div className='ticket-ready-container'>

        <div className='ticket-selection-container-bar'>
            <div>Ready</div>
            <div>1/3</div>

        </div>
        <div className='booked-div'>
            <h2>Your Ticket Is Booked!</h2>
            <p>Cheeck Your email for a copy or you can download</p>
        </div>
        <div className='ticket-png-cointainer'>
            <img src='/TICKET (4).png' />
            <div className='ticket-png-cointainer-content'>
                <div className='tickets-contents'>
                    <div className='ticket-image-container'>
                    <img src={selectedTicket} alt="Uploaded Ticket" style={{ width: "140px", height: "140px", }} />
                    </div>
                    
                      <div className='name-email-container'>
                      <div className='name-email-content'>
                        Enter Your Name
                        <p>{name}</p>
                      </div>
                      <div className='name-email-content'>
                        Enter Your Email
                        <p>{email}</p>
                      </div>

                      </div>
                      <hr/>
                      <div className='name-email-container'>
                      <div className='name-email-content'>
                        Ticket Type:
                      </div>
                      <div className='name-email-content'>
                        Ticket for:
                        <p>{numTickets}</p>
                      </div>
                      </div>
                      <hr/>
                      <div>
                        Special Request?
                        <p></p>
                      </div>
                    
                </div>
            </div>
        </div>
        
        <div className='next-cointainer'>
                <div className='next-cointainer-cancel'>Book Another Ticket</div>
                <div className='next-cointainer-next'>
                    <button >Download Ticket</button>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Ready;