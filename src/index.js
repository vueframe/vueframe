import { App as VueApp } from 'vue'; // Import VueApp for proper type declaration
import YouTube from './components/YouTube.vue';
import Dailymotion from './components/Dailymotion.vue';
import Vimeo from './components/Vimeo.vue';

const components = {
  YouTube,
  Dailymotion,
  Vimeo,
};

const install = (app) => {
  Object.keys(components).forEach((componentName) => {
    app.component(componentName, components[componentName]);
  });
};

// Automatically install components if Vue is found globally
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
};

export { YouTube, Dailymotion, Vimeo };
