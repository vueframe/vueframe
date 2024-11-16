import { defineAsyncComponent } from 'vue';

export default {
    install(app) {
        // Use import.meta.glob to load all components dynamically
        const components = import.meta.glob('./components/*.vue', { eager: true });

        // Iterate over all components and register them globally
        Object.keys(components).forEach((path) => {
            const componentName = path.split('/').pop().replace('.vue', ''); // Get component name without extension
            const component = components[path]; // Import component

            // Register component globally
            app.component(componentName, defineAsyncComponent(() => Promise.resolve(component)));
        });
    },
};