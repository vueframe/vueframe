// Declare the module for your package
declare module '@vueframe/vueframe' {
  import { DefineComponent } from 'vue';

  // Declare the individual components
  export const YouTube: DefineComponent<{}, {}, any>;
  export const Dailymotion: DefineComponent<{}, {}, any>;
  export const Vimeo: DefineComponent<{}, {}, any>;

  // Declare the default export as an install function
  export default {
    install(app: any): void;
  };
}
