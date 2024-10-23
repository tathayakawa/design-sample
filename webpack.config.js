const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",

  entry: {
    main: "./src/ts/main.ts",
  },

  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'public/dist'),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              url: false,
              sourceMap: false,
              importLoaders: 2
            }
          },
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  ["autoprefixer", { grid: true }],
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: false,
            }
          }
        ]
      },
      {
        // 拡張子 .ts の場合
        test: /\.ts$/,
        // TypeScript をコンパイルする
        use: 'ts-loader',
      },
      {
        // 対象となるファイルの拡張子
        test: /\.(gif|png|jpg|svg)$/,
        // 画像を埋め込まず任意のフォルダに保存する
        type: "asset/resource",
      },
    ],
  },

  resolve: {
    extensions: [".ts", ".js"]
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css'
    })
  ],

  target: ["web", "es5"],

  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'public')
      }
    ]
  },

  performance: { hints: false },
};
