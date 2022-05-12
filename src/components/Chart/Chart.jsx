/* eslint-disable react/prop-types */

import { useMediaQuery } from 'react-responsive';
import { Container } from './Chart.styled';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Breakpoints } from 'common';
import { useSelector } from 'react-redux';
import { getReportsData, getType } from 'redux/transactions';
import { useEffect, useState } from 'react';
import { optionsForChart } from './optionsForChart';

ChartJS.register(
  ChartDataLabels,
  CategoryScale,
  LinearScale,
  BarElement,
  Legend
);

export const Chart = ({ category }) => {
  const [labels, setLabels] = useState([]);
  const [values, setValues] = useState([]);

  const isMobile = useMediaQuery({ maxWidth: Breakpoints.md - 1 });

  const transactionsType = useSelector(getType);
  const reportsData = useSelector(getReportsData);

  useEffect(() => {
    if (category !== 'all') {
      const categoryData = reportsData[transactionsType].find(
        el => el.category === category
      );

      setLabels(Object.keys(categoryData.description));
      setValues(Object.values(categoryData.description));
    } else {
      const categoryData = reportsData[transactionsType]?.reduce(
        (acc, { category, sum }) => {
          acc[category] = sum;
          return acc;
        },
        {}
      );

      categoryData
        ? (setLabels(Object.keys(categoryData)),
          setValues(Object.values(categoryData)))
        : '';
    }
  }, [category, transactionsType, reportsData]);

  const options = optionsForChart(isMobile);

  const data = {
    labels,
    datasets: [
      {
        labels,
        data: values,
        backgroundColor: ['rgba(255, 117, 29, 1)', 'rgba(255, 218, 192, 1)'],
        borderRadius: 10,
        barThickness: isMobile ? 20 : 38,
        plugins: [ChartDataLabels],
      },
    ],
  };

  return (
    <>
      <Container>
        <Bar options={options} data={data} height={200} />
      </Container>
    </>
  );
};
