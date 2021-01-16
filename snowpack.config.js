/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    src: "/"
  },
  plugins: [
    [
      "@snowpack/plugin-build-script",
      {
        "cmd": "postcss",
        "input": [
          ".css"
        ],
        "output": [
          ".css"
        ]
      },     
      "@snowpack/plugin-optimize",
      {
        "minifyJS": true,
        "minifyCSS": true,
        "minifyHTML": true
      }
    ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  }
  // OptimizeOptions: {
  //   entrypoints: 'auto' | string[] | ((options: { files: string[] }) => string[]);
  //   preload: true;
  //   bundle: true;
  //   splitting: true;
  //   treeshake: true;
  //   manifest: true;
  //   minify: true;
  //   target: 'es2020' | 'es2019' | 'es2018' | 'es2017';
  // }
};