import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

function DonutChart() {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
              label: 'Population',
              data,
              backgroundColor: [
                'rgba(255, 99, 132, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(75, 192, 192, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(201, 203, 207, 0.6)',
                'rgba(255, 108, 180, 0.6)',
                'rgba(144, 238, 144, 0.6)',
                'rgba(173, 216, 230, 0.6)',
                'rgba(220, 20, 60, 0.6)',
                'rgba(255, 140, 0, 0.6)',
                'rgba(75, 0, 130, 0.6)'
              ],
          
              borderWidth: 1,
            },
          ],
        });
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div>
      <h2 className='custom-head'>Population of South American Countries</h2>
      {chartData && <Doughnut data={chartData} />}
    </div>
  );
}

export default DonutChart;
