// rollup.config.js
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import * as fs from "fs";
import * as path from "path";

import pkg from "./package.json";

const minimize = terser({
  format: {
    comments: function (node, comment) {
      const text = comment.value;
      const { type } = comment;
      if (type === "comment2") {
        // multiline comment
        return /@preserve|@license|@cc_on/i.test(text);
      }
    },
  },
});

const banner = [
  `/** @preserve ${pkg.description} v${pkg.version}\n * ${pkg.homepage} */`,
  "/** @license",
  fs
    .readFileSync(path.resolve(__dirname, "LICENSE"))
    .toString()
    .split("\n")
    .map((s) => ` * ${s}`)
    .join("\n"),
  " */",
].join("\n");

const defaults = {
  input: "src/index.ts",
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
};

export default [
  {
    ...defaults,
    output: {
      format: "umd",
      name: "SimpleShortCodeParser",
      banner,
      file: pkg.main,
    },
    plugins: [typescript({ sourceMap: false }), minimize],
  },
  {
    ...defaults,
    output: {
      format: "esm",
      banner,
      dir: path.dirname(pkg.module),
    },
    plugins: [
      typescript({
        sourceMap: false,
        declaration: true,
        declarationDir: path.dirname(pkg.module),
        rootDir: "src/",
      }),
      minimize,
    ],
  },
];
