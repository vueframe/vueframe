import YouTube from './components/YouTube.vue';
import Vimeo from './components/Vimeo.vue';
import Dailymotion from './components/Dailymotion.vue';

const components = { YouTube, Vimeo, Dailymotion };

const install = (app) => {
  for (const prop in components) {
    if (components.hasOwnProperty(prop)) {
      app.component(components[prop].name, components[prop]);
    }
  }
};

export { YouTube, Vimeo, Dailymotion };

export default {
  install,
};