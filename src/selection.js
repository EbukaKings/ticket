import React, { useState } from 'react';
import "./selection.css";
import { useNavigate } from "react-router-dom";
import Navbar from './navbar';

function Selection() {
    const [progress, setProgress] = useState(0);
    const navigate = useNavigate();
    
    // Track selected ticket type and number of tickets
    const [selectedTicket, setSelectedTicket] = useState("Regular");
    const [numTickets, setNumTickets] = useState(1);

    const handleNext = () => {
        setProgress((prev) => (prev < 100 ? prev + 10 : 100)); // Increase by 10%, max 100%
    };

    // Handle ticket type selection
    const handleTicketSelection = (ticketType) => {
        setSelectedTicket(ticketType);
    };

    // Handle form submission
    const handleSubmit = () => {
        navigate("/attendee", { state: { selectedTicket, numTickets } });
    };

    return (
        <div className='navbar'>
            <Navbar className="navbar" />
            <div className='ticket-selection-cointainer'>
                <div className='ticket-selection-container-bar'>
                    <div>Ticket selection</div>
                    <div>1/3</div>
                </div>
                <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }} />
                </div>
                <div className='ticket-selection-cointainer-2'>
                    <div className='events-details-container'>
                        <div className='event-details'>
                            <h1>Techember Fest '25</h1>
                            <p>Join us for an unforgettable experience at Techember! Secure your spot now</p>
                            <p>ENUGU || March 15, 2025 | 7:00</p>
                        </div>
                    </div>
                    <hr />
                    <p className='ticket-type-p'>Select Ticket Type:</p>
                    <div className='ticket-type-container'>
                        <div 
                            className={`ticket-type1 ${selectedTicket === "Regular" ? "selected" : ""}`} 
                            onClick={() => handleTicketSelection("Regular")}
                        >
                            <div className='ticket-cost-con-1'>
                                <p>Free</p>
                                <p>REGULAR ACCESS</p>
                                <p>20/52</p>
                            </div>
                        </div>
                        <div 
                            className={`ticket-type2 ${selectedTicket === "VIP" ? "selected" : ""}`} 
                            onClick={() => handleTicketSelection("VIP")}
                        >
                            <div className='ticket-cost-con-2'>
                                <p>#150</p>
                                <p>VIP ACCESS</p>
                                <p>20/52</p>
                            </div>
                        </div>
                        <div 
                            className={`ticket-type3 ${selectedTicket === "VVIP" ? "selected" : ""}`} 
                            onClick={() => handleTicketSelection("VVIP")}
                        >
                            <div className='ticket-cost-con-3'>
                                <p>$150</p>
                                <p>VVIP ACCESS</p>
                                <p>20/52</p>
                            </div>
                        </div>
                    </div>
                    <div className='ticket-num-container-main'>
                        <p className='ticket-num'>Number of Tickets</p>
                        <div className='ticket-num-container'>
                            <select 
                                id="numSelect" 
                                name="numSelect" 
                                className='select-button' 
                                value={numTickets}
                                onChange={(e) => setNumTickets(e.target.value)}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                    <div className='next-cointainer'>
                        <div className='next-cointainer-cancel'>Cancel</div>
                        <div className='next-cointainer-next'>
                            <button onClick={handleSubmit}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Selection;
