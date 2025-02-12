import React, { useState } from 'react';
import "./selection.css";
import { useNavigate } from "react-router-dom";

function Selection() {
    const navigate = useNavigate();
    const [selectedTicket, setSelectedTicket] = useState("Regular");

    function login() {
        // Optionally pass the selected ticket type to the next page
        navigate("/attendee", { state: { selectedTicket } });
    }

    return (
        <div className='ticket-selection-cointainer'>
            <div className='event-details'>
                <h1>Techember Fest "25</h1>
                <p>Join us for an unforgettable experience at Techember! Secure your spot now</p>
                <p>ENUGU || March 15, 2025 | 7:00</p>
            </div>
            <hr />
            <p>Select Ticket Type:</p>
            <div className='ticket-type-container'>
                <div>
                    <p>REGULAR ACCESS</p>
                    <button
                        onClick={() => setSelectedTicket("Regular")}
                    >
                        Free
                    </button>
                </div>
                <div>
                    <p>VIP ACCESS</p>
                    <button
                        onClick={() => setSelectedTicket("VIP")}
                    >
                        $50
                    </button>
                </div>
                <div>
                    <p>VVIP ACCESS</p>
                    <button
                        onClick={() => setSelectedTicket("VVIP")}
                    >
                        $150
                    </button>
                </div>
            </div>
            <div>
                <p>Number of Tickets</p>
                <select id="numSelect" name="numSelect" className='select-buttton'>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className='next-cointainer'>
                <div>Cancel</div>
                <input
                    type="button"
                    value="Next"
                    className="btn btn-primary"
                    onClick={login}
                />
            </div>
        </div>
    );
}

export default Selection;
