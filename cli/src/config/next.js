// @flow

export default (paths: Object, useBabelrc: boolean, dev: boolean) => ({
  moduleRules: [
    // Disable require.ensure as it's not a standard language feature.
    {parser: {requireEnsure: false}},

    // Process JS with Babel.
    {
      test: /\.(js|jsx)$/,
      include: [paths.appSrc, paths.catalogSrcDir],
      loader: 'babel-loader',
      options: {
        babelrc: useBabelrc,
        presets: useBabelrc ? undefined : [require.resolve('next/babel'), require.resolve('../../../lib/babel/preset')],
        // TODO check if this is an issue when this plugin is already included
        plugins: [require.resolve('babel-plugin-syntax-dynamic-import')],
        cacheDirectory: true
      }
    }
  ],
  plugins: []
});
