module.exports = function override(config, env) {
    const babelRule = config.module.rules.find(rule => rule.oneOf);
    const babelLoader = babelRule.oneOf.find(rule => rule.loader && rule.loader.includes('babel-loader'));
    
    if (babelLoader) {
      babelLoader.options.plugins = [
        ...(babelLoader.options.plugins || []),
        ['@babel/plugin-transform-class-properties', { loose: true }],
        ['@babel/plugin-transform-private-methods', { loose: true }],
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ];
    }
    
    return config;
  };
  