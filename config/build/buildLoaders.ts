import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoaders } from "./loaders/buildCssLoaders";
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
    const svgLoader = {
        test: /\.svg$/,
        use: ["@svgr/webpack"],
    };

    const fileLoader = {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
            {
                loader: "file-loader",
            },
        ],
    };

    const cssLoader = buildCssLoaders(options.isDev)

    // ts-loader умеет обрабатывать jsx, но если бы мы писали на нативном js то нужен был бы babel для перевода например кода es6 в es5
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
    };

    return [typescriptLoader, cssLoader, svgLoader, fileLoader];
}
