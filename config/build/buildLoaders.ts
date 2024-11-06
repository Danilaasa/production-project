import webpack from "webpack"
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOptions} from "./types/config";
export function buildLoaders(options: BuildOptions):webpack.RuleSetRule[]  {


    const cssLoader = {
            test: /\.s[ac]ss$/i,
            use: [
                options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
                {
                    loader: "css-loader",
                    options: {
                        modules: {
                            auto: (resPath:string) => resPath.includes(".module."),
                            localIdentName: options.isDev ? "[path][name]__[local]--[hash:base64:5]": "[hash:base64:8]"
                        },
                    }
                },
                "sass-loader"
            ],
        }

    // ts-loader умеет обрабатывать jsx, но если бы мы писали на нативном js то нужен был бы babel для перевода например кода es6 в es5
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }

    return [
        typescriptLoader,
        cssLoader,
      ]
}