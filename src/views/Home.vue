<template>
  <div :style="{ overflow: 'hidden' }">
    <header>
      <img data-aos="fade-in"
        data-aos-anchor-placement="top-top" src="../assets/Seattle.jpg" />
      <div class="header-outer">
        <div class="header-inner">
          <div>
            <span data-aos="fade-in" data-aos-anchor-placement="top-center">Reduce </span>
            <span>C</span>
            <span data-aos="fade-in" data-aos-anchor-placement="top-center">arbon Emission
            </span>
          </div>
          <div>
            <span data-aos="fade-in" data-aos-anchor-placement="top-center">for </span>
            <span>S</span>
            <span data-aos="fade-in" data-aos-anchor-placement="top-center">eattle</span>
          </div>
          <div>
            <span>E</span>
            <span data-aos="fade-in" data-aos-anchor-placement="top-center">nvironment</span>
          </div>
          <span>Project</span>
        </div>
      </div>
    </header>
    <Part
      right
      data-aos="fade-left"
      data-aos-anchor-placement="top-center"
      color="lightgreen" title="A Problem for Seattle">
      <div>
        <q>‘We are in trouble.’ Global carbon emissions reached a
          <span>record high</span> in 2018.</q>
        <q>Changes in the timing of streamflow reduce water supplies for competing demands.
          Sea level rise, erosion, inundation, risks to infrastructure and increasing ocean
          acidity pose <span>major threats</span>. Increasing wildfire,
          insect outbreaks and tree diseases
          are causing widespread tree die-off.</q>
        <q>Despite <span>17 years</span> of promises to lead the
          nation in reducing climate-wrecking carbon
          pollution, Seattle’s emissions continue to increase.</q>
      </div>
    </Part>
    <Part
      data-aos="fade-right"
      data-aos-anchor-placement="top-center"
      color="#ffbf00" title="A Wicked Problem for Seattle">
      <ol>
        <li>Solutions to wicked problems are
          <span>not true-or-false</span>, but better or worse.
        </li>
        <u>We can only reduce the emission, but not end it.</u>
        <li>Every solution to a wicked problem is a "one-shot operation";
          because there is no opportunity to learn by trial and error,
          every <span>attempt counts</span> significantly.</li>
        <u>Every environmental policy choice matters.</u>
        <li>There is <span>no well-described set</span> of permissible operations that may be
          incorporated into the plan.</li>
        <u>Infinite plausible environmental policies to reduce carbon emission.</u>
      </ol>
    </Part>
    <Part
      right
      data-aos="fade-left"
      data-aos-anchor-placement="top-center"
      color="#f56161" title="Problem Formulation">
      <chart-sector />
      <h3>State Representation</h3>
      <p>Total emission = (# of vehicles * vehicle unit emission)
        + (# of factories * factory unit emission)</p>
      <h3>Initial State</h3>
      <p>1,990,000 + 629,000 = 2,619,000 tons of CO2 in 2016 in
        the major categories of vehicles and commercial buildings</p>
      <h3>Goal State</h3>
      <p>1,000,000</p>
      <chart-vehicle />
    </Part>
    <Part
      data-aos="fade-right"
      data-aos-anchor-placement="top-center"
      color="teal" title="Operators">
      <h3>Transportation</h3>
      <div v-highlight>
        <pre>
          <code class="python">
            if policy == "Increase fuel efficiency":
                s2.vehicle_unit *= 0.8 # Adv: - vehicle unit emission
                s2.total_cost += s2.vehicle_number / 10000 # Cost: fluctuate with vehicle#
            elif policy == "Encourage public transportation":
                s2.vehicle_number -= 20000 # Adv: - vehicle#
                s2.factory_number += 500 # Disadv: + factory# for infrastrucure construction
                s2.total_cost += 20 # Cost: to invest in infrastructure
            elif policy == "Encourage carpooling":
                s2.vehicle_number *= 0.9 # Adv: - vehicle#
                s2.total_cost += 10 # Cost: loss in tax revenue
          </code>
        </pre>
      </div>
      <h3>Factory</h3>
      <div v-highlight>
        <pre>
          <code class="python">
            elif policy == "Close factories":
                s2.factory_number -= 1000 # Adv: - factory#
                s2.vehicle_number += 10000 # Disadv: + vehicle# for longer commutes
                s2.total_cost += 20 # Cost: employees compensation
            elif policy == "Switch to clean energy":
                s2.vehicle_unit *= 0.85 # Adv: - vehicle unit emission
                s2.factory_unit *= 0.85 # Adv: - factory unit emission
                s2.total_cost += (s2.vehicle_number / 10000) + (s2.factory_number / 2000)
                # Cost: affected by both vehicle# & factory#
            elif policy == "Regulate factories":
                s2.factory_number *= 0.95 # Adv: - factory number
                s2.factory_unit *= 0.9 # Adv: - factory unit emission
                s2.total_cost += s2.factory_number / 1000 # Cost: salary for regulatory staff
          </code>
        </pre>
      </div>
      <chart-population />
    </Part>
    <Part
      right
      data-aos="fade-left"
      data-aos-anchor-placement="top-center"
      color="#eb6954" title="Interactive Solving">
      <SessionInteractive />
    </Part>
    <Part
      data-aos="fade-right"
      data-aos-anchor-placement="top-center"
      color="#2682d6" title="Blind Search">
      <SessionBFS />
      <p>BFS timed out for expanding two much unnecessary states.</p>
      <ol>
        <span>Notice how the cost is still 5 or 6 moves away from initial
          state after expanding thousands of states.
        </span>
      </ol>
    </Part>
    <Part
      right
      data-aos="fade-left"
      data-aos-anchor-placement="top-center"
      color="#d94f42" title="A* Search">
      <SessionAStar />
      <p>Since the heuristics used is admissible, the optimal solution is found.</p>
      <ol>
        <span>In comparison, Heuristics Two returns a solution with more edges.</span>
      </ol>
    </Part>
    <Part
      data-aos="fade-right"
      data-aos-anchor-placement="top-center"
      color="#898989" title="Hamming Heuristics">
      <HeuristicsOne />
      <ol>
        <li>Admissible</li>
        <li>Consistent</li>
      </ol>
    </Part>
    <Part
      right
      data-aos="fade-left"
      data-aos-anchor-placement="top-center"
      color="#0fabff" title="Manhattan Heuristics">
      <HeuristicsTwo />
      <ol>
        <li>Not admissible</li>
        <li>Not consistent</li>
      </ol>
    </Part>
    <Part
      data-aos="fade-right"
      data-aos-anchor-placement="top-center"
      color="pink" title="State Space">
      <ol>
        <li>Average branching factor of 6.</li>
        <span>Unless a value is going to be lowered below zero, all operators are legal.</span>
        <li>Estimate 10 - 20 moves on optimal path.</li>
        <span>A single policy often reduce the total emission by 100,000.</span>
        <li>With large branching factor and estimated moves, a good heuristics is needed.</li>
      </ol>
    </Part>
    <Part
      right
      data-aos="fade-left"
      data-aos-anchor-placement="top-center"
      color="lightcyan" title="Future Plan">
      <ol>
        <li>Better heuristics function.</li>
        <span>Formulate admissible and consistent heuristics.</span>
        <li>Policies from more categories.</li>
        <span>Residential housing also produce a large portion of the total emission.</span>
        <span></span>
      </ol>
    </Part>
    <Part
      data-aos="fade-right"
      data-aos-anchor-placement="top-center"
      color="RebeccaPurple" title="Reflections">
      <ol>
        <li>The development of <span>heuristics</span> is challenging, finding compromise between
        the calculation cost of the heuristics and the
        admissibility / consistency is a struggle.</li>
        <li><span>Partnership</span> speeds up the project progress.
          Partners help identify bugs and oversights.</li>
      </ol>
    </Part>
  </div>
</template>

<script>
import AOS from 'aos';
import ChartSector from '../components/ChartSector.vue';
import ChartPopulation from '../components/ChartPopulation.vue';
import ChartVehicle from '../components/ChartVehicle.vue';
import SessionBFS from '../components/SessionBFS.vue';
import SessionAStar from '../components/SessionAStar.vue';
import SessionInteractive from '../components/SessionInteractive.vue';
import HeuristicsOne from '../components/HeuristicsOne.vue';
import HeuristicsTwo from '../components/HeuristicsTwo.vue';
import Part from '../components/Part.vue';


export default {
  name: 'Home',
  components: {
    ChartSector,
    ChartPopulation,
    ChartVehicle,
    SessionBFS,
    SessionAStar,
    SessionInteractive,
    HeuristicsOne,
    HeuristicsTwo,
    Part,
  },
  created() {
    AOS.init();
  },
};
</script>

<style>
header {
  width: 100%;
  height: 1080px;
  background: url(../assets/Seattle-original.jpg);
  color: white;
  font-size: 48px;
  font-family: 'Montserrat Subrayada', sans-serif;
}

header img {
  width: 100%;
  height: 1080px;
  position: absolute;
  top: 0;
}

.header-outer {
  height: 100%;
  width: 33%;
  position: relative;
  backdrop-filter: blur(10px) brightness(33%);
}

.header-inner {
  padding: 24px;
  position: absolute;
  bottom: 200px;
}

q {
  display: block;
  margin: 24px;
  padding: 32px;
}

q span,
ol span,
.list span {
  background: black;
  color: white;
}

li {
  margin: 24px;
}

h3 {
  display: block;
  font-family: 'Montserrat Subrayada', sans-serif;
}

pre code {
  font-size: 16px;
}
</style>
