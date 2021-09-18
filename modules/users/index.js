const path = require('path');
const authModule = require('@nuxtjs/auth-next');

export default function (ctx) {
  const { extendRoutes, addPlugin, addModule } = this;

  extendRoutes((routes) => {
    routes.push({
      path: '/users',
      component: path.resolve(__dirname, 'pages/Index.vue'),
      children: [
        {
          name: 'users-index',
          path: '/',
          component: path.resolve(__dirname, 'pages/Home.vue'),
        },
      ],
    });
  });

  addModule({
    src: authModule,
    options: {
      strategies: {
        local: { scheme: 'local' },
      },
    },
  });

  this.options.plugins.push({
    src: path.resolve(__dirname, 'plugins/add-store.js'),
  });

  this.options.plugins.push({
    src: path.resolve(__dirname, 'plugins/add-service.js'),
  });

  this.options.plugins.push({
    src: path.resolve(__dirname, 'plugins/initialize.js'),
    mode: 'server',
  });
}
