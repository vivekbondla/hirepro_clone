import React, { useState } from 'react';
 
const PhotoUploader = () => {
  const [photoFile, setPhotoFile] = useState(null);
 
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setPhotoFile(selectedFile);
  };
 
  const handleUpload = () => {
    // Code to upload the photo file
    if (photoFile) {
      const formData = new FormData();
      formData.append('photo', photoFile);
 
      // Example using fetch API
      fetch('https://example.com/upload-photo', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          // Handle response from the server
          console.log('Photo uploaded successfully');
        })
        .catch((error) => {
          // Handle error
          console.error('Error uploading photo:', error);
        });
    } else {
      console.log('No photo file selected');
    }
  };
 
  return (
    <div>
      <label htmlFor="photoUpload">Photo * (Supported Format: .jpg/.jpeg/.png; Max size: 3 MB)</label>
      <input type="file" id="photoUpload" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />
     
    </div>
  );
};
 
export default PhotoUploader;