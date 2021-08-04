module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.tsx?$/,
    use: [
      {
        loader: require.resolve("babel-loader"),
        options: {
          presets: [require.resolve("babel-preset-react-app")]
        }
      }
    ]
  },
    {
      test: /\.(scss|css$)/,
      use: ['style-loader', 'css-loader', 'sass-loader']
    });
  config.resolve.extensions.push(".ts", ".tsx");

  return config;
};