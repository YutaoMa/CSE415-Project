<template>
  <div v-highlight>
    <pre>
      <code class="python">
        GOAL_VEHICLE_NUMBER = 400000
        GOAL_VEHICLE_UNIT = 2
        GOAL_FACTORY_NUMBER = 20000
        GOAL_FACTORY_UNIT = 10

        def h(s):
            cost = 0
            cost += (s.vehicle_number - GOAL_VEHICLE_NUMBER) / 1000
            cost += (s.vehicle_unit - GOAL_VEHICLE_UNIT) / 0.7 * 40
            cost += (s.factory_number - GOAL_FACTORY_NUMBER) / 50
            cost += (s.factory_unit - GOAL_FACTORY_UNIT) / 1.7 * 20
            return cost
      </code>
    </pre>
  </div>
</template>
