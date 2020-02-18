module.exports = {
    ident: 'postcss',
    plugins: [
        require('tailwindcss'),
        require('postcss-preset-env'),
        require('autoprefixer'),
        require('cssnano'),
    ],
}
