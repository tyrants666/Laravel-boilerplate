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
    // 'public/css/inc/app.css',        //Add above compiled app.css file
    'public/css/inc/custom.css',
    'public/css/inc/animate.css',
    // 'public/css/inc/owl.carousel.min.css',
    // 'public/css/inc/owl.theme.default.min.css',
], 'public/css/all.css');   

// mix.postCss('public/css/all-imported.css', 'public/css/all-prefixed.css');   // Writes Auto Prefixes for all imported css


/*
 |--------------------------------------------------------------------------
 | Notes :- 
 |--------------------------------------------------------------------------*/

//  -- yarn watch compiles in loop
//  -- use mix.postcss instead of mix.styles because after "yarn prod" the output file of postCss gets minified & prefixed whereas in mix.style only gets minfied
//  -- mix.postCss -- gives error if minifed files is imported inside all-imported.css and compiled
//  -- Try to avoid minified files inside mix