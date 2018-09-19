// This file is not going through babel transformation.
// So, we write it in vanilla JS
// (But you could use ES2015 features supported by your Node.js version)
module.exports = {
  webpack: (config, { dev }) => {
    // Perform customizations to webpack config
    const newConfig = config;
    if (dev) {
      newConfig.module.rules.push({
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        },
      });
    }
    // Important: return the modified config
    return newConfig;
  },
  webpackDevMiddleware: config => config,
};
