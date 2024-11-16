import { App as VueApp } from 'vue'; // Import VueApp to define the app type
import YouTube from './components/YouTube.vue';
import Dailymotion from './components/Dailymotion.vue';
import Vimeo from './components/Vimeo.vue';
// Import other components as needed

const components = {
  YouTube,
  Dailymotion,
  Vimeo,
  // Add more components here
};

// Define the install method that will register the components globally
const install = (app) => {
  Object.keys(components).forEach((componentName) => {
    app.component(componentName, components[componentName]);
  });
};

// Check if Vue is already available (for use in Vue CLI, Vite, or standalone)
// This is needed if Vue is already included globally in the browser or another app environment
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue); // Automatically install components if Vue is found in the global scope
}

// Export the install method so it can be used when the library is imported
export default {
  install,
};

// Optionally export each component for direct access (e.g., for manual import)
export { YouTube, Dailymotion, Vimeo };
