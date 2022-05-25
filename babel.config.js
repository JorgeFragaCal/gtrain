module.exports = {
  presets: [
  
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
  overrides: [
    {
      include: ["./node_modules"],
      plugins: [
        [
          "babel-plugin-transform-require-ignore",
          {
            extensions: [".css"],
          },
        ],
      ],
    },
  ],
};
