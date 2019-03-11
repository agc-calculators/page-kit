import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";

export default [
  {
    input: "src/index.js",
    output: {
      file: "./build/agc-page-kit.js",
      format: "umd",
      name: "PageKit",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "styled-components": "styled"
      }
    },
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**" // only transpile our source code
      })
    ],
    external: ["react", "react-dom", "styled-components"]    
  },
  {
    input: "src/index.js",
    output: {
      file: "./build/agc-page-kit.module.js",
      format: "es",
      globals: {
        react: "React",
        "react-dom": "ReactDOM",
        "styled-components": "styled"
      }
    },
    plugins: [
      resolve(),
      babel({
        exclude: "node_modules/**" // only transpile our source code
      })
    ],
    external: ["react", "react-dom", "styled-components"]    
  }
];
