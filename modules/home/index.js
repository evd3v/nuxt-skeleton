const path = require('path');

export default function () {
  const { extendRoutes } = this;

  extendRoutes((routes) => {
    const homeRouteIdx = routes.findIndex((route) => !route.name);

    routes.splice(homeRouteIdx, 1, {
      path: '',
      name: 'home',
      component: path.resolve(__dirname, 'pages/Index.vue'),
    });
  });
}
