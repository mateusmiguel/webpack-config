module.exports = {
  presets: [
    "@babel/preset-env",
    [
      "@babel/preset-react",
      { runtime: "automatic" }, //since react 17+, a way to not have to import react when you use a jsx.
    ],
  ],
};
