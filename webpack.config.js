const path = require("path");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const MODE = process.env.WEBPACK_ENV;
const ENTRY_FILE = path.resolve(__dirname, "assets", "js", "main.js");
const OUTPUT_DIR = path.join(__dirname, "static");

const config = {
  entry: ["@babel/polyfill", ENTRY_FILE],
  mode: MODE,
  // module을 발결할 때 마다, 다음과 같은 rules를 따르라!
  module: {
    rules: [
      {
        test: /\.(js)$/,
        use: [
          {
            loader: "babel-loader",
          },
        ],
      },
      {
        // 파일을 만나면 그 파일이 SCS인지 알아봐! 라는 뜻
        test: /\.(scss)$/,
        use: [
          {
            // MiniCssExtractPlugin로 그 부분만 추출해 주기
            loader: MiniCssExtractPlugin.loader,
          },
          {
            // CSS를 가져오기!
            loader: "css-loader",
          },
          {
            // 특정 plugins들을 CSS에 대해 실행 시키기!
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    //
                    autoprefixer,
                    {
                      // 코드를 시중에 있는 브라우저의 99.5%와 호환
                      browsers: "cover 99.5%",
                    },
                  ],
                ],
              },
            },
          },
          {
            // Sass를 CSS로 옮겨주기!
            loader: "sass-loader",
          },
        ],
      },
    ],
  },
  output: {
    path: OUTPUT_DIR,
    filename: "[name].js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "styles.css",
    }),
  ],
  devtool: "cheap-module-source-map",
};

module.exports = config;
