// import this after install `@mdi/font` package
import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const light = {
  dark: false,
  colors: {
    background: "#F2F5FA",
    surface: "#FFFFFF",
    primary: "#6366f1",
    secondary: "#03DAC6",
    error: "#FC3C56",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FB8C00",
    "grey-50": "#FAFAFA",
    "grey-100": "#F5F5F5",
    "grey-200": "#EEEEEE",
    "grey-300": "#E0E0E0",
    "grey-400": "#BDBDBD",
    "grey-500": "#9E9E9E",
    "grey-600": "#757575",
    "grey-700": "#616161",
    "grey-800": "#424242",
    "grey-900": "#212121",
  },
  variables: {
    "code-color": "#d400ff",
    "overlay-scrim-background": "#4C4E64",
    "tooltip-background": "#4A5072",
    "overlay-scrim-opacity": 0.5,
    "hover-opacity": 0.04,
    "focus-opacity": 0.12,
    "selected-opacity": 0.06,
    "activated-opacity": 0.16,
    "pressed-opacity": 0.14,
    "dragged-opacity": 0.1,
    "disabled-opacity": 0.42,
    "border-color": "#2F2B3D",
    "border-opacity": 0.16,
    "high-emphasis-opacity": 0.78,
    "medium-emphasis-opacity": 0.68,
    "switch-opacity": 0.2,
    "switch-disabled-track-opacity": 0.3,
    "switch-disabled-thumb-opacity": 0.4,
    "switch-checked-disabled-opacity": 0.3,
    "bg-linear-color1": "#c6deff",
    "bg-linear-color2": "#f6f9ff",

    // Shadows
    "shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.05)",
    "shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.05)",
    "shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.05)",
  },
};

const dark = {
  dark: true,
  colors: {
    primary: "#6366f1",
    secondary: "#A8AAAE",
    success: "#28C76F",
    info: "#2196F3",
    warning: "#FF9F43",
    error: "#EA5455",
    background: "#13131A",
    surface: "#1A1A21",
    "grey-50": "#26293A",
    "grey-100": "#2F3349",
    "grey-200": "#26293A",
    "grey-300": "#4A5072",
    "grey-400": "#5E6692",
    "grey-500": "#7983BB",
    "grey-600": "#AAB3DE",
    "grey-700": "#B6BEE3",
    "grey-800": "#CFD3EC",
    "grey-900": "#E7E9F6",
  },

  variables: {
    "code-color": "#d400ff",
    "overlay-scrim-background": "#101121",
    "tooltip-background": "#5E6692",
    "overlay-scrim-opacity": 0.6,
    "hover-opacity": 0.04,
    "focus-opacity": 0.12,
    "selected-opacity": 0.06,
    "activated-opacity": 0.16,
    "pressed-opacity": 0.14,
    "dragged-opacity": 0.1,
    "disabled-opacity": 0.42,
    "border-color": "#D0D4F1",
    "border-opacity": 0.16,
    "high-emphasis-opacity": 0.78,
    "medium-emphasis-opacity": 0.68,
    "switch-opacity": 0.4,
    "switch-disabled-track-opacity": 0.4,
    "switch-disabled-thumb-opacity": 0.8,
    "switch-checked-disabled-opacity": 0.3,
    "bg-linear-color1": "#1A1A21",
    "bg-linear-color2": "#13131A",
    // Shadows
    "shadow-key-umbra-opacity": "rgba(0, 0, 0, 0.05)",
    "shadow-key-penumbra-opacity": "rgba(0, 0, 0, 0.05)",
    "shadow-key-ambient-opacity": "rgba(0, 0, 0, 0.05)",
  },
};

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    components,
    directives,
    defaults: {
      VCard: {
        // 您可以在这里添加其他默认属性
        // 例如：
        // color: 'primary',
        elevation: 2,
      },
      // 您也可以为其他组件设置默认值
      // VBtn: { ... },
      // VTextField: { ... },
    },
    theme: {
      themes: {
        light,
        dark,
      },
    },
  });
  app.vueApp.use(vuetify);
});
