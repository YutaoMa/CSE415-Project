<template>
    <div id="chart-sector" />
</template>

<script>
import G2 from '@antv/g2';

export default {
  name: 'ChartSector',
  data() {
    return {
      dataSector: [{
        item: 'Passenger Vehicles',
        count: 53,
        percent: 0.53,
      }, {
        item: 'Commercial',
        count: 20,
        percent: 0.20,
      }, {
        item: 'Residential',
        count: 20,
        percent: 0.15,
      }, {
        item: 'Comm. Trucks',
        count: 9,
        percent: 0.09,
      }, {
        item: 'Waste',
        count: 3,
        percent: 0.03,
      }],
    };
  },
  methods: {
    initChart() {
      const chart = new G2.Chart({
        container: 'chart-sector',
        forceFit: true,
        height: '500',
        width: '500',
      });
      chart.source(this.dataSector, {
        percent: {
          formatter: val => `${val * 100}%`,
        },
      });
      chart.coord('theta');
      chart.tooltip({
        showTitle: false,
      });
      chart.intervalStack()
        .position('percent')
        .color('item')
        .label('percent', {
          formatter: (val, item) => `${item.point.item}: ${val}`,
        });
      chart.render();
    },
  },
  mounted() {
    this.initChart();
  },
};
</script>
