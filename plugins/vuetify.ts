import "@mdi/font/css/materialdesignicons.css";

import "vuetify/styles";
import { createVuetify } from "vuetify";

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "light",
      themes: {
        light: {
          colors: {
            primary: "#16B8F3", // zima blue
            secondary: "#0D1C2D", // dark navy
            surface: "#FFFFFF",
          },
        },
      },
    },
  });
  app.vueApp.use(vuetify);
});
