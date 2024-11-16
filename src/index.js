import { defineAsyncComponent } from 'vue';
import YouTube from './components/YouTube.vue';
import Dailymotion from './components/Dailymotion.vue';
import Vimeo from './components/Vimeo.vue';

export default {
    install(app) {
        // Register each component globally
        app.component('YouTube', YouTube);
        app.component('Dailymotion', Dailymotion);
        app.component('Vimeo', Vimeo);
    },
};
