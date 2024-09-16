import React, { useState } from 'react';
import Nav from '../components/Nav';
import { useDropzone } from 'react-dropzone';
import "./Upload.css";

function Upload() {
    const [isConnected, setIsConnected] = useState(true);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    
    const userProfile = {
      name: 'John Doe',
      image: 'https://via.placeholder.com/40',
    };

    const handleLogout = () => {
      setIsConnected(false);
    };

    // Handle file drop
    const onDrop = (acceptedFiles) => {
        const newFiles = acceptedFiles.map(file => ({
            name: file.name,
            status: 'uploading', // initial status
            preview: URL.createObjectURL(file),
        }));

        // Simulate file upload and update status
        setUploadedFiles(prevFiles => [...prevFiles, ...newFiles]);
        setTimeout(() => {
            const updatedFiles = newFiles.map(file => ({
                ...file,
                status: Math.random() > 0.2 ? 'uploaded' : 'failed', // Simulate random success/failure
            }));
            setUploadedFiles(prevFiles => prevFiles.map(file => {
                const updatedFile = updatedFiles.find(f => f.name === file.name);
                return updatedFile || file;
            }));
        }, 2000); // Simulate 2 second upload
    };

    // Handle file deletion
    const handleDelete = (fileName) => {
        setUploadedFiles(prevFiles => prevFiles.filter(file => file.name !== fileName));
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/jpeg, image/png' });

    return (
      <div className="upload-page">
          <Nav userProfile={isConnected ? userProfile : null} handleLogout={handleLogout} />

          <h2 className="upload-title">Upload MRI Images for Parkinson's Prediction</h2>
  
          {/* Drag & Drop Zone */}
          <div className="dropzone" {...getRootProps()}>
              <input {...getInputProps()} />
              <p>Drag & drop IRM image</p>
              <p>Supported formats: JPEG, PNG</p>
          </div>
  
          {/* Calculate the total number of attempted uploads */}
          <div className="upload-progress">
              <h3>
                  Uploading - {uploadedFiles.length} images attempted
                  (Uploaded: {uploadedFiles.filter(file => file.status === 'uploaded').length}, 
                  Failed: {uploadedFiles.filter(file => file.status === 'failed').length})
              </h3>
  
              {uploadedFiles.map((file, index) => (
                  <div key={index} className={`upload-item ${file.status}`}>
                      <p>{file.name}</p>
                      {file.status === 'uploading' && <progress value="50" max="100" />}
                      {file.status === 'uploaded' && <span className="status uploaded">Uploaded</span>}
                      {file.status === 'failed' && <span className="status failed">Failed</span>}
                      <button onClick={() => handleDelete(file.name)} className="delete-btn">Delete</button>
                  </div>
              ))}
          </div>
  
          {/* Show Prediction Button */}
          <button className="show-prediction-btn">Show Prediction</button>
      </div>
  );
  
}

export default Upload;