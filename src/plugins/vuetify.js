/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import "@/styles/main.scss";
// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: {
        colors: {
          primary: '#2687e9',
          secondary: '#00aff0',
          background: '#f1f4f9'
        },
      },
      dark: {
        colors: {
          primary: '#fff',
          secondary: '#7e7e7e',
          background: '#000'
        },
      },
    },
  },
})
