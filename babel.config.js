module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins:[
      [
        'module-resolver',
        {
          alias: {
            src:'./src',
            '@public':'./public',
            '@assets':'./src/assets',
            '@screens':'./src/screens',
            '@components':'./src/components'
          }
        }
      ]
    ]
  };
};