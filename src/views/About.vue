<template>
  <div class="about">
    <a-row type="flex" justify="space-around">
      <a-col :span="10">
        <a-card title="Seattle’s 2016 Core Emissions by Sector">
          <div id="chart1" />
        </a-card>
      </a-col>
      <a-col :span="10">
        <a-card title="Seattle’s Population by Employment Type">
          <div id="chart2" />
        </a-card>
      </a-col>
      <a-col :span="10">
        <a-card title="Seattle’s Vehicle Ownerships">
          <div id="chart3" />
        </a-card>
      </a-col>
      <a-col :span="10">
        <a-card title="Carbon Emission Goal">
          <div id="chart4" />
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import G2 from '@antv/g2';

export default {
  name: 'about',
  data() {
    return {
      data3: [{
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
    initChart3() {
      const chart3 = new G2.Chart({
        container: 'chart3',
        forceFit: true,
        height: 500,
      });
      chart3.source(this.data3);
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
    this.initChart3();
  },
};
</script>
