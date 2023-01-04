import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/index.js",
  output: {
    file: "dist/index.es.js",
    format: "cjs",
    exports: "named",
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      presets: ["@babel/preset-react"],
    }),
    external(),
    resolve(),
    commonjs(),
    terser(),
  ],
};
