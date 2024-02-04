module.exports = function(api) {
  api.cache(true);
  return {
      presets: ["babel-preset-expo"],
      plugins: [
          "react-native-reanimated/plugin",
          [
              "module-resolver",
              {
                  alias: {
                      src: "./src",
                      "@public": "./public",
                      "@assets": "./src/assets",
                      "@screens": "./src/screens",
                      "@components": "./src/components",
                      "@utils": "./src/utils",
                      "@data": "./src/data"
                  },
              },
          ],
      ],
  }
};