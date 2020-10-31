Highcharts.chart('container', {
    chart: {
      type: 'bar'
    },
    title: {
      text: 'Fruit Consumption'
    },
    xAxis: {
      categories: ['Pineapple', 'Apples', 'Bananas', 'Oranges',]
    },
    yAxis: {
      title: {
        text: 'Items of fruit that were eaten last week in Mack and Derek\'s house'
      }
    },
    series: [{
      name: 'Mack',
      data: [6, 1, 0, 4,]
    }, {
      name: 'Derek',
      data: [6, 5, 7, 3,]
    }]
  });
