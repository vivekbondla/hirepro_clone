import React, { useState } from 'react';

const Gender=()=>{
  const [selectedGender, setSelectedGender] = useState('');

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div>
    
      <form>
        <label>
          <input
            type="radio"
            name="gender"
            value="male"
            checked={selectedGender === 'male'}
            onChange={handleGenderChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="female"
            checked={selectedGender === 'female'}
            onChange={handleGenderChange}
          />
          Female
        </label><br/>
        <label>
          <input
            type="radio"
            name="gender"
            value="Other"
            checked={selectedGender === 'Other'}
            onChange={handleGenderChange}
          />
          Other
        </label>
      </form>
      <input Value={selectedGender}/>
    </div>
  );
}

export default Gender;