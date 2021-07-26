let mix = require('laravel-mix');


mix.js('resources/js/app.js', 'public/js/app.js')
.sass('resources/scss/app.scss', 'public/css/app.css');

const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
mix.webpackConfig(webpack => {
    return {
        plugins: [
            new NodePolyfillPlugin()
        ]
    };
});