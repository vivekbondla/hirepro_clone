import React, { useState } from 'react';
 
const Gender = ({ value, onChange }) => {
  const [selectedGender, setSelectedGender] = useState('');
  const [customGender, setCustomGender] = useState('');
 
  const handleGenderChange = (event) => {
    const { value } = event.target;
    setSelectedGender(value);
 
    // Clear the custom gender input if a predefined option is selected
    if (value !== 'others') {
      setCustomGender('');
    }
  };
 
  const handleCustomGenderChange = (event) => {
    setCustomGender(event.target.value);
  };
 
  return (
    <div>
     
      <select
        id="gender"
        name="gender"
        value={value === 'others' ? 'others' : selectedGender}
        onChange={(e) => {
          onChange(e);
          handleGenderChange(e);
        }}
      >
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="others">Others</option>
      </select>
      {value === 'others' && (
        <input
          type="text"
          placeholder="Enter your custom gender"
          value={customGender}
          onChange={handleCustomGenderChange}
        />
      )}
    </div>
  );
};
 
export default Gender;