const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js');

mix.sass('resources/sass/app.scss', 'public/css/app.css');

mix.styles([
        'public/css/app.css',       //Add above compiled app.css file
        'public/css/animate.css'
    ], 'public/css/all.css');
    // .options({                         //Writes Auto Prefixes for all css
    //     postCss: [
    //         require('postcss-css-variables')()
    //     ]
    // });