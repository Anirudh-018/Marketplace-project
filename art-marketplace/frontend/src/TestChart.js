import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { BarLoader } from 'react-spinners';

const ChartComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulate fetching data (replace with your actual data fetching logic)
    setTimeout(() => {
      const fetchedData = [
        {
          x: [1, 2, 3, 4, 5],
          y: [10, 11, 12, 13, 14],
          type: 'scatter',
          mode: 'lines+markers',
          marker: { color: 'red' },
        },
      ];

      setData(fetchedData);
      setLoading(false);
    }, 2000); // Simulating a delay of 2 seconds
  }, []);

  // Layout configuration for the plot
  const layout = {
    title: 'Sample Plot',
    updatemenus: [
      {
        type: 'buttons',
        showactive: false,
        buttons: [
          {
            label: 'Play',
            method: 'animate',
            args: [null, { fromcurrent: true, frame: { duration: 500, redraw: true } }],
          },
        ],
      },
    ],
    sliders: [
      {
        steps: data.map((_, index) => ({
          label: index.toString(),
          method: 'animate',
          args: [[index], { mode: 'immediate', transition: { duration: 500 }, frame: { duration: 500, redraw: true } }],
        })),
      },
    ],
  };

  return (
    <div>
      <h2>Plotly Chart Example</h2>
      {loading ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <BarLoader color="#36D7B7" loading={loading} />
          <p>Loading...</p>
        </div>
      ) : (
        <Plot data={data} layout={layout} />
      )}
    </div>
  );
};

export default ChartComponent;
