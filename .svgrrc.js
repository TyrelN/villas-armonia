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
  svgProps: {
    width: "380",
    height: "1433",
  },
  icon: true,
  titleProp: true,
  descProp: true,
  ref: true,
  expandProps: "end",
  svgo: true,
};
