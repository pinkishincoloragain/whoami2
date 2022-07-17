const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

//...
//...
//...

// This is the production and development configuration.
// It is focused on developer experience, fast rebuilds, and a minimal bundle.
module.exports = function (webpackEnv) {
  //...
  return {
    mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
    // Stop compilation early in production
    bail: isEnvProduction,
    devtool: isEnvProduction
      ? shouldUseSourceMap
        ? "source-map"
        : false
      : isEnvDevelopment && "cheap-module-source-map",
    //...
    //...
    //...
    plugins: [
      //...
      //...
      // webpack analyzer
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        openAnalyzer: false,
        generateStatsFile: true,
        statsFilename: "bundle-report.json",
      }),
    ].filter(Boolean),
    //...
  };
};
