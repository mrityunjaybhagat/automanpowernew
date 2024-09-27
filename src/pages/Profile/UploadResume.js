import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import UplaodCloud from '../../assets/icons/upload-cloud.svg';
import CustomButton from '../../components/form/CustomButton';

const UploadResume = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  // Get userId from localStorage
  const userId = localStorage.getItem('userId');

  // Handle file selection via input or drag-and-drop
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    validateFile(file);
  };

  // Validate the file type
  const validateFile = (file) => {
    if (file && (file.type === "application/pdf" || file.type === "application/msword" || file.type === "application/vnd.openxmlformats-officedocument.wordprocessingml.document" || file.type === "text/plain")) {
      setSelectedFile(file);
      setErrorMessage('');
    } else {
      setErrorMessage('Invalid file format. Please upload a .pdf, .doc, .docx, or .txt file.');
    }
  };

  // Handle file drag-over
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // Handle file drop
  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    validateFile(file);
  };

  // Function to upload the selected file
  const handleFileUpload = async () => {
    if (!selectedFile) {
      setErrorMessage('Please select a file to upload.');
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("userId", userId); // Add userId to the form data

    try {
      const response = await fetch("https://deijobs.in/deijobs-api/api/get-text-pdf", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setUploadSuccess(true);
        setErrorMessage('');
        console.log("File uploaded successfully");
      } else {
        setErrorMessage('File upload failed. Please try again.');
        console.error('Upload failed');
      }
    } catch (error) {
      setErrorMessage('An error occurred while uploading. Please try again.');
      console.error('Error:', error);
    }
  };

  // Handle navigation when "Skip" button is clicked
  const handleSkip = () => {
    navigate('/create-profile'); // Navigate to create-profile page
  };

  return (
    <>
      <section className='content'>
        <div className='container'>
          <div className='upload_container container_box card'>
            <h2>Upload Your Resume</h2>
            <p>Save time with super-fast Profile Auto-Fill feature when you Upload your Resume</p>

            {/* Drag and Drop Area */}
            <div
              className={`uploadbox ${isDragging ? 'dragging' : ''}`}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragLeave={() => setIsDragging(false)}
            >
              <div className='card shadow p-4'>
                <div className='uploadbox_inr'>
                  <img src={UplaodCloud} alt='Upload Cloud' />
                  <p><strong>Supported File Formats</strong></p>
                  <p>(.pdf, .docx, .doc, .txt)</p>
                  <input type="file" className="upload_file" onChange={handleFileChange} accept=".pdf, .doc, .docx, .txt" />
                </div>
              </div>
              {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
              {uploadSuccess && <p style={{ color: 'green' }}>File uploaded successfully!</p>}
            </div>

            {/* Upload Button */}
            {/* <div className='upload_button mt-3'>
              <CustomButton text='Upload Resume' onClick={handleFileUpload} />
            </div> */}

            {/* Skip Button */}
            <CustomButton text='Skip & Add Details Manually' btnclass='btn-white' onClick={handleSkip} />
          </div>
        </div>
      </section>
    </>
  );
};

export default UploadResume;
