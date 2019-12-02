<template>
    <div id="chart-population" />
</template>

<script>
import G2 from '@antv/g2';

export default {
  name: 'ChartPopulation',
  data() {
    return {
      data: [{
        year: '1990',
        type: 'Residents',
        number: 516259,
      }, {
        year: '2005',
        type: 'Residents',
        number: 573336,
      }, {
        year: '2008',
        type: 'Residents',
        number: 593588,
      }, {
        year: '2012',
        type: 'Residents',
        number: 635063,
      }, {
        year: '2014',
        type: 'Residents',
        number: 668342,
      }, {
        year: '2016',
        type: 'Residents',
        number: 704352,
      }, {
        year: '1990',
        type: 'Industrial Employees',
        number: 58147,
      }, {
        year: '2005',
        type: 'Industrial Employees',
        number: 45879,
      }, {
        year: '2008',
        type: 'Industrial Employees',
        number: 55106,
      }, {
        year: '2012',
        type: 'Industrial Employees',
        number: 41356,
      }, {
        year: '2014',
        type: 'Industrial Employees',
        number: 43966,
      }, {
        year: '2016',
        type: 'Industrial Employees',
        number: 48563,
      }],
    };
  },
  methods: {
    initChart() {
      const chart2 = new G2.Chart({
        container: 'chart-population',
        forceFit: true,
        height: 500,
      });
      chart2.source(this.data);
      chart2.scale('number', {
        range: [0, 1],
      });
      chart2.scale('year', {
        range: [0, 1],
      });
      chart2.line().position('year*number').color('type').shape('smooth');
      chart2.point().position('year*number');
      chart2.render();
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>
