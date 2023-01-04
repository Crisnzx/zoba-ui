import babel from "rollup-plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        file: "dist/cjs/index.js",
        format: "cjs",
        sourcemap: true,
        exports: "named",
      },
      {
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
        exports: "named",
      },
    ],
    plugins: [
      // babel({
      //   exclude: "node_modules/**",
      //   presets: ["@babel/preset-react"],
      // }),
      // external(),
      resolve(),
      commonjs(),
      typescript(),
      // terser(),
    ],
  },
  {
    input: "dist/esm/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    plugins: [dts()],
  },
];
