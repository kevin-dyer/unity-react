

// avoid transpilation of polymer library during build process
// module.exports = function override(config, env) {  
//   const allConfigs = config.module.rules.find(rule => rule.oneOf)
//   const buildConfig = allConfigs.oneOf.find(
//     conf =>
//       /** since part of babel module is always excluded from transpilation, we search for the
//         * config for js files where babel is excluded to find the config applied to node_modules
//         */
//     !!conf.exclude ?
//       (conf.test.toString().search("js") > -1) && (conf.exclude.toString().search("@babel") > -1)
//       : false)
//   buildConfig.exclude = /(@babel(?:\/|\\{1,2})runtime)|(@polymer)/ // add polymer to exclude regex
//   return config;
// }



//Customize-CRA
const {
  override,
  disableEsLint,
  addDecoratorsLegacy,
  overrideDevServer,
  watchAll,
  addBabelPlugins,
  // addWebpackPlugin
} = require("customize-cra");

// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  webpack: override(
    // usual webpack plugin

    // enable legacy decorators babel plugin
    addDecoratorsLegacy(),
    // addWebpackPlugin(new CopyWebpackPlugin([{
    //   context: 'node_modules/@webcomponents/webcomponentsjs',
    //   from: '**/*.js',
    //   to: 'webcomponents'
    // }])),
    disableEsLint(),
    ...addBabelPlugins(
      "@babel/plugin-proposal-object-rest-spread"
    ),
  ),
  devServer: overrideDevServer(
    // dev server plugin
    watchAll()
  )
};