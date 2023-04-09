const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  name: 'app4',

  exposes: {
    // './Component': './src/app/app.component.ts',
    './Module': './src/app/app4.module.ts',
    './Shared': './src/app/shared.module.ts',
    './HeaderComponent': './src/app/components/header.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
