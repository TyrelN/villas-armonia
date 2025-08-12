// svgo.config.js
module.exports = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // turn off only the ID cleanup here
          cleanupIds: false,
        },
      },
    },
    // now declare these separately to keep them
    {
      name: "removeViewBox",
      active: false,
    },
    {
      name: "removeTitle",
      active: false,
    },
  ],
};