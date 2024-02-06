# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### JK Comment ###

To Expose the Vit-React App is built inside the Docker lyaer to the Host layer, add the following options in the vite.config.ts

export default defineConfig({
  server: {
  	host: '0.0.0.0',
        port: 3000,
  },
})

