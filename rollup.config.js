/*eslint no-process-env: "off"*/
// Rollup plugins
import babel from "rollup-plugin-babel"
import eslint from "rollup-plugin-eslint"
import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import replace from "rollup-plugin-replace"
import uglify from "rollup-plugin-uglify"
import postcss from "rollup-plugin-postcss"
import livereload from "rollup-plugin-livereload"
import serve from "rollup-plugin-serve"
import image from "rollup-plugin-img"

// PostCSS plugins
import simplevars from "postcss-simple-vars"
import nested from "postcss-nested"
import cssnext from "postcss-cssnext"
import postcssModules from "postcss-modules"
const cssExportMap = {}

export default {
  input: "src/main.js",
  output: {file: "build/main.min.js", format: "iife", sourcemap: "inline"},
  plugins: [
    postcss({
      extensions: [".css"],
      plugins: [
        simplevars(),
        nested(),
        cssnext(),
        postcssModules({
          getJSON (id, exportTokens) {
            cssExportMap[id] = exportTokens
          },
        }),
      ],
      getExport (id) {
        return cssExportMap[id]
      },
    }),
    commonjs({
      include: ["node_modules/**"],
      exclude: [
        "node_modules/lodash-es/**",
        "node_modules/symbol-observable/**",
      ],
      namedExports: {
        "node_modules/react/index.js": [
          "Children", "Component", "createElement",
        ],
        "node_modules/redux-logger/dist/redux-logger.js": [
          "createLogger",
        ],
      },
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    eslint({
      exclude: [
        "src/**/*.css",
        "src/**/*.png",
        "src/**/*.jpg",
        "src/**/*.svg",
      ],
    }),
    babel({
      exclude: "node_modules/**",
    }),
    image({limit: 1000000}),
    replace({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV || "development"),
    }),
    (process.env.NODE_ENV === "production" && uglify()),
    (process.env.NODE_ENV !== "production" && livereload({
      watch: "build",
    })),
    (process.env.NODE_ENV !== "production" && serve({
      contentBase: "",
      host: "localhost",
      port: 10001,
    })),
  ],
}
