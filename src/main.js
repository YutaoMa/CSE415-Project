import Vue from 'vue';
import AntD from 'ant-design-vue';
import HLJS from 'highlight.js';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import 'ant-design-vue/dist/antd.css';
import 'aos/dist/aos.css';
import 'highlight.js/styles/atom-one-dark.css';

Vue.config.productionTip = false;
Vue.use(AntD);

Vue.directive('highlight', (el) => {
  const highlight = el.querySelectorAll('pre code');
  highlight.forEach((block) => {
    HLJS.highlightBlock(block);
  });
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
