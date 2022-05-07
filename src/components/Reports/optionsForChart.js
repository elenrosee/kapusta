export const optionsForChart = isMobile => {
  const options = {
    indexAxis: isMobile ? 'y' : 'x',
    responsive: true,
    layout: {
      padding: {
        right: isMobile ? 30 : 0,
        top: isMobile ? 0 : 30,
      },
    },
    maintainAspectRatio: false,
    scales: {
      x: {
        grid: {
          display: false,
          borderColor: ['rgba(0, 0, 0, 0)'],
        },
        ticks: {
          display: isMobile ? false : true,
        },
      },
      y: {
        grid: {
          display: isMobile ? false : true,
          borderColor: ['rgba(0, 0, 0, 0)'],
        },
        ticks: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        labels: [
          isMobile && {
            formatter: function (_, { dataIndex, dataset: { labels } }) {
              return labels[dataIndex];
            },
            display: true,
            anchor: 'start',
            align: '-55',
            color: '#52555F',
            padding: {
              bottom: '10',
            },
          },
          {
            formatter: function (value) {
              return `${value} грн`;
            },
            display: 'auto',
            anchor: 'end',
            align: 'top',
            color: '#52555F',
            padding: {
              bottom: '10',
            },
          },
        ],
      },
    },
  };

  return options;
};
