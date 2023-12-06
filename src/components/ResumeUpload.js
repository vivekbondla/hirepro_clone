import React, { useState } from 'react';

const ResumeUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    // Code to upload the file (you can use a library like axios to send a POST request to your server)
    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      // Example using fetch API
      fetch('https://example.com/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          // Handle response from the server
          console.log('File uploaded successfully');
        })
        .catch((error) => {
          // Handle error
          console.error('Error uploading file:', error);
        });
    } else {
      console.log('No file selected');
    }
  };

  return (
    <div className="resume-upload">
      <label htmlFor="ResumeUpload">Resume/CV:</label>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default ResumeUpload;
