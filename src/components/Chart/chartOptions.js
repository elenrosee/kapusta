const mobile = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: true,
  scales: {
    x: {
      grid: {
        display: false,
        borderColor: ['rgba(0, 0, 0, 0)'],
      },
      ticks: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
        borderColor: ['rgba(0, 0, 0, 0)'],
      },
      ticks: {
        display: true,
      },
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    datalabels: {
      labels: [
        {
          formatter: function (value) {
            return `${value} грн`;
          },
          display: true,
          align: 'end',
          anchor: 'start',
          color: ['rgba(255, 218, 192, 1)', 'rgba(255, 117, 29, 1)'],
        },
      ],
    },
  },
};

const tablet = {
  indexAxis: 'x',
  responsive: true,
  layout: {
    padding: {
      right: 0,
      top: 30,
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
        display: true,
      },
    },
    y: {
      grid: {
        display: true,
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

export const chartOptions = { mobile, tablet };
