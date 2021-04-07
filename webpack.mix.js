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

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');


mix.sass('resources/sass/app.scss', 'public/css/app.css')
        .styles([
            'public/css/app.css',
            // 'public/css/jquery-select7.css',
            'public/css/animate.css'
        ], 'public/css/all.css');
    //    let mix = require('laravel-mix');
    
    //    require('laravel-mix-purgecss');
    
   mix.js('resources/js/app.js', 'public/dist/app.js')
       .sass('src/sass/app.scss', 'public/dist/app.css')
       .purgeCss({
           enabled: mix.inProduction(),
           folders: ['src', 'templates'],
           extensions: ['twig', 'html', 'js', 'php', 'vue'],
       })
       .setPublicPath('public');    