<template>
  <section>
    <div :style="h2Style" class="h2-container">
      <h2>{{ title }}</h2>
    </div>
    <aside :style="asideStyle">
      <slot />
    </aside>
  </section>
</template>

<script>
export default {
  name: 'Part',
  computed: {
    h2Style() {
      const style = {};
      style.background = this.color;
      if (this.right) {
        style.right = 0;
      } else {
        style.left = 0;
      }
      return style;
    },
    asideStyle() {
      const style = {};
      if (this.right) {
        style.left = 0;
      } else {
        style.right = 0;
      }
      return style;
    },
  },
  props: {
    title: String,
    color: String,
    right: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style>
section {
  width: 100%;
  height: 1080px;
  display: block;
  position: relative;
  box-sizing: border-box;
}

.h2-container {
  font-family: 'Montserrat Subrayada', sans-serif;
  width: 33%;
  height: 100%;
  display: block;
  text-transform: uppercase;
  position: absolute;
  font-size: 32px;
  box-sizing: border-box;
  padding: 32px;
}

h2 {
  position: absolute;
  bottom: 512px;
}

aside {
  position: absolute;
  width: 67%;
  height: 100%;
  padding: 64px 24px;
  box-sizing: border-box;
  overflow: auto;
  background: #eeefef;
  border-bottom: 1px solid gray;
}
</style>
