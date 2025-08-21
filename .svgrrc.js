module.exports = {
  svgoConfig: {
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            cleanupIds: false,
            removeViewBox: false,
            removeTitle: false,
          },
        },
      },
    ],
  },
  icon: false,
  titleProp: true,
  descProp: true,
  ref: true,
  expandProps: "end",
  svgo: true,
};
