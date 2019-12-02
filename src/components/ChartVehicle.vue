<template>
  <div id="chart-vehicle" />
</template>

<script>
import G2 from '@antv/g2';

export default {
  name: 'ChartVehicle',
  data() {
    return {
      data: [{
        year: '2010',
        number: 389000,
      }, {
        year: '2017',
        number: 461000,
      }, {
        year: '2018',
        number: 457000,
      }],
    };
  },
  methods: {
    initChart() {
      const chart3 = new G2.Chart({
        container: 'chart-vehicle',
        forceFit: true,
        height: 500,
      });
      chart3.source(this.data);
      chart3.scale('number', {
        range: [0, 1],
      });
      chart3.scale('year', {
        range: [0, 1],
      });
      chart3.line().position('year*number').shape('smooth');
      chart3.point().position('year*number');
      chart3.render();
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>
