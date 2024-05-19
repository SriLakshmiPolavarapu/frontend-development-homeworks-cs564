import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

function List() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://cs464p564-frontend-api.vercel.app/api/countries');
        setCountries(response.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
        setCountries([]); 
      }
    };

    fetchData();
  }, []);

  return (
    <div className='country'>
      <h2 className='country-head'>List of the countries of South America, their flags, and information about each country</h2>
      <ul>
        {countries.map(country => (
          <li className='country-box'>
            <p className='country-info'>Id: {country.id}</p>
            <p>Official Language: {country.official_languages}</p>
            <p>Population: {country.population}</p>
            <p>GDP_millions: {country.gdp_billions}</p>
            <p>Flag_png: {country.flag_png}</p>
            <p>Flag_Name: {country.flag_alt}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;
