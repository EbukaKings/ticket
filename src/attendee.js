import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './attendee.css'; 
import Navbar from './navbar';
import { useNavigate } from "react-router-dom";

const DragAndDropUpload = () => {
  const [progress, setProgress] = useState(1);
  // Form state variables
  const [imageUrl, setImageUrl] = useState(localStorage.getItem('uploadedImage') || '');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');
  const [error, setError] = useState('');
  const [selectedTicket, setSelectedTicket] = useState("Regular");
  const navigate = useNavigate();


  const [imageError, setImageError] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  

  // Cloudinary credentials (Replace with actual details)
  const cloudinaryUrl = "https://api.cloudinary.com/v1_1/dmlzlds8g/image/upload";
  const uploadPreset = "my-king";
  
  
  

  // Handle drag-and-drop event
  const handleDrop = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      uploadImage(file);
    }
  };
  const handleNext = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100)); // Increase by 10%, max 100%
};


 const validateForm = () => {
    let isValid = true;

    if (!imageUrl) {
      setImageError("Please upload an image.");
      isValid = false;
    } else {
      setImageError("");
    }

    if (!name.trim()) {
      setNameError("Please enter your name.");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    return isValid;
  };

  
  // Handle file selection
  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      uploadImage(file);
    }
  };

  // Upload image to Cloudinary
  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', uploadPreset);

    try {
      const response = await axios.post(cloudinaryUrl, formData);
      const uploadedImageUrl = response.data.secure_url;
      setImageUrl(uploadedImageUrl);
      localStorage.setItem('uploadedImage', uploadedImageUrl); // Save to local storage
      console.log('Image uploaded:', uploadedImageUrl);
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };
  const handleSubmit = () => {
    if (!validateForm()) return; // Stop if validation fails

    navigate("/readyticket", {
      state: { imageUrl, name, email, specialRequest, selectedTicket },
    });
  };
  return (
    <>
      <Navbar />
      <div className='ticket-selection-cointainer'>
      <div className='ticket-selection-cointainer'>
      <div className='ticket-selection-container-bar'>
            <div>Ticket selection</div>
            <div>1/3</div>

        </div>
        <div className="progress-container">
                    <div className="progress-bar" style={{ width: `${progress}%` }} />
                </div>
      <div className="upload-container">
        <p className="image-name">Upload Profile Photo</p>
        <div 
          className="drop-zone"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById('file-input').click()}
        >
         <div><img className="upload-icon" src="/icon.png"/></div>
  <img src={imageUrl} alt="Uploaded" className="ticket-image-container" />


  <input 
              type="file" 
              id="file-input" 
              accept="image/*" 
              onChange={handleFileChange} 
              style={{ display: 'none' }} 
            />
            <p className="image-container">Drag & Drop an image here, or click to select</p>
          </div>
          {imageError && <p className="error-text">{imageError}</p>}  {/* Error message */}
           
        </div>
       
      </div>

      <div>
        <hr />
      </div>
      <div className="form-container">
  <div>
  <p>Enter your Name</p>
  <input 
              type="text" 
              className="input-field" 
              value={name} 
              onChange={(e) => setName(e.target.value)}
            />
            {nameError && <p className="error-text">{nameError}</p>}  {/* Error message */}
  </div>
  <div>
  <p>Enter your Email</p>
  <input 
              type="email" 
              className="input-field" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="error-text">{emailError}</p>}  {/* Error message */}
  </div>
  <div>
  <p>Special Request</p>
  <textarea 
              className="input-field" 
              value={specialRequest} 
              onChange={(e) => setSpecialRequest(e.target.value)}
            />
  </div>
      </div>
      <div className='next-cointainer'>
      <div className='next-cointainer-cancel' onClick={() => navigate(-1)}>Back</div>

                
                <div className='next-cointainer-next'>
                    <button onClick={handleSubmit}>Get My free Ticket</button>
                </div>
      </div>
      </div>
    </>
  );
};

export default DragAndDropUpload;
