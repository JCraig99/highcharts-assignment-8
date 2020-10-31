Highcharts.chart('container', {

  title: {
    text: 'US Population Growth Rate 1950-2020'
  },

  subtitle: {
    text: 'Source: https://ourworldindata.org/world-population-growth'
  },

  yAxis: {
    title: {
      text: 'Annual Change in Population Growth in the US'
    }
  },

  xAxis: {
    accessibility: {
      rangeDescription: 'Range: 1950 to 2020'
    }
  },

  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },

  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 1950
    }
  },

  series: [{
    name: 'US Population Growth',
    data: [2054, 2229, 2517, 2734, 2887, 2984, 3033, 3041, 3017, 2966, 2892, 2797, 2681, 2547, 2401, 2244, 2086, 1955, 1877, 1853, 1862, 1878, 1897, 1922, 1951, 1985, 2027, 2068, 2101, 2126, 2148, 2172, 2197, 2217, 2234, 2253, 2276, 2304, 2336, 2373, 2406, 2435, 2496, 2624, 2815, 3046, 3274, 3419, 3417, 3268, 3030, 2784, 2604, 2537, 2588, 2701, 2807, 2863, 2849, 2763, 2638, 2516, 2408, 2314, 2239, 2171, 2103, 2040, 1990, 1953, 1925]
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
      chartOptions: {
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom'
        }
      }
    }]
  }

});
