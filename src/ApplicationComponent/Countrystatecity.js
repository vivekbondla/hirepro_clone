import React, { useState, useEffect } from 'react';
import { Country, State, City } from 'country-state-city';

function Countrystatecity() {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  useEffect(() => {
    setCountries(Country.getAllCountries());
  }, []);

  useEffect(() => {
    if (selectedCountry) {
      setStates(State.getStatesOfCountry(selectedCountry));
      setSelectedState(''); // Reset selected state when changing the country
    }
  }, [selectedCountry]);

  useEffect(() => {
    if (selectedState) {
      setCities(City.getCitiesOfState(selectedCountry, selectedState));
      setSelectedCity(''); // Reset selected city when changing the state
    }
  }, [selectedState, selectedCountry]);

  return (
    <div>
      <label>Country:</label>
      <select value={selectedCountry} onChange={(e) => setSelectedCountry(e.target.value)}>
        <option value="">Select a country</option>
        {countries.map((country, index) => (
          <option key={index} value={country.isoCode}>
            {country.name}
          </option>
        ))}
      </select>

      <label>State:</label>
      <select value={selectedState} onChange={(e) => setSelectedState(e.target.value)}>
        <option value="">Select a state</option>
        {states.map((state, index) => (
          <option key={index} value={state.isoCode}>
            {state.name}
          </option>
        ))}
      </select>

      <label>City:</label>
      <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
        <option value="">Select a city</option>
        {cities.map((city, index) => (
          <option key={index} value={city.name}>
            {city.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Countrystatecity;
