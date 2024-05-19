import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import './styles.css';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function PopulationChart() {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Population for each country in South America',
        data: [],
        backgroundColor: 'rgba(206, 71, 75, 0.98)',
        borderWidth: 5,
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://cs464p564-frontend-api.vercel.app/api/countries');
        const countries = response.data;

        const labels = countries.map(country => country.name);
        const data = countries.map(country => country.population);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Population for each country in South America',
              data,
              backgroundColor: 'rgba(206, 71, 75, 0.98)',
              borderWidth: 5,
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching population data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2 className='population-head'>Population of South American Countries</h2>
      <Bar data={chartData} />
    </div>
  );
}

export default PopulationChart;
